var indicator = new THREE.ArrowHelper(
  new THREE.Vector3(-1, 0, 0), 
  sphere.position,
  10, 
  0xFFFF00
); 

indicator.cone.castShadow = true;
indicator.line.castShadow = true;
scene.add( indicator );