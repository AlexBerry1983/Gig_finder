var List = require('./list.js');
var Input = require('./input.js');
var request = require('../request.js');
var Gigs = require('../models/gigs.js');
var MapWrapper = require('../mapWrapper.js');

var UI = function(){

}

UI.prototype ={

  makeListItem: function(){
    var itemList = new List();
    itemList.create();
  },

  makeSearchInput: function() {
    var searchInput = new Input();
    searchInput.create();
  },

  makeMap: function(){
    var mapDiv = document.getElementById('main-div');
    var center = {lat: 55.953251, lng:-3.188267};
    var mainMap = new MapWrapper(mapDiv, center, 10);
    mainMap.addMarker(center)
  }



}


module.exports = UI;
