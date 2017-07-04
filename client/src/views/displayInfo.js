var MapWrapper = require('../mapWrapper.js');
var Button = require('./button.js')

var DisplayInfo = function(){
  this.currentlyOpen;
}

DisplayInfo.prototype = {
  displayContentWindow: function(id, event){
    if (this.currentlyOpen == event.target) { return };
    if (this.currentlyOpen !== event.target && this.currentlyOpen !== undefined ){
      this.nukePopUps();
    }
    this.createMainContainer(id, event);
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

  createAndAppendContentContainer: function (container) {
    var content = document.createElement('div');
    content.id = 'content';
    content.innerText = 'some content';
    return content;
  },

  createDeleteButton: function(id, container) {
    var button = new Button();
    var url = '/api/listings/' + id;
    var deleteButton = button.create('DELETE', url);
    deleteButton.id = 'button';
    return deleteButton;
  },

  createMainContainer: function (id, event) {
    var mainContainer = document.createElement('div');
    mainContainer.id = 'main';
    mainContainer.addEventListener('click', function (event) {
      event.stopPropagation();
    })

    var map = this.createAndAppendMapContainer(mainContainer);
    var content = this.createAndAppendContentContainer(mainContainer);
    var dButton = this.createDeleteButton(id, mainContainer);

    mainContainer.appendChild(map);
    mainContainer.appendChild(content);
    mainContainer.appendChild(dButton);

    event.target.appendChild(mainContainer);

    this.currentlyOpen = event.target;
  }

}

module.exports = DisplayInfo;
