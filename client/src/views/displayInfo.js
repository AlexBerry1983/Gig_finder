var MapWrapper = require('../mapWrapper.js');
var Button = require('./button.js')

var DisplayInfo = function(){
  this.currentlyOpen;
}

DisplayInfo.prototype = {
  displayContentWindow: function(gig, event){
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
    var mainMap = new MapWrapper(el, center, 10);
    mainMap.addMarker(center);
  },

  nukePopUps: function () {
    var existingPopUp = document.querySelector('#main');
    if (existingPopUp){
      var li = existingPopUp.parentNode;
      li.removeChild(existingPopUp);
    }
  },

  createAndAppendMapContainer: function(container){
    var popUp = document.createElement('div');
    this.makeMap(popUp, {lat: 55.953251, lng:-3.188267})
    popUp.id = 'pop-up';
    return popUp;
  },

  createAndAppendContentContainer: function (gig, container) {
    var content = document.createElement('div');
    content.id = 'content';

    console.log(gig);
    var ul = document.createElement('ul');
    ul.id = 'content-list';

    var liTime = document.createElement('li');
    liTime.id = 'time';
    liTime.textContent = gig.dates.start.localTime;
    ul.appendChild(liTime);

    var liDate = document.createElement('li');
    liDate.id = 'date';
    liDate.textContent = gig.dates.start.localDate;
    ul.appendChild(liDate);

    var liPlace = document.createElement('li');
    liPlace.id = 'city';
    liPlace.textContent = gig._embedded.venues[0].name;
    ul.appendChild(liPlace);

    content.appendChild(ul);

    return content;
  },

  createDeleteButton: function(gig, container) {
    var button = new Button();
    button.text('Delete');
    var url = '/api/listings/' + gig._id;
    var deleteButton = button.create('DELETE', url);
    deleteButton.id = 'button';
    return deleteButton;
  },

  createMainContainer: function (gig, event) {
    var mainContainer = document.createElement('div');
    mainContainer.id = 'main';
    mainContainer.addEventListener('click', function (event) {
      event.stopPropagation();
    })

    var map = this.createAndAppendMapContainer(mainContainer);
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
