var box, i, j, k,
  boxSize = 5,
  boxInitX = - floorLength / 2 + boxSize / 2,
  boxInitZ = floorWidth / 2 - boxSize / 2,
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
      box.position.x = boxInitX + k * boxSize;
      box.position.y = j * (boxSize) + 3;
      box.position.z = i * (boxSize + 2) - boxInitZ + (j%2) * boxSize / 3 - (k%2) * boxSize / 3;
      scene.add(box);
    }
  }
}