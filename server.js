var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;

app.use(express.static('client/build') );

app.get('/api/listings', function (req, res) {
  MongoClient.connect('mongodb://localhost:27017/gigs', function(err, db){
    if (err) return;
    db.collection('listings').find().toArray(function(err, docs){
      res.json(docs);
    })
  })
});

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/client/build/index.html');
})

app.listen(3000, function () {
  console.log('listening on 3000');
});
