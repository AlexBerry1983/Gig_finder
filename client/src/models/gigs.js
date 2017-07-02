var request = require('../request.js')

var Gigs = function(){
};

Gigs.prototype = {
  all: function(callback){
    request.getRequest('http://localhost:3000/api/listings', function(){
    console.log(this);
    console.log(this.responseText);
    callback(this.responseText);
    });
  }


}

module.exports = Gigs;
