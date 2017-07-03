var MapWrapper = require('../mapWrapper.js');

var DisplayInfo = function(){

}

DisplayInfo.prototype = {
  makeMapInfo: function(){
    var mainDiv = document.getElementById('main-div');
    var popUp = document.createElement('div');
    console.log(this);
    this.makeMap(popUp, {lat: 55.953251, lng:-3.188267})
    popUp.id = 'pop-up';
    mainDiv.appendChild(popUp);
  },
  makeMap: function(el, center){
    var mainMap = new MapWrapper(el, center, 10);
    mainMap.addMarker(center)
  }
}

module.exports = DisplayInfo;
