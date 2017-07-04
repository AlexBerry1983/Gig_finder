var Gigs = require('../models/gigs.js');
var MapWrapper = require('../mapWrapper.js');
var DisplayInfo = require('./displayInfo.js');

var List = function () {
  this.displayInfo = new DisplayInfo();
};

List.prototype = {
  create: function () {
    var body = document.getElementsByTagName('body')[0]
    var listDiv = document.createElement('div')
    var ul = document.createElement('ul');
    var gigs = new Gigs();
    gigs.all(function (gigs) {
      var gigs = JSON.parse(gigs);
      for (gig of gigs){
        var gigListLi = document.createElement('li');
        gigListLi.innerText = gig.name;

        gigListLi.addEventListener('click', function(event){


          this.displayInfo.makeMapInfo(event);

        }.bind(this))
        ul.appendChild(gigListLi);
      }
    }.bind(this));
    listDiv.appendChild(ul);
    body.appendChild(listDiv);
  }



}

module.exports = List;
