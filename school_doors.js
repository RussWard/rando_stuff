

function schoolDoors() {
  let doors = [];
  for (var i = 0; i < 100; i++) {
    doors[i] = true;
  }
  for (var j = 1; j < 100; j++) {
    for (var k = 0; k < 100; k = k + j) {
      doors[k] = !doors[k];
    }
  }
  return doors.reduce((acc, openDoor) => {
    if (openDoor) {
       acc++ 
    }
    return acc;
  }, 0)
}