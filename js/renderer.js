(function () {
  var renderer = game.renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(w, h);
  renderer.setClearColor( 0xffffff );
  renderer.shadowMapEnabled = true;
  renderer.shadowMapType = THREE.PCFSoftShadowMap;
  
  window.addEventListener("load", function () {
    document.getElementById( 'viewport' ).appendChild( renderer.domElement );
  });
})();