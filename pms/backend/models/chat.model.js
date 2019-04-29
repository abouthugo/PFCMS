const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let Chat = new Schema({
  author: {
    type: String
  },
  message: {
    type: String
  },
});

module.exports = mongoose.model('Chat', Chat);
