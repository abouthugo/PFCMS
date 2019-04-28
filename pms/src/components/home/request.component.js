import React, { Component } from 'react';
import axios from 'axios';

class Request extends Component {
  constructor(props) {
    super(props);
    this.onChangeMedic = this.onChangeMedic.bind(this);
    this.onChangeFood = this.onChangeFood.bind(this);
    this.onChangeHeli = this.onChangeHeli.bind(this);
    this.onChangeVessel = this.onChangeVessel.bind(this);
    this.onChangeJet = this.onChangeJet.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      medkits: '2',
      food: '',
      heli: false,
      vessel: false,
      jet: false
    }
  }

  // Request <<---- Start Here
  // post request to server as well as to chat
  // request is a form like login, work from that base
  // make sure requests go to the DB
  // then set up chat?
  onChangeMedic(e) {
      this.setState({
        medkits: '' + e.target.value
      });
    }

  onChangeFood(e) {
      this.setState({
        food: e.target.value
      });
    }

  onChangeHeli(e) {
    this.setState({
      heli: e.target.checked
    });
  }

  onChangeVessel(e) {
    this.setState({
      vessel: e.target.checked
    });
  }

  onChangeJet(e) {
    this.setState({
      jet: e.target.checked
    });
  }

  onSubmit(e) {
    e.preventDefault();

    var newRequest = {
      medkits: this.state.medkits,
      food: this.state.food,
      heli: this.state.heli,
      vessel: this.state.vessel,
      jet: this.state.jet
    };

    var serverLocation = "http://192.168.1.5:4000/requests";
      axios.post(serverLocation, newRequest)
        .then(res => console.log(res.data));

      this.setState({
        medkits: '0',
        food: '0',
        heli: false,
        vessel: false,
        jet: false
      });
    }

  render() {

    return (
      <div>
      <form onSubmit={this.onSubmit} className="modal-content animate">
          <label>Supplies <br/> (One per Person)</label>
          <label>
            <input  type="number"
                    style={{width: "50px"}}
                    onChange={this.onChangeMedic}
                    />
            <b>Medical</b>
          </label>
          <label >
          <input  type="number"
                  style={{width: "50px"}}
                  onChange={this.onChangeMedic}
                  />
            <b>Food & Water</b>
          </label>
          <label>Military Support</label>
          <label>
            <input  type="checkbox"
                      onChange={this.onChangeHeli}
                      />
            <b>Helicopter</b>

          </label>
          <label >
            <input  type="checkbox"
                      onChange={this.onChangeVessel}
                      />
            <b>Vessel</b>
          </label>
          <label>
            <input  type="checkbox"
                    onChange={this.onChangeJet}
                    />
            <b>Fighter Jet</b>
          </label>
          {this.props.children}
          <input type="submit" value="Make Request"/>
      </form>
    </div>

    );
  }
}

export default Request;
