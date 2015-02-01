(function () {
  var floor = game.objects.floor = {};
  
  floor.width = 100;
  floor.length = 400;
  
  var floorMesh = floor.mesh = new Physijs.BoxMesh(
    new THREE.BoxGeometry(floor.length, 1, floor.width),
    game.functions.createMaterial(0xDDDDDD,0.3,1),
    0
  );

  floorMesh.receiveShadow = true;
  game.scene.add(floorMesh);
})();
