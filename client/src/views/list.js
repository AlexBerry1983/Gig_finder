var Gigs = require('../models/gigs.js');
var MapWrapper = require('../mapWrapper.js');
var DisplayInfo = require('./displayInfo.js');
var List = function () {

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
          var displayInfo = new DisplayInfo();
          displayInfo.makeMapInfo(event);
        })
        ul.appendChild(gigListLi);
      }
    });
    listDiv.appendChild(ul);
    body.appendChild(listDiv);
  }

}

module.exports = List;
