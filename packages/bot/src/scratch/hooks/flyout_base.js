/* eslint-disable */
/**
 * Create a copy of this block on the workspace.
 * @param {!Blockly.BlockSvg} originalBlock The block to copy from the flyout.
 * @return {Blockly.BlockSvg} The newly created block, or null if something
 *     went wrong with deserialization.
 * @package
 */
Blockly.Flyout.prototype.createBlock = function(event, originalBlock) {
    let newBlock = null;
    Blockly.Events.disable();
    const variablesBeforeCreation = this.targetWorkspace_.getAllVariables();
    this.targetWorkspace_.setResizesEnabled(false);
    try {
        newBlock = this.placeNewBlock_(event, originalBlock);
        // Close the flyout.
        Blockly.hideChaff();
    } finally {
        Blockly.Events.enable();
    }
  
    const newVariables = Blockly.Variables.getAddedVariables(this.targetWorkspace_,
        variablesBeforeCreation);
  
    if (Blockly.Events.isEnabled()) {
        Blockly.Events.setGroup(true);
        Blockly.Events.fire(new Blockly.Events.Create(newBlock));
        // Fire a VarCreate event for each (if any) new variable created.
        for (let i = 0; i < newVariables.length; i++) {
            const thisVariable = newVariables[i];
            Blockly.Events.fire(new Blockly.Events.VarCreate(thisVariable));
        }
    }
    if (this.autoClose) {
        this.hide();
    }
    window.scratch_workspace.toolbox_.clearSelection();

    newBlock.isInFlyout = true;
    return newBlock;
};

/**
 * Copy a block from the flyout to the workspace and position it correctly.
 * @param {!Blockly.Block} oldBlock The flyout block to copy.
 * @return {!Blockly.Block} The new block in the main workspace.
 * @private
 */
Blockly.Flyout.prototype.placeNewBlock_ = function(event, oldBlock) {
    const targetWorkspace = this.targetWorkspace_;
    const svgRootOld = oldBlock.getSvgRoot();
    if (!svgRootOld) {
        throw 'oldBlock is not rendered.';
    }
  
    // Create the new block by cloning the block in the flyout (via XML).
    const xml = Blockly.Xml.blockToDom(oldBlock);
    // The target workspace would normally resize during domToBlock, which will
    // lead to weird jumps.  Save it for terminateDrag.
    targetWorkspace.setResizesEnabled(false);
  
    // Using domToBlock instead of domToWorkspace means that the new block will be
    // placed at position (0, 0) in main workspace units.
    const block = Blockly.Xml.domToBlock(xml, targetWorkspace);
    const svgRootNew = block.getSvgRoot();
    if (!svgRootNew) {
        throw 'block is not rendered.';
    }
  
    // The offset in pixels between the main workspace's origin and the upper left
    // corner of the injection div.
    const mainOffsetPixels = targetWorkspace.getOriginOffsetInPixels();
  
    // The offset in pixels between the flyout workspace's origin and the upper
    // left corner of the injection div.
    const flyoutOffsetPixels = this.workspace_.getOriginOffsetInPixels();
  
    // The position of the old block in pixels relative to the flyout
    // workspace's origin.
    const oldBlockPosPixels = new goog.math.Coordinate(event.clientX - 50, event.clientY - 20);
  
    // The position of the old block in pixels relative to the upper left corner
    // of the injection div.
    const oldBlockOffsetPixels = goog.math.Coordinate.sum(flyoutOffsetPixels,
        oldBlockPosPixels);
  
    // The position of the old block in pixels relative to the origin of the
    // main workspace.
    const finalOffsetPixels = goog.math.Coordinate.difference(oldBlockOffsetPixels,
        mainOffsetPixels);
  
    // The position of the old block in main workspace coordinates.
    const finalOffsetMainWs = finalOffsetPixels.scale(1 / targetWorkspace.scale);
  
    block.moveBy(finalOffsetMainWs.x, finalOffsetMainWs.y);
    return block;
};
