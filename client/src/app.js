//console.log("hello");
var request = require('./request.js');
var ui = require('./views/ui.js');


var app = function(){
  request.getRequest('http://localhost:3000/api/listings', function(){
    console.log(this.responseText);
  });
}

app();
