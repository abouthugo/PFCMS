// I am AI, I provide data!
var events = require('events');
var util = require('util');

//Constructor
var Ships = function(shipID, shipCoor, shipType){
  this.shipID = shipID;
  this.shipCoor = shipCoor;
  this.shipType = shipType;
};

//allows Ships direct call to EventEmitter? Not 100% sure on how to elaborate, EVENT Constructor binded to Ships Constructor
util.inherits(Ships, events.EventEmitter);


// Setting Map Size
  let mapX = 6;
  let mapY = 6;

// Use MapSize to determine number of ships
  var shipNums = 5 //Math.round(Math.sqrt(mapX + mapY));

  var shipID = [];

// Generates ships
for (var i = 0; i < shipNums; i++){
  //Generate Coordinates for the ships)
  let shipX = Math.round(Math.random() * mapX);
  let shipY = Math.round(Math.random() * mapY);
  let shipCoor = '(' + shipX + ',' + shipY + ')';

  //Figures out ship type (Military, Commerical, Unknown)
  if (i % 2 == 0) {
    var shipType = 'Commercial';
  };
  if (i % 2 == 1 && i <= (shipNums/2)){
    var shipType = 'Military' ;
  };
  if (i % 2 == 1 && i > (shipNums/2)){
    var shipType = 'Unknown' ;
  };

// Possibly different way to define id?
  shipID[i] = new Ships(i + 1, shipCoor, shipType);
};

//creates an EventEmitter that will print out ship info
shipID.forEach(function(ships) {
  ships.on('sendloc', function(mssg){
    console.log('Ship: ' + ships.shipID + ' is a ' + ships.shipType + ' @ location: ' + ships.shipCoor);
  });
});

//calls specific ship by ID
exports.threats = function () {
  shipID.forEach(function(ships){
    if(ships.shipType == 'Unknown'){
      ships.emit('sendloc');
    };
  });
};
exports.support = function () {
  shipID.forEach(function(ships){
      if(ships.shipType == 'Military'){
      ships.emit('sendloc');
    };
  });
};
exports.passive = function () {
  shipID.forEach(function(ships){
    if(ships.shipType == 'Commercial'){
      ships.emit('sendloc');
    }
  });
};
