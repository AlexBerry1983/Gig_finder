var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var path = require('path');


router.get('/api/listings', function (req, res) {
  MongoClient.connect('mongodb://localhost:27017/gigs', function(err, db){
    if (err) return;
    db.collection('listings').find().toArray(function(err, docs){
      res.json(docs);
    })
  })
});

router.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname + '/../client/build/index.html'));
});

module.exports = router;
