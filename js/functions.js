(function() {
  
  game.functions.createMaterial = function (color, friction, restitution) {
    if (!friction) {
      return new THREE.MeshLambertMaterial({color:color})
    } else {
      return Physijs.createMaterial(
        new THREE.MeshLambertMaterial({color:color}),
        friction,
        restitution
      );
    }
  }
  
})();