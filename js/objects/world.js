var floorWidth = 100,
  floorLength = 400,
  floor;

floor = new Physijs.BoxMesh(
  new THREE.BoxGeometry(floorLength, 1, floorWidth),
  createMaterial(0xDDDDDD,0.3,1),
  0
);

floor.receiveShadow = true;
scene.add(floor);
