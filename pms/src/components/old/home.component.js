import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './home.css';

import Map from "./map.component";

export default class Home extends React.Component {
  render() {
    return (

<div>
<div class="horizontal">
   <ul>
      <li><a href="#">Home</a></li>
      <li class="secondlast"><a href="#">Logout</a></li>
      <li class="last"><a href="#">Account</a></li>
   </ul>
</div>

<center><h1>Pirate Fighting Crisis Management System</h1></center><br/>

  <div class="divSquare">
  <h2><center>Event Log</center></h2>
  </div>

  <div class="divSquare">
  <h2><center>Status: </center></h2>
  // This becomes map
  <Map/>
  </div>


  <div style={{'clear:both'}}></div>

  <div class="divSquare">
  <h2><center>Actions</center></h2>
<div style={"clear: both"}>
  <br/><center><h3 style={"float: left; margin-left: 40px;"}>Forces</h3></center>
<center><h3 style={"float: right; margin-right: 40px;"}>Response</h3></center>
  </div>
  <hr/>
  <div class="divdash">
  <center><h3 style={"float:left; margin-left: 40px;"}>US Navy</h3></center>
  <form action="/action_page.php">
  <label><input type="checkbox" name="Fighter Jet" value="Figher Jet"/> Fighter Jet</label>
  <br/>
  <label><input type="checkbox" name="Vessel" value="Vessel"/> Vessel</label>
  <br/>
  <label><input type="checkbox" name="Helicopter" value="Helicopter" checked/> Helicopter</label>
<br/><input type="submit" value="Submit Request" style={"position:relative; top:50px; left: 50%; color: #997272; cursor: pointer; "}/>
  </form>
 <br/>
 <br/>
 <br/>
 <br/>
  <center><h3 style={"float: left; margin-left: 40px;"}>Supplies</h3></center>
  <form action="/action_page.php">
  <br/><label><input type="checkbox" name="Medicine" value="Medicine"/> Medicine</label>
  <br/>
  <label><input type="checkbox" name="Food and Water" value="Food and Water"/> Food and Water</label>
<br/><input type="submit" value="Submit Request" style={"position:relative; top:35px; left: 50%; color: #997272; cursor: pointer;"}/>
      </form>
  </div>
  </div>

  <div class="divSquare">
  <h2><center>Additional Actions</center></h2>
<br/><input type="button" class="button" value="Contact Negotiators" style={"margin-left: 10px"}/><br/>
  <input type="button" class="button" value="Alert Ship" style={"margin-left: 10px"}/><br/><br/>

  <br/><h4><center>Caution</center></h4>
<input type="button" class="button" value="Request All" style={"margin-left: 10px"}/><br/><br/>
        </div>

  </div>
    );
  }
}
