var request = require('../request.js');

var UI = function(){
  this.request();
}

UI.Prototype ={

  makeList: function(){
    var body = getElementById('#main-body')
    var div = createElement('div');
    var ul = createElement('ul');
    var li = createElement('li');
    ul.appendChild(li);
    div.appendChild(ul);
    body.appendChild(div);

  },

  makeSearchInput: function() {
    var body = getElementById('#main-body')
    var search = createElement('input');
    body.appendChild(search);

  }
}


module.exports = UI;
