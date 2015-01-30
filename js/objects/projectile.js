var sphere, spheresToRemove = [];

function createSphere() {
  spheresToRemove.push(sphere);
  
  sphere = new Physijs.SphereMesh(
    new THREE.SphereGeometry(2, 32, 32),
    createMaterial(0xFF0000,0.3,1),
    100
  );

  sphere.position.x = 45;
  sphere.position.y = 2;
  sphere.castShadow = true;
  scene.add(sphere);
}

createSphere();