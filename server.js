var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mainController = require('./controllers');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use(mainController);
app.use(express.static('client/build') );

app.listen(3000, function () {
  console.log('listening on 3000');
});
