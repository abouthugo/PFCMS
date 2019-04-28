import React, { Component } from 'react';
import axios from 'axios';


import Welcome from "./components/landing/welcome.component";
import Map from "./components/home/map.component";
import House from "./components/home/house.component";



class App extends Component {
  constructor(props) {
    super(props);
    this.onChangePass = this.onChangePass.bind(this);
    this.onChangeUser = this.onChangeUser.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      username: '',
      password: '',
      login: true,
      admin: false
    }
  }

  onChangeUser(e) {
      this.setState({
        username: e.target.value
        });
    }
  onChangePass(e) {
      this.setState({
        password: e.target.value
        });
    }



  display() {
    if (!this.state.login){
      return <div> <div> <House/> </div>  </div>
    }
    else {
      // login form
      return (<div>
        <form onSubmit={this.props.onSubmit} className="modal-content animate">
          <div className="container">
            <label><b>Username</b></label>
            <input  type="text"
                        onChange={this.onChangeUser}
                        required
                        />
            <label ><b>Password</b></label>
            <input  type="text"
                        onChange={this.onChangePass}
                        required
                        />
            {this.props.children}
          </div>
        </form>
        <button onClick={this.onSubmit}> Login </button>
      </div>
      );
    }
  }

  onSubmit(e) {
    e.preventDefault();

    var serverLocation = "http://192.168.1.5:4000/users/" + this.state.username;
      axios.get(serverLocation)
      .then(res => {
        var correctPass = res.data.password;
        if (this.state.password == correctPass){
          this.setState({
            login: false
          });
          console.log('switch');
        }
    })
    .catch(function (error){
      console.log(error);
    });
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
