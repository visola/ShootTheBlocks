var spheresToRemove = [],
  sphereRadius = 3,
  sphere;

function createSphere() {
  spheresToRemove.push(sphere);
  
  sphere = new Physijs.SphereMesh(
    new THREE.SphereGeometry(sphereRadius, 32, 32),
    createMaterial(0xFF0000,0.3,0.5),
    50
  );

  sphere.position.x = floorLength / 2 - sphereRadius * 2;
  sphere.position.y = sphereRadius + 1;
  sphere.castShadow = true;
  scene.add(sphere);
}

createSphere();