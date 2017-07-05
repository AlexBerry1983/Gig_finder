var MapWrapper = require('../mapWrapper.js');
var Button = require('./button.js');
var Content = require('./content.js');

var DisplayInfo = function(){
  this.currentlyOpen;
  this.list;
}

DisplayInfo.prototype = {
  displayContentWindow: function(gig, event, list){
    this.list = list;
    if (this.currentlyOpen == event.target) {
      this.nukePopUps();
      this.currentlyOpen = undefined;
      return
    } else if (this.currentlyOpen !== event.target && this.currentlyOpen !== undefined ){
      this.nukePopUps();
    }
    this.createMainContainer(gig, event);
  },

  makeMap: function(el, center){
    var mainMap = new MapWrapper(el, center, 15);
    mainMap.addMarker(center);
  },

  nukePopUps: function () {
    var existingPopUp = document.querySelector('#main');
    if (existingPopUp){
      var li = existingPopUp.parentNode;
      li.removeChild(existingPopUp);
    }
  },

  createAndAppendMapContainer: function(gig, container){
    var popUp = document.createElement('div');
    if (gig._embedded.venues["0"].location) {
      var lat = parseFloat(gig._embedded.venues["0"].location.latitude) ;
      var lng = parseFloat(gig._embedded.venues["0"].location.longitude) ;
    }
    this.makeMap(popUp, {lat: lat || 55.9533, lng: lng || -3.1883 })
    popUp.id = 'pop-up';
    return popUp;
  },

  createAndAppendContentContainer: function (gig, container) {
    return new Content().create(gig);
  },

  createDeleteButton: function(gig, container) {
    var button = new Button();
    button.text('Delete');
    var url = '/api/listings/' + gig._id;
    var deleteButton = button.create('DELETE', url, function(){
      this.list.reRender()
    }.bind(this));
    deleteButton.id = 'button';
    return deleteButton;
  },

  createMainContainer: function (gig, event) {
    var mainContainer = document.createElement('div');
    mainContainer.id = 'main';
    mainContainer.addEventListener('click', function (event) {
      event.stopPropagation();
    })

    var map = this.createAndAppendMapContainer(gig, mainContainer);
    var content = this.createAndAppendContentContainer(gig, mainContainer);
    var dButton = this.createDeleteButton(gig, mainContainer);

    mainContainer.appendChild(map);
    mainContainer.appendChild(content);
    mainContainer.appendChild(dButton);

    event.target.appendChild(mainContainer);

    this.currentlyOpen = event.target;
  }

}

module.exports = DisplayInfo;
