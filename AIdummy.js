// I am AI, I provide data!
var events = require('events');
var util = require('util');

//Constructor
var Ships = function(shipID, shipCoor){
  this.shipID = shipID;
  this.shipCoor = shipCoor;
};

//allows Ships direct call to EventEmitter? Not 100% sure on how to elaborate, EVENT Constructor binded to Ships Constructor
util.inherits(Ships, events.EventEmitter);

// var location = function () {
// Setting Map Size
  let mapX = 100;
  let mapY = 100;

// Use MapSize to determine number of ships
  var shipNums = Math.round(Math.sqrt(mapX + mapY));

  var shipID = [];

// Generates ships
for (var i = 0; i < shipNums; i++){
  //Generate Coordinates for the ships)
  let shipX = Math.round(Math.random() * mapX);
  let shipY = Math.round(Math.random() * mapY);
  let shipCoor = '(' + shipX + ',' + shipY + ')';

// Possibly different way to define id?
  shipID[i] = new Ships(i + 1, shipCoor);
};

//creates an EventEmitter that will print out ship info
shipID.forEach(function(ships) {
  ships.on('sendloc', function(mssg){
    console.log('Ship: ' + ships.shipID + ' @ location: ' + ships.shipCoor);
  });
});

//calls specific ship by ID
shipID[2].emit('sendloc');
