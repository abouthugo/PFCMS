const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let Conditions = new Schema({});

module.exports = mongoose.model('Conditions', Conditions);
