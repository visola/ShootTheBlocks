(function() {
  var i, j,
    initX = - game.objects.floor.length / 2,
    initY = game.objects.floor.height / 2,
    initZ = game.objects.floor.width / 2,
    margin = 10,
    lastPosX = initX + margin,
    lastPosY = initY + 0.1,
    lastPosZ = initZ - margin,
    objectsToAdd = [];

  var brick = {
    color: 0x880000,
    height: 4,
    length: 8,
    weight : 10,
    width: 4
  };
  
  var support = {
    color: 0x888888,
    height: 2,
    length: brick.length * 7,
    weight : 200,
    width: brick.width * 5
  };
  
  var createBox = function (props, x, y, z, rotate) {
    var w = props.width, l = props.length;
    if (rotate === true) {
        w = props.length;
        l = props.width;
    }
    
    var geo = new THREE.BoxGeometry(w, props.height, l);
    
    var box = new Physijs.BoxMesh(
      geo,
      game.functions.createMaterial(props.color,1,0),
      props.weight
    );
    
    box.castShadow = true;
    box.position.x = x;
    box.position.y = y;
    box.position.z = z;
    return box;
  }
  
  var layBox = function (props, offsetX, offsetY, offsetZ, rotate) {
    var newX = lastPosX + (offsetX || 0),
      newY = lastPosY + (offsetY || 0) + 0.1,
      newZ = lastPosZ - (offsetZ || 0);
    
    game.scene.add(createBox(props, newX, newY, newZ, rotate));
    
    lastPosX = newX;
    lastPosY = newY;
    lastPosZ = newZ;
  }
  
  var movePos = function (offsetX, offsetY, offsetZ) {
    lastPosX += offsetX;
    lastPosY += offsetY;
    lastPosZ += offsetZ;
  }

  var brickCount = 10;
  for (j = 0; j < 5; j++) {
    for (var i = 0; i < brickCount; i++) {
      layBox(brick, 0, 0, brick.length, false);
    }
    
    layBox(brick, brick.width / 2 +  brick.length / 2, 0, brick.length / 2 - brick.width / 2, true);
    for (var i = 0; i < brickCount - 1; i++) {
      layBox(brick, brick.length, 0, 0, true);
    }
    
    layBox(brick, brick.length / 2 - brick.width / 2, 0, - brick.length / 2 - brick.width / 2, false);
    for (var i = 0; i < brickCount - 1; i++) {
      layBox(brick, 0, 0, - brick.length, false);
    }
    
    layBox(brick, - brick.width / 2 - brick.length / 2, 0, - brick.length / 2 + brick.width / 2, true);
    for (var i = 0; i < brickCount - 1; i++) {
      layBox(brick, - brick.length, 0, 0, true);
    }
    
    movePos(-brick.width / 2, brick.height, brick.width / 2);
  }
})();
