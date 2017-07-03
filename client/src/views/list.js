var Gigs = require('../models/gigs.js');

var List = function () {

};

List.prototype = {
  create: function () {
    var ul = document.getElementById('user-choice');
    var gigs = new Gigs();
    gigs.all(function (gigs) {
      var gigs = JSON.parse(gigs);
      for (gig of gigs){
        var li = document.createElement('li');
        li.innerText = gig.name;
        ul.appendChild(li);
      }
    });
  }
}




module.exports = List;
