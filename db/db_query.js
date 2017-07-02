var MongoClient = require('mongodb').MongoClient;

var Query = function () {
  this.url = 'mongodb://localhost:27017/gigs';
  this.gigs = []
}

Query.prototype = {
  delete: function (onDataLoad) {
    MongoClient.connect('mongodb://localhost:27017/gigs', function(err, db){
      if (err) return;
      db.collection('listings').find().toArray(function(err, docs){
        onDataLoad(docs);
      });
    });
  }
}

module.exports = Query;
