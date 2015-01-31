var mouseDown = false,
  lastMouseEvent = null,
  cameraRadius = floorLength * 0.8,
  cameraHeight = 50,
  cameraLookAt = new THREE.Vector3(),
  cameraTeta = 0.11;

function handleMouseDown(e) {
  mouseDown = true;
  lastMouseEvent = e;
}

function handleMouseMove(e) {
  if (mouseDown) { // Dragging
    cameraTeta += (e.x - lastMouseEvent.x) / 1000;
    cameraHeight += (e.y - lastMouseEvent.y) / 10;
    updateCameraPosition();
    lastMouseEvent = e;
  }
}

function handleMouseUp(e) {
  mouseDown = false;
}

function handleMouseWheel(e) {
  cameraRadius -= e.wheelDeltaY;
  cameraLookAt.x -= e.wheelDeltaX;
  updateCameraPosition();
}

function updateCameraPosition() {
  camera.position.x = cameraRadius * Math.cos(cameraTeta);
  camera.position.y = cameraHeight;
  camera.position.z = cameraRadius * Math.sin(cameraTeta);
  camera.lookAt(cameraLookAt);
}

window.addEventListener('mousedown', handleMouseDown);
window.addEventListener('mousemove', handleMouseMove);
window.addEventListener('mouseup', handleMouseUp);
window.addEventListener('mousewheel', handleMouseWheel);

updateCameraPosition();