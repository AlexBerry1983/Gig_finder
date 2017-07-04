var UI = require('./views/ui.js');

var app = function(){

  var ui = new UI();
  ui.makeSearchInput();
  ui.makeListItem();


}
window.addEventListener('load', app);
