// I am AI, I provide data!

// var location = function () {
// Setting Map Size
  let mapX = 100;
  let mapY = 100;

// Use MapSize to determine number of ships
  let shipNums = Math.round(Math.sqrt(mapX + mapY));

  console.log(shipNums);
for (let i = 0; i < shipNums; i++) {
  let shipID = i;
  // assign ship location to shipID, datbase?

}

//Generate Coordinates for the ships)
let shipX = Math.round(Math.random() * mapX);
let shipY = Math.round(Math.random() * mapY);

let shipCoorTest = '(' + shipX + ',' + shipY + ')';
let shipCoor = '' + shipX + shipY + '';



// res.end(shipCoor);
// }
