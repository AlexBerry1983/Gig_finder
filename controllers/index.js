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
  var deleteQuery = new Query().delete(function(data) {
  res.json(data);
  });
});

router.put('/api/listings/:id', function(req, res) {
  res.json("the thing has been updated - db side comes later")
});

module.exports = router;
