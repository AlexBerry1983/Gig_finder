var Button = function () {

};

Button.prototype = {
  create: function (method, url) {
    var form = document.createElement('form');
    var button = document.createElement('input');
    button.type = 'submit';

    form.action = url;
    form.method = method;
    form.appendChild(button);

    

    return form;
  }
}


module.exports = Button;
