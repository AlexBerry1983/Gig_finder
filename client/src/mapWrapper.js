var MapWrapper = function(container, coords, zoom){
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });
  setTimeout(function(){
    google.maps.event.trigger(this.googleMap, 'resize');
  }.bind(this), 0)
  container.children[0].addEventListener('click', function (event) {
    event.stopPropagation();
  });
}

MapWrapper.prototype = {
  addMarker: function(coords){

    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap
    })
  }
}

module.exports = MapWrapper;
