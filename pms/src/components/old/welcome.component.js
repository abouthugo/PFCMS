import React from "react";
import './welcome.css';


export default class Welcome extends React.Component {

  render() {

    return (
      <div>
        <form onSubmit={this.props.onSubmit} className="modal-content animate">

          <div className="container">
            <label><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required/>

            <label ><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required/>

            {this.props.children}
          </div>
        </form>
      </div>
    );
  }
}
