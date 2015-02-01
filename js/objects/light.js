(function () {
  var light = game.objects.light = new THREE.DirectionalLight(0xffffff);
  light.position.set(45, 50, 45);
  light.castShadow = true;
  light.shadowDarkness = 1;
  light.shadowMapWidth = light.shadowMapHeight = 2048 * 4;
  game.scene.add(light);
})();