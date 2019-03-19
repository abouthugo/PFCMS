var alert = 0;

function analyzeTrackData(badShipData, goodShipData) {
  var bShip = badShipsData[0];
  var gShip = goodShipData[0];

  if((bShip.coord('x') >= (gShip.coord('x') - 5)) &&
      (bShip.coord('x') <= (gShip.coord('x') + 5))) {
        if((bShip.coord('y') >= (gShip.coord('y') - 5)) &&
            (bShip.coord('y') <= (gShip.coord('y') + 5))) {
              alert = 1;
            }
  }

}
