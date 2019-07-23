/**
 * Scroll the workspace to center on the given block.
 * @param {?string} id ID of block center on.
 * @public
 */
Blockly.WorkspaceSvg.prototype.centerOnBlock = function(id, hideChaff = true) {
    if (!this.scrollbar) {
        return;
    }
  
    const block = this.getBlockById(id);
    if (!block) {
        return;
    }
  
    // XY is in workspace coordinates.
    const xy = block.getRelativeToSurfaceXY();
    // Height/width is in workspace units.
    const heightWidth = block.getHeightWidth();
  
    // Find the enter of the block in workspace units.
    const blockCenterY = xy.y + heightWidth.height / 2;
  
    // In RTL the block's position is the top right of the block, not top left.
    const multiplier = this.RTL ? -1 : 1;
    const blockCenterX = xy.x + (multiplier * heightWidth.width / 2);
  
    // Workspace scale, used to convert from workspace coordinates to pixels.
    const scale = this.scale;
  
    // Center in pixels.  0, 0 is at the workspace origin.  These numbers may
    // be negative.
    const pixelX = blockCenterX * scale;
    const pixelY = blockCenterY * scale;
  
    const metrics = this.getMetrics();
  
    // Scrolling to here would put the block in the top-left corner of the
    // visible workspace.
    const scrollToBlockX = pixelX - metrics.contentLeft;
    const scrollToBlockY = pixelY - metrics.contentTop;
  
    // viewHeight and viewWidth are in pixels.
    const halfViewWidth = metrics.viewWidth / 2;
    const halfViewHeight = metrics.viewHeight / 2;
  
    // Put the block in the center of the visible workspace instead.
    const scrollToCenterX = scrollToBlockX - halfViewWidth;
    const scrollToCenterY = scrollToBlockY - halfViewHeight;
  
    if (hideChaff) {
        Blockly.hideChaff();
    }
    
    this.scrollbar.set(scrollToCenterX, scrollToCenterY);
};
