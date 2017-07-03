var request = require('../request.js');
var Gigs = require('../models/gigs.js');
var MapWrapper = require('../mapWrapper.js');

var UI = function(){
  // this.request();

}

UI.prototype ={

  makeListItem: function(){
    var gigs = new Gigs();
    gigs.all(function (gigs) {
      var gigs = JSON.parse(gigs);
      var ul = document.getElementById('user-choice');
      for (gig of gigs){
        var li = document.createElement('li');
        li.innerText = gig.name;
        ul.appendChild(li);
      }
    });
  },

  makeSearchInput: function() {
    var body = getElementById('#main-body')
    var search = createElement('input');
    body.appendChild(search);
  },

  makeMap: function(){
    var mapDiv = document.getElementById('main-div');
    var center = {lat: 55.953251, lng:-3.188267};
    var mainMap = new MapWrapper(mapDiv, center, 10);
    mainMap.addMarker(center)
  }



}


module.exports = UI;
