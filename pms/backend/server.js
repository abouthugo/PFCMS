const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});

mongoose.connect('mongodb://test:test123@ds145916.mlab.com:45916/pfcms', { useNewUrlParser: true });

const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

let User = require('./models/users.model');
var userRoutes = express.Router();


userRoutes.get('/:username', function(req, res) {
    let user = req.params.username;
    User.findOne({username: user}, function(err, user) {
      if (err) {
        console.log(err);
      } else {
        res.json(user);
      }
    });
});

app.use('/users', userRoutes);

let Request = require('./models/request.model');
var requestRoutes = express.Router();


requestRoutes.post('/', function(req, res) {
    let request = new Request(req.body);
    request.save()
      .then(request => {
        res.status(200).send('request has been submitted');
      })
      .catch(err => {
        res.status(400).send('Request failed');
      });
});

app.use('/requests', requestRoutes);
