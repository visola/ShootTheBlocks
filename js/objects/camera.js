(function () {
  var camera = game.objects.camera = new THREE.PerspectiveCamera(35, w / h, 1, 1000);
  camera.lookAt(game.scene.position);
  game.scene.add(camera);
})();