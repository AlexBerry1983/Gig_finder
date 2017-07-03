var request = require('../request.js');

var Input = function () {

};

Input.prototype = {
  create: function () {
    var body = document.getElementsByTagName('body')[0];
    var search = document.createElement('input');
    body.appendChild(search);

    search.addEventListener('input', function() {
      request.getRequest('https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=XGGKz7PnerTTqIPRLLKeEaD3UAHd9ARu', function () {
        console.log(JSON.parse(this.responseText));
      })
    })
  },







}



// console.log input field value
//then try to get it to connect to the api


module.exports = Input;
