var keyDownStart = 0;

function keyDown (e) {
  if (keyDownStart == 0) {
    keyDownStart = new Date().getTime();
  }
  
  switch (e.keyCode) {
    case 32: // Space
      break;
    default:
  }
}

var y = 0;

function keyUp (e) {
  switch (e.keyCode) {
    case 32: // Space
      var power = (new Date().getTime() - keyDownStart) / 2;
      if (power > 150) power = 150;
      sphere.setLinearVelocity(new THREE.Vector3(-power,0,y));
      setTimeout(createSphere, 1500);
      break;
    case 37:
      y += 10;
      break;
    case 39:
      y -= 10;
      break;
    default:
  }
  keyDownStart = 0
}

window.addEventListener("keydown", keyDown);
window.addEventListener("keyup", keyUp);
