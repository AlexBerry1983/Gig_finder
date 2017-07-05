var Gigs = require('../models/gigs.js');
var MapWrapper = require('../mapWrapper.js');
var DisplayInfo = require('./displayInfo.js');
var Button = require('./button.js');

var List = function () {
  this.displayInfo = new DisplayInfo();
  this.ul = document.createElement('ul');
};

List.prototype = {
  create: function () {
    var containerDiv = document.getElementById('main-container');
    console.log(containerDiv);
    var listDiv = document.createElement('div')
    listDiv.id = 'list-div'
    var gigs = new Gigs();
    gigs.all(function (gigs) {
      var gigs = JSON.parse(gigs);
      for (gig of gigs){
        this.createListItem(gig);
      }
    }.bind(this));
    listDiv.appendChild(this.ul);
    containerDiv.appendChild(listDiv);
  },

  createListItem: function(gig) {
    var gigListLi = document.createElement('li');
    var id = gig._id;
    gigListLi.innerText = gig.name;
    gigListLi.addEventListener('click', function(event){
      this.displayInfo.displayContentWindow(gig, event, this);
  }.bind(this));

    this.ul.appendChild(gigListLi);
  },

  reRender: function () {
    this.ul.innerHTML = '';
    this.create()
  }

}

module.exports = List;
