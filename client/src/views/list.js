var Gigs = require('../models/gigs.js');
var MapWrapper = require('../mapWrapper.js');
var DisplayInfo = require('./displayInfo.js');
var List = function () {

};

List.prototype = {
  create: function () {
    var ul = document.getElementById('user-choice');
    var gigs = new Gigs();
    console.log(this);
    gigs.all(function (gigs) {
      var gigs = JSON.parse(gigs);
      for (gig of gigs){
        var li = document.createElement('li');
        li.id = 'gigName'
        li.innerText = gig.name;
        console.log(this);
        li.addEventListener('click', function(){
          var displayInfo = new DisplayInfo();
          displayInfo.makeMapInfo();
        })
        ul.appendChild(li);
      }
    });
  }

}




module.exports = List;
