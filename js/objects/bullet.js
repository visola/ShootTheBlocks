(function () {
  var bullet = game.objects.bullet = {};
  
  bullet.radius = 3;
  bullet.weight = 50;

  var createBullet = bullet.createBullet = function () {
    var sphere = new Physijs.SphereMesh(
      new THREE.SphereGeometry(bullet.radius, 32, 32),
      game.functions.createMaterial(0xFF0000,0.3,0.5),
      bullet.weight
    );

    sphere.position.x = game.objects.floor.length / 2 - bullet.radius * 2;
    sphere.position.y = bullet.radius + 1;
    sphere.castShadow = true;
    return sphere;
  }

  var newBullet = bullet.newBullet = function () {
    game.scene.add(bullet.mesh = createBullet());
  }
  
  newBullet();
})();