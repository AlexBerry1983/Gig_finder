var List = require('./list.js');
var Input = require('./input.js');

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
  }


}


module.exports = UI;
