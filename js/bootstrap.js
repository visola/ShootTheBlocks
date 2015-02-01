(function() {
  render = function() {
    game.scene.simulate(); // run physics
    game.renderer.render(game.scene, game.objects.camera); // render the scene
    requestAnimationFrame(render);
  };

  window.addEventListener("load", function () {
    requestAnimationFrame(render);
  });
})();