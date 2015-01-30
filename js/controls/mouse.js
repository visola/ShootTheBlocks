var mouseIsDown = false;

function handleMouseDown(e) {
  mouseIsDown = true;
  
}

function handleMouseMove(e) {
  if (mouseIsDown) { // Dragging
    
  }
}

function handleMouseUp(e) {
  mouseIsDown = false;
}

window.addEventListener('mousedown', handleMouseDown);
window.addEventListener('mousemove', handleMouseMove);
window.addEventListener('mouseup', handleMouseUp);