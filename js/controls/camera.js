(function() {
  var mouseDown = false,
    lastMouseEvent = null,
    INITIAL_TETA = 1.40,
    INITIAL_PHI = 0.20,
    INITIAL_RADIUS = game.objects.floor.length * 0.8,
    cameraRadius = INITIAL_RADIUS,
    cameraTeta = INITIAL_TETA,
    cameraPhi = INITIAL_PHI,
    cameraLookAt = new THREE.Vector3(),
    camera = game.objects.camera;

  function handleMouseDown(e) {
    mouseDown = true;
    lastMouseEvent = e;
  }

  function handleMouseMove(e) {
    if (mouseDown) { // Dragging
      cameraPhi += (e.x - lastMouseEvent.x) / 1000;
      cameraTeta -= (e.y - lastMouseEvent.y) / 1000;
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
  
  function resetCamera(e) {
    cameraTeta = INITIAL_TETA;
    cameraPhi = INITIAL_PHI;
    cameraRadius = INITIAL_RADIUS;
    updateCameraPosition();
  }

  function updateCameraPosition() {
    camera.position.x = cameraRadius * Math.sin(cameraTeta) * Math.cos(cameraPhi);
    camera.position.z = cameraRadius * Math.sin(cameraTeta) * Math.sin(cameraPhi);
    camera.position.y = cameraRadius * Math.cos(cameraTeta);
    camera.lookAt(cameraLookAt);
  }

  window.addEventListener('mousedown', handleMouseDown);
  window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('mouseup', handleMouseUp);
  window.addEventListener('mousewheel', handleMouseWheel);
  
  window.addEventListener('load', function () {
    document.getElementById('reset-camera').addEventListener('click', resetCamera);
  });
  
  updateCameraPosition();
})();