var sphere, spheresToRemove = [];

function createSphere() {
  spheresToRemove.push(sphere);
  
  sphere = new Physijs.SphereMesh(
    new THREE.SphereGeometry(5, 32, 32),
    createMaterial(0xFF0000,0.3,1),
    100
  );

  sphere.position.x = 45;
  sphere.position.y = 6;
  sphere.castShadow = true;
  scene.add(sphere);
}

createSphere();

var box, i, j, k 
  floorWidth = floor.geometry.boundingBox.max.x - floor.geometry.boundingBox.min.x,
  boxSize = 5,
  space = 2,
  numberOfBoxes = Math.floor(floorWidth / (boxSize + space)),
  numberOfRows = 3,
  numberOfColumns = 4;

for (k = 0; k < numberOfColumns; k++) {
  for (j = 0; j < numberOfRows; j++) {
    for (i = 0; i < numberOfBoxes; i++) {
      box = new Physijs.BoxMesh(
        new THREE.BoxGeometry(boxSize, boxSize, boxSize),
        createMaterial(0x888888,0.8,0.2),
        10
      );
      
      box.castShadow = true;
      box.position.x = -45 + k * boxSize;
      box.position.y = j * (boxSize) + 3;
      box.position.z = i * (boxSize + 2) - 45 + (j%2) * boxSize / 3;
      scene.add(box);
    }
  }
}