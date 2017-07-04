var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var path = require('path');
var Query = require('../db/db_query.js');

router.get('/api/listings', function (req, res) {
  // May need brackets around new Query if getting
  // intermediate error
  var getAllQuery = new Query().all(function(data) {
  res.json(data);
  });
});

router.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname + '/../client/build/index.html'));
});

router.get('/api/listings/:id', function(req, res) {
  var id = req.params.id;
  var getAllQuery = new Query().getById(id, function(data) {
    res.json(data);
  });
});

router.post('/api/listings', function(req, res) {
  // retrieve the new item from the request
  var newGig = req.body;
  var addQuery = new Query().add(newGig, function(data) {
    res.json(data);
  });
});

router.delete('/api/listings/:id', function (req, res) {
  var id = req.params.id;
  var deleteQuery = new Query().delete(id, function(data) {
    res.json(data);
  });
});

router.put('/api/listings/:id', function (req, res) {
  var id = req.params.id;
  var updateObject = req.body;
  var updateQuery = new Query().update(updateObject, id, function(data) {
    res.json(data);
  });
});

module.exports = router;
