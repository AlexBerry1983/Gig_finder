var UI = require('./views/ui.js');

var app = function(){

  var ui = new UI();
  ui.makeListItem();
  ui.makeSearchInput();


}
window.addEventListener('load', app);
