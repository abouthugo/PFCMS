import React, { Component } from 'react';

import Welcome from "./components/welcome.component";
import Map from "./components/map.component"

function Home(props) {
  if (props.login){
    return <div>
      <h1>Test</h1>
    </div>;
  }
  else {
    return <div>
    <Welcome>
    {props.children}
    </Welcome>
    </div>
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      login: true,
      admin: false
    }
  }

  display() {
    if (!this.state.login){
      return <Map/>
    }
    else {
      return <Welcome>
      <button onClick={this.onSubmit}> Login </button>
      </Welcome>
    }
  }

  onSubmit() {
    this.setState({login: false});
    console.log("change");
  }

  render() {
    return (
        <div>
        {this.display()}
        </div>
    );
  }
}

export default App;
