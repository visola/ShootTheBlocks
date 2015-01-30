var directionH = 0,
  directionV = 0
  power = 100;

function handleKeyPress (e) {
  var char = String.fromCharCode(e.keyCode);
  switch (char) {
    case ' ': // Space
      sphere.setLinearVelocity(new THREE.Vector3(-power,directionV,directionH));
      setTimeout(createSphere, 1500);
      break;
    case 'a':
      directionH += 10;
      break;
    case 'd':
      directionH -= 10;
      break;
    case 'w':
      directionV += 2;
      break;
    case 's':
      directionV -= 2;
      break;
    default:
  }
  
  if (directionV < 0) directionV = 0;
}

window.addEventListener("keypress", handleKeyPress);
