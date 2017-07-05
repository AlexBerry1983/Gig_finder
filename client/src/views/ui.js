var List = require('./list.js');
var Input = require('./input.js');
var request = require('../request.js');
var Gigs = require('../models/gigs.js');
var MapWrapper = require('../mapWrapper.js');

var UI = function(){
  this.itemList = new List();
  this.searchInput = new Input();

}

UI.prototype ={

  makeListItem: function(){
    this.itemList.create();
  },

  makeSearchInput: function() {
    this.searchInput.create(this.itemList);
  }

}


module.exports = UI;
