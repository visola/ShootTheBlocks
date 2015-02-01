(function () {
  var directionH = 0,
    directionV = 0,
    power = 100,
    indicator = game.objects.indicator,
    bulletMesh = game.objects.bullet.mesh,
    velocity;

  function handleKeyPress (e) {
    var char = String.fromCharCode(e.keyCode);
    switch (char) {
      case ' ': // Space
        calculateVelocity();
        bulletMesh.setLinearVelocity(velocity);
        break;
      case 'a':
        directionH += 1;
        break;
      case 'd':
        directionH -= 1;
        break;
      case 'w':
        directionV += 1;
        break;
      case 's':
        directionV -= 1;
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
})();