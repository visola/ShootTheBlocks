(function() {
  var initX = - game.objects.floor.length / 2,
    initY = game.objects.floor.height / 2,
    initZ = game.objects.floor.width / 2,
    maxZ = - game.objects.floor.width / 2,
    margin = 10;

  var brick = {
    color: 0x880000,
    height: 2,
    length: 5,
    weight : 10,
    width: 2
  };
  
  var support = {
    color: 0x888888,
    height: 2,
    length: brick.length * 7,
    weight : 200,
    width: brick.width * 5
  }
  
  var createBox = function (props, x, y, z, rotate) {
    var w = props.width, l = props.length;
    if (rotate === true) {
        w = props.length;
        l = props.width;
    }
    
    var box = new Physijs.BoxMesh(
      new THREE.BoxGeometry(w, props.height, l),
      game.functions.createMaterial(props.color,0.8,0),
      props.weight
    );
    
    box.castShadow = true;
    box.position.x = x;
    box.position.y = y;
    box.position.z = z;
    return box;
  }
  
  var createRow = function (x, z, columns, layer, rotate) {
    var i, brickX, brickZ, temp;
    
    for (i = 0; i < columns; i++) {
      brickX = x + i * brick.length;
      brickZ = z;
      
      if (rotate) {
        temp = brickX;
        brickX = brickZ;
        brickZ = temp;
      }
      
      game.scene.add(createBox(brick, brickX, initY + layer * brick.height, brickZ, !rotate));
    }
  }

  for (var i = 0; i < 10; i++) {
    createRow(initX + brick.length / 2 + margin, initZ - brick.width / 2 - margin, 15, i);
    createRow(initX + brick.length / 2 + margin, maxZ + brick.width / 2 + margin, 15, i);
    
    createRow(initZ - margin - 15 * brick.length, -190, 15, i, true);
    createRow(initZ - margin - 15 * brick.length, -115, 15, i, true);
  }
})();
