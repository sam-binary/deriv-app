/* eslint-disable no-underscore-dangle */
import React from 'react';
import { observable, action } from 'mobx';
import FlyoutBlock from '../components/flyout-block.jsx';

export default class FlyoutStore {
    @observable is_visible = false;
    @observable toolbox_bounds = {};
    @observable flyout_content = [];
    @observable flyout_width = 350; // Min-width in pixels
    
    block_workspaces = [];
    listeners = [];

    /**
     * Position the flyout next to the toolbox.
     * @memberof FlyoutStore
     */
    @action.bound positionFlyout() {
        const el_toolbox = document.querySelector('.toolbox');
        this.toolbox_bounds = el_toolbox.getBoundingClientRect();
    }

    /**
     * Parses XML contents passed by toolbox.
     * @param {*} xmlList
     * @memberof FlyoutStore
     */
    @action.bound setContents(xmlList) {
        this.flyout_width = 350;

        const flyout_components = [];

        xmlList.forEach((node, index) => {
            const tagName = node.tagName.toUpperCase();
            const key = Math.random() + index; // TODO: Don't randomise.

            if (tagName === 'BLOCK') {
                flyout_components.push(
                    <FlyoutBlock
                        key={key}
                        id={`flyout__block-ws--${index}`}
                        block_node={node}
                        onInfoClick={() => alert('Hello')}
                    />
                );
            } else if (tagName === 'LABEL') {
                flyout_components.push(
                    <div key={key} className='flyout__item-label'>
                        { node.getAttribute('text') }
                    </div>
                );
            } else if (tagName === 'BUTTON') {
                const callbackKey = node.getAttribute('callbackKey');
                let callback = window.scratch_workspace.getButtonCallback(callbackKey);
                
                if (typeof callback !== 'function') {
                    callback = () => {};
                }

                flyout_components.push(
                    <button
                        key={key}
                        className='flyout__item-button'
                        onClick={(button) => {
                            // Workaround for not having a flyout workspace.
                            button.targetWorkspace_ = window.scratch_workspace;
                            button.getTargetWorkspace = () => button.targetWorkspace_;
                            callback(button);
                        }}
                    >
                        {node.getAttribute('text')}
                    </button>
                );
            }
        });

        this.flyout_content.replace(flyout_components);
        this.setVisibility(true);
        this.positionFlyout();
    }

    /**
     * Sets whether the flyout is visible or not.
     * @param {*} is_visible
     * @memberof FlyoutStore
     */
    @action.bound setVisibility(is_visible) {
        this.is_visible = is_visible;
        if (!is_visible) {
            this.flyout_content.clear();
        }
    }

    /**
     * Intialises a workspace unique to the passed block_node
     * @param {*} container_div Containing div for the Blockly.Workspace
     * @param {*} block_node XML DOM of a Blockly.Block
     * @memberof FlyoutStore
     */
    @action.bound initBlockWorkspace(container_div, block_node) {
        const el_block_workspace = document.getElementById(container_div);
        const workspace = Blockly.inject(el_block_workspace, {
            media     : 'dist/media/',
            scrollbars: false,
        });

        const block = Blockly.Xml.domToBlock(block_node, workspace);
        const block_dimensions = block.getHeightWidth();

        // Some blocks have hats, consider their height.
        const extra_spacing = block.startHat_ ? Blockly.BlockSvg.START_HAT_HEIGHT : 0;
        const block_workspace_height = block_dimensions.height + extra_spacing + 10;
        const block_workspace_width = Math.max(this.flyout_width, block_dimensions.width + 60);

        // Update flyout width to accommodate block widths.
        this.flyout_width = block_workspace_width;

        el_block_workspace.style.height = `${block_workspace_height}px`;
        el_block_workspace.style.width = `${this.flyout_width - 55}px`;

        // Give block some space on left and top.
        const dx = 1;
        const dy = 5 + extra_spacing;

        block.moveBy(dx, dy);

        // Use Blockly flyout to handle mouse events.
        const blockly_flyout = window.scratch_workspace.toolbox_.flyout_;

        this.listeners.push(
            Blockly.bindEventWithChecks_(block.getSvgRoot(), 'mousedown', null, (test) => {
                window.scratch_workspace.toolbox_.clearSelection();
                blockly_flyout.blockMouseDown_(block)(test);
            })
        );

        const block_initial_coordinates = block.getRelativeToSurfaceXY();

        workspace.addChangeListener((event) => {
            if (event.type === Blockly.Events.END_DRAG || event.type === Blockly.Events.BLOCK_MOVE) {
                const block_coordinates = block.getRelativeToSurfaceXY();

                if (JSON.stringify(block_initial_coordinates) !== JSON.stringify(block_coordinates)) {
                    const x = Math.abs(block_coordinates.x - dx);
                    const y = Math.abs(block_coordinates.y - dy);

                    Blockly.Events.disable();
                    block.moveBy(-x, -y);
                    Blockly.Events.enable();
                }
            }
        });

        this.block_workspaces.push(workspace);

        // Resize all known workspaces.
        this.block_workspaces.forEach(block_workspace => Blockly.svgResize(block_workspace));
    }

    /**
     * Creates a copy of the block on the workspace, and positions it
     * below the last block on the main workspace.
     * @param {*} block_node
     * @memberof FlyoutStore
     */
    // eslint-disable-next-line class-methods-use-this
    onAddClick(block_node) {
        const block = Blockly.Xml.domToBlock(block_node, window.scratch_workspace);
        const top_blocks = window.scratch_workspace.getTopBlocks(true);

        if (top_blocks.length) {
            const last_block = top_blocks[top_blocks.length - 1];
            const last_block_xy = last_block.getRelativeToSurfaceXY();
            const extra_spacing = last_block.startHat_ ? Blockly.BlockSvg.START_HAT_HEIGHT : 0;
            const y = last_block_xy.y + last_block.getHeightWidth().height + extra_spacing + 30;
            
            block.moveBy(last_block_xy.x, y);
        }

        window.scratch_workspace.centerOnBlock(block.id, false);
        
    }
}
