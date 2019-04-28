import React, { Component } from 'react';


import Map from "./map.component";
import Navbar from "./navbar.component"
import Chat from "./chat.component";
import Request from "./request.component";

class House extends Component {
  render() {

    return (
      //need to render two different navbars depending on accountType
      // how do you pass username to next component?
      // through props?? such as <House value=this.state.username>
      // use this username to axios.get acctType and load nav
      <Navbar/>
    );
  }
}

export default House;
