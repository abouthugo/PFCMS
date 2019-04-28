const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let Vessels = new Schema({});

module.exports = mongoose.model('Vessels', Vessels);
