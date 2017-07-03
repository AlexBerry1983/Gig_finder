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
        var li = document.createElement('li');
        li.id = 'gigName'
        li.innerText = gig.name;
        li.addEventListener('click', function(){
          var displayInfo = new DisplayInfo();
          displayInfo.makeMapInfo();
        })
        ul.appendChild(li);
      }
    });
    listDiv.appendChild(ul);
    body.appendChild(listDiv);
  }

}




module.exports = List;
