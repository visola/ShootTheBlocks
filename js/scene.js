var camera, renderer, scene;

initializeScene = function () {
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(w, h);
  document.getElementById( 'viewport' ).appendChild( renderer.domElement );
  
  scene = new Physijs.Scene;
  
  camera = new THREE.PerspectiveCamera(35, w / h, 1, 1000);
  camera.position.set( 100, 50, 100 );
  camera.lookAt( scene.position );
  scene.add( camera );
}

window.addEventListener("load", initializeScene);