var request = require('../request.js');

var Button = function () {

};

Button.prototype = {
  create: function (method, url, callback, payload) {
    var form = document.createElement('form');
    var button = document.createElement('input');
    button.type = 'submit';

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      request.postRequest(method, url, callback, payload);
    });

    form.action = url;
    form.method = method;
    form.appendChild(button);

    return form;
  }
}


module.exports = Button;
