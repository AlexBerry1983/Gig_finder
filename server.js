var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.json({name: "I AM ALAN, WELCOME TO THE SHIT SHOW"})
});

app.listen(3000, function () {
  console.log('listening on 3000');
});
