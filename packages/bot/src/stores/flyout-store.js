/* eslint-disable no-underscore-dangle */
import React from 'react';
import { observable, action } from 'mobx';
import FlyoutItem from '../components/flyout-item.jsx';

export default class FlyoutStore {
    @observable is_visible = false;
    @observable toolbox_bounds = {};
    @observable flyout_content = [];
    @observable flyout_width = 500;
    
    block_workspaces = [];
    listeners = [];

    /**
     * Sets whether the flyout is visible or not.
     * @param {*} is_visible
     * @memberof FlyoutStore
     */
    @action.bound setVisibility(is_visible) {
        this.is_visible = is_visible;

        // Cleanup.
        if (!is_visible) {
            this.block_workspaces.forEach(workspace => workspace.dispose());
            this.block_workspaces = [];
            this.listeners.forEach(Blockly.unbindEvent_);
            this.listeners = [];
            this.flyout_content = [];
            this.flyout_width = 500;
            
        }
    }

    /**
     * Position the flyout next to the toolbox.
     * @memberof FlyoutStore
     */
    @action.bound positionFlyout() {
        const el_toolbox = document.querySelector('.toolbox');
        this.toolbox_bounds = el_toolbox.getBoundingClientRect();
    }

    @action.bound setContents(xmlList) {
        const flyout_components = [];

        xmlList.forEach((node, index) => {
            const tagName = node.tagName.toUpperCase();
            if (tagName === 'BLOCK') {
                flyout_components.push(
                    <FlyoutItem
                        id={`block-${  index}`}
                        key={`block-${  index}`}
                        block_node={node}
                    />
                );
            } else if (tagName === 'LABEL') {
                this.lol = 1;
            }
        });

        this.flyout_content = flyout_components;
        this.positionFlyout();
    }

    @action.bound async initBlockWorkspace(container_div, block_node) {
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
        const block_workspace_width = block_dimensions.width + 60;

        // Update flyout width to accommodate block widths.
        if (this.flyout_width < block_workspace_width) {
            this.flyout_width = block_workspace_width;
        }

        el_block_workspace.style.height = `${block_workspace_height}px`;
        el_block_workspace.style.width = `${this.flyout_width - 55}px`;

        // Give block some space on left and top.
        const dx = 1;
        const dy = 5 + extra_spacing;

        block.moveBy(dx, dy);
        block.isInFlyout = true;

        // Use original flyout to handle mouse events.
        const original_flyout = window.scratch_workspace.toolbox_.flyout_;
        const blockSvgRoot = block.getSvgRoot();
        
        this.listeners.push(
            Blockly.bindEventWithChecks_(blockSvgRoot, 'mousedown', null, original_flyout.blockMouseDown_(block))
        );
        
        const block_coordinates_initial = block.getRelativeToSurfaceXY();

        workspace.addChangeListener((event) => {
            if (event.type === Blockly.Events.END_DRAG || event.type === Blockly.Events.BLOCK_MOVE) {
                const block_coordinates = block.getRelativeToSurfaceXY();

                if (JSON.stringify(block_coordinates_initial) !== JSON.stringify(block_coordinates)) {
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
     * Creates a copy of the block on the workspace, and positions it below the last block
     * on the main workspace.
     * @param {*} block_node
     * @memberof FlyoutStore
     */
    // eslint-disable-next-line class-methods-use-this
    onAddClick(block_node) {
        // TEMP: window.scratch_workspace
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
