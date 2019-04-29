import React, { Component } from 'react';
import './map.css';


const Square = ({value}) => (
  <button 
  className={
    value === 'M' ? "square-military" : 
    value === 'C' ? "square-commercial" : 
    value === "U" ? "square-threat": "square"}>
  {value}</button>
);


export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(105).fill(null),
      shipID: Array(5).fill(null),
      shipLocal: Array(5).fill(null),
      shipLocalOld: Array(5).fill(null),
      initial: true,
      status: Array(5).fill(null),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.refresh(),
      3000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  refresh() {

    var shipID = this.state.shipID.slice();
    var shipLocal = this.state.shipLocal.slice();
    var shipCoor;
    var shipStatus = this.state.status.slice();

    // initial state
    if (this.state.initial) {
      for (var i = 0; i < 5; i++) {
        shipCoor = Math.floor(Math.random() * 105);
        if (shipLocal[i - 1] == shipCoor) {
          shipCoor = Math.floor(Math.random() * 105);
        }
        if (i < 2) {

          shipID[i] = 'C'; //commercial
          shipLocal[i] = shipCoor;
          shipStatus[i] = 'good';
        }
        if (i == 2) {
          shipID[i] = 'M'; //military
          shipLocal[i] = shipCoor;
          shipStatus[i] = 'good';
        }
        if (i > 2) {
          shipID[i] = 'U'; //unknown
          shipLocal[i] = shipCoor;
          shipStatus[i] = 'good';

        }
      }
      this.setState({
        shipID: shipID,
        shipLocal: shipLocal,
        status: shipStatus,
        initial: false
      });
      return;
    }

    //movement
    if (!this.state.inital) {
      for (var i = 0; i < 5; i++) {
        // shipLocal = this.state.shipLocal.slice();

        var currentShip = shipLocal[i];
        var legalMoves = legalMove(currentShip, shipLocal, shipID);
        if (shipStatus[i] == 'good') {


          // function status(i) {
          //   for(var j = 0; j < 5; j++){
          //     if (shipLocal[i] == shipLocal[j]){
          //       return new move
          //     }
          //   }
          // }

          if (legalMoves == 0) {
            var move = Math.floor(Math.random() * 4) + 1;

            if (move == 1) {
              shipLocal[i] = currentShip - 1; //left
            }
            if (move == 2) {
              shipLocal[i] = currentShip + 1; // right
            }
            if (move == 3) {
              shipLocal[i] = currentShip - 15; // up
            }
            if (move == 4) {
              shipLocal[i] = currentShip + 15; // down
            }
            shipStatus[i] = 'good';

          }
          // if (legalMove == -3){
          //   this.state.status[i] = 'threat';
          // }
          if (legalMoves == -5) {
            shipStatus[i] = 'attack';
          };
          console.log(legalMoves);
          if (legalMoves != 0) {
            shipLocal[i] = currentShip + legalMoves;
            shipStatus[i] = 'good';
          }
          if (legalMoves != 0) {
            shipLocal[i] = currentShip + legalMoves;
            shipStatus[i] = 'good';
          }
        }
      }
      console.log(shipLocal);
      this.setState({
        status: shipStatus,
        shipLocal: shipLocal,
      });
    }
  }

  renderSquare(i) {
    const { shipLocal } = this.state;
    for (var j = 0; j < 5; j++) {
      if (shipLocal[j] === i) {
        return (
          <Square
            value={this.state.shipID[j]}
          />
        )
      }
    }
    return (
      <Square
        value={this.state.squares[i]}
      />
    );
  }

  /**
   * @param rows {Number} Number of rows for the grid
   * @param cols {Number} Number of columns for the grid
   * @returns a collection of rows and squares given the number of rows and columns specified
   */
  makeGrid = (rows, cols) => {
    let n = Array(cols).fill(0);
    let counter = -1;
    let jsx = Array(rows).fill(0).map(() => (
      <div className='board-row'>
        {n.map(() => {
          counter++;
          return (this.renderSquare(counter));
        })}
      </div>
    ));
    return jsx;
  }

  render() {
    return (
      <div>
        <div>
          {this.makeGrid(7, 15)}
        </div>
      </div>
    );
  }
}

// class Game extends React.Component {
//   render() {
//     return (
//       <div className="game">
//         <div className="game-board">
//           <Board />
//         </div>
//         <div className="game-info">
//           <div>{/* status */}</div>
//           <ol>{/* TODO */}</ol>
//         </div>
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <Game />,
//   document.getElementById('root')
// );

function legalMove(i, otherShipLocal, otherShipID) {
  var upperLimit = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
  var leftLimit = [15, 30, 45, 60, 75]
  var rightLimit = [29, 44, 59, 74, 89]
  var bottomLimit = [91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103]

  // check for attack
  for (j = 0; j < 5; j++) {
    if (j != i) {
      if (otherShipLocal[j] == i - 15 || otherShipLocal[j] == i + 15 || otherShipLocal[j] == i - 1 || otherShipLocal[j] == i + 1 || otherShipLocal[j] == i + 16 || otherShipLocal[j] == i + 14 || otherShipLocal[j] == i - 16 || otherShipLocal[j] == i - 14) {
        console.log("Neighbors " + otherShipLocal[j]);
        if (otherShipID[j] == 'U' && otherShipID[i] == 'C' || otherShipID[j] == 'C' && otherShipID[i] == 'U') {
          console.log("Attack" + otherShipLocal[j]);
          var stationary = -5;
          return stationary;
        }
      }
    }
  }

  var move = Math.floor(Math.random() * 3) + 1
  if (i == 0) {
    if (move == 1 || move == 3) {
      move = 15
    }
    if (move == 2) {
      move = 1
    }
    return move;
  }
  if (i == 14) {
    if (move == 1 || move == 3) {
      move = 15
    }
    if (move == 2) {
      move = 0 - 1
    }
    return move;
  }
  if (i == 90) {
    if (move == 1 || move == 3) {
      move = 0 - 15
    }
    if (move == 2) {
      move = 1
    }
    return move;
  }
  if (i == 104) {
    if (move == 1 || move == 3) {
      move = 0 - 15
    }
    if (move == 2) {
      move = 0 - 1
    }
    return move;
  }
  for (var j = 0; j < 15; j++) {
    if (i == bottomLimit[j]) {
      if (move == 1) {
        move = 0 - 1; //left
      }
      if (move == 2) {
        move = 1; // right
      }
      if (move == 3) {
        move = 0 - 15; // up
      }
      return move
    }

    if (i == upperLimit[j]) {
      if (move == 1) {
        move = 0 - 1; //left
      }
      if (move == 2) {
        move = 1; // right
      }
      if (move == 3) {
        move = 15; // down
      }
      return move;
    }

    if (i == leftLimit[j]) {
      if (move == 1) {
        move = 15; // down
      }
      if (move == 2) {
        move = 1; // right
      }
      if (move == 3) {
        move = 0 - 15; // up
      }
      return move;
    }

    if (i == rightLimit[j]) {
      if (move == 1) {
        move = 15; // down
      }
      if (move == 2) {
        move = 1; // right
      }
      if (move == 3) {
        move = 0 - 15; // up
      }
      return move;
    }
  }
  return 0;
}
