var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var path = require('path');
var Query = require('../db/db_query.js');

router.get('/api/listings', function (req, res) {
  var getAllQuery = new Query().all(function(data) {
  res.json(data);
  });
});

router.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname + '/../client/build/index.html'));
});

router.get('/api/listings/:id', function(req, res) {
  res.json("Mike is gonna boss this shiiiiiiit");
});

router.delete('/api/listings/:id', function (req, res) {
  var id = req.params.id;
  var deleteQuery = new Query().delete(id, function(data) {
    res.json(data);
  });
});

router.put('/api/listings/:id', function (req, res) {
  var id = req.params.id;
  var updateQuery = new Query().update(id, function(data) {
    res.json(data);
  });
});

module.exports = router;
