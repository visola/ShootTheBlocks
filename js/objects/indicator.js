(function() {
  var indicator = new THREE.ArrowHelper(
    new THREE.Vector3(-1, 0, 0), 
    game.objects.bullet.mesh.position,
    10, 
    0xFFFF00
  ); 

  indicator.cone.castShadow = true;
  indicator.line.castShadow = true;
  game.scene.add(game.objects.indicator = indicator);
})();