var Gigs = require('../models/gigs.js');
var MapWrapper = require('../mapWrapper.js');
var DisplayInfo = require('./displayInfo.js');

var List = function () {
  this.currentMap;
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
          console.log(this.currentMap !== event.target);
          if (this.currentMap !== event.target){
            var existingPopUp = document.querySelector('#pop-up');
            if (existingPopUp){
              var li = existingPopUp.parentNode;
              li.removeChild(existingPopUp);
            } 
          }
          this.currentMap = event.target;
          console.log("after currentMap", this.currentMap);
          console.log("after event", event.target)
          var displayInfo = new DisplayInfo();
          displayInfo.makeMapInfo(event);
        }.bind(this))
        ul.appendChild(gigListLi);
      }
    }.bind(this));
    listDiv.appendChild(ul);
    body.appendChild(listDiv);
  }

}

module.exports = List;
