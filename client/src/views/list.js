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
    listDiv.id = 'list-div'
    var gigs = new Gigs();
    gigs.all(function (gigs) {
      var gigs = JSON.parse(gigs);
      for (gig of gigs){
        this.createListItem(gig);
      }
    }.bind(this));
    listDiv.appendChild(this.ul);
    body.appendChild(listDiv);
  },

  createListItem: function(gig) {
    var gigListLi = document.createElement('li');
    gigListLi.innerText = gig.name;
    gigListLi.addEventListener('click', function(event){

      var displayInfo = new DisplayInfo();
      displayInfo.makeMapInfo(event);

      var button = this.createDeleteButton(gig._id);
      gigListLi.appendChild(button);

    }.bind(this));

    this.ul.appendChild(gigListLi);
  },

  createDeleteButton: function(id) {
    var deleteButton = new Button();
    var url = '/api/listings/' + id;
    return deleteButton.create('DELETE', url);
  }



}

module.exports = List;
