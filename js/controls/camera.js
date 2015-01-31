var mouseDown = false,
  lastMouseEvent = null,
  radius = 150,
  height = 50,
  teta = Math.PI / 4;

function handleMouseDown(e) {
  mouseDown = true;
  lastMouseEvent = e;
}

function handleMouseMove(e) {
  if (mouseDown) { // Dragging
    teta += (e.x - lastMouseEvent.x) / 1000;
    height += (e.y - lastMouseEvent.y) / 10;
    updateCameraPosition();
    lastMouseEvent = e;
  }
}

function handleMouseUp(e) {
  mouseDown = false;
}

function updateCameraPosition() {
  camera.position.x = radius * Math.cos(teta);
  camera.position.y = height;
  camera.position.z = radius * Math.sin(teta);
  camera.lookAt(scene.position);
}

window.addEventListener('mousedown', handleMouseDown);
window.addEventListener('mousemove', handleMouseMove);
window.addEventListener('mouseup', handleMouseUp);

updateCameraPosition();