var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;

var Query = function () {
  this.url = 'mongodb://localhost:27017/gigs';
  this.gigs = []
}

Query.prototype = {

  delete: function (id, onDataLoad) {
    MongoClient.connect('mongodb://localhost:27017/gigs', function(err, db){
      if (err) return;
      // delete item from database by id
      db.collection('listings').remove( {"_id": ObjectId(id)});
      // now return list with item deleted
      db.collection('listings').find().toArray(function(err, docs){
        onDataLoad(docs);
      });
    });
  },

  update: function (updateObject, id, onDataLoad) {
    MongoClient.connect('mongodb://localhost:27017/gigs', function(err, db){
      if (err) return;
      // update item from database by id
      db.collection('listings').update({"_id": ObjectId(id)}, {$set:updateObject});
      // now return list with item updated
      db.collection('listings').find().toArray(function(err, docs){
        onDataLoad(docs);
      });
    });
  },

  all: function (onDataLoad) {
    MongoClient.connect('mongodb://localhost:27017/gigs', function(err, db){
      if (err) return;
      db.collection('listings').find().toArray(function(err, docs){
        onDataLoad(docs);
      })
    });
  }
}

module.exports = Query;
