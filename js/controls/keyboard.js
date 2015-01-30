var directionH = 0,
  directionV = 0,
  power = 100,
  velocity;

function handleKeyPress (e) {
  var char = String.fromCharCode(e.keyCode);
  switch (char) {
    case ' ': // Space
      calculateVelocity();
      sphere.setLinearVelocity(velocity);
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
    case 'q':
      power -= 10;
      break;
    case 'e':
      power += 10;
      break;
    default:
  }
  calculateVelocity();
}

function calculateVelocity() {
  if (directionV < 0) directionV = 0;
  velocity = new THREE.Vector3(-power,directionV,directionH);
  indicator.setDirection(velocity.clone().normalize());
  indicator.setLength(power / 10);
}

calculateVelocity();

window.addEventListener("keypress", handleKeyPress);