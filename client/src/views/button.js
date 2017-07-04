var request = require('../request.js');

var Button = function () {
  this.form = document.createElement('form');
  this.button = document.createElement('input');

};

Button.prototype = {
  create: function (method, url, callback, payload) {
    this.button.type = 'submit';

    this.form.addEventListener('submit', function (event) {
      event.preventDefault();
      request.postRequest(method, url, callback, payload);
    });

    this.form.action = url;
    this.form.method = method;
    this.form.appendChild(this.button);

    return this.form;
  },

  text: function (name) {
    this.button.value = name;
  }
}


module.exports = Button;
