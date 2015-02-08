(function () {
  var light = game.objects.light = new THREE.DirectionalLight(0xffffff, 0.7);
  light.position.set(50, 150, 0);
  light.castShadow = true;
  light.shadowDarkness = 1;
  light.shadowMapWidth = light.shadowMapHeight = 2048 * 4;
  game.scene.add(light);
})();