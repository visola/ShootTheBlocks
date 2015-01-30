var camera, floor, light, renderer, scene;

scene = new Physijs.Scene;

camera = new THREE.PerspectiveCamera(35, w / h, 1, 1000);
camera.lookAt( scene.position );
scene.add( camera );

floor = new Physijs.BoxMesh(
  new THREE.BoxGeometry(100, 1, 100),
  createMaterial(0xDDDDDD,0.3,1),
  0
);
floor.receiveShadow = true;
scene.add(floor);

light = new THREE.DirectionalLight(0xffffff);
light.position.set(45, 50, 45);
light.castShadow = true;
light.shadowDarkness = 1;
light.shadowMapWidth = light.shadowMapHeight = 2048 * 4;
scene.add(light);

window.addEventListener("load", function () {
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(w, h);
  renderer.shadowMapEnabled = true;
  renderer.shadowMapType = THREE.PCFSoftShadowMap;
  document.getElementById( 'viewport' ).appendChild( renderer.domElement );
});