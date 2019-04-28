const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let Requests = new Schema({
  medkits: {
    type: String
  },
  food: {
    type: String
  },
  heli: {
    type: Boolean
  },
  vessel: {
    type: Boolean
  },
  jet: {
    type: Boolean
  }
});

module.exports = mongoose.model('Requests', Requests);
