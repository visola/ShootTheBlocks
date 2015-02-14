(function () {
  var ambientLight = game.objects.ambientLight = new THREE.AmbientLight(0x101010);
  game.scene.add(ambientLight);

  var light = game.objects.light = new THREE.DirectionalLight(0xffffff, 0.7);
  light.position.set(50, 150, 0);
  light.castShadow = true;
  light.shadowDarkness = 1;
  light.shadowMapWidth = light.shadowMapHeight = 2048 * 4;
  game.scene.add(light);
})();