var Gigs = require('../models/gigs.js');
var MapWrapper = require('../mapWrapper.js');
var DisplayInfo = require('./displayInfo.js');
var Button = require('./button.js');
var List = function () {
  this.ul = document.createElement('ul');
};

List.prototype = {
  create: function () {
    var body = document.getElementsByTagName('body')[0]
    var listDiv = document.createElement('div')
    var gigs = new Gigs();
    gigs.all(function (gigs) {
      var gigs = JSON.parse(gigs);
      for (gig of gigs){
        this.createListItem();
      }
    }.bind(this));
    listDiv.appendChild(this.ul);
    body.appendChild(listDiv);
  },

  createListItem: function() {
    var gigListLi = document.createElement('li');
    gigListLi.innerText = gig.name;
    gigListLi.addEventListener('click', function(event){
      var displayInfo = new DisplayInfo();
      displayInfo.makeMapInfo(event);
    })
    this.ul.appendChild(gigListLi);
   }
  //
  // createDeleteButton:




}

module.exports = List;
