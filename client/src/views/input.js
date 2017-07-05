var Dropdown = require('./dropdown.js');
var request = require('../request.js');
var Input = function () {
  this.search = document.createElement('input');

  var body = document.getElementsByTagName('body')[0];
  var inputDiv = document.createElement('div')
  inputDiv.id = 'input-div'
  inputDiv.appendChild(this.search)
  var containerDiv = document.getElementById('main-container');
  containerDiv.appendChild(inputDiv);
  this.dropdown = new Dropdown(this.search);
};

Input.prototype = {
  create: function (list) {
    this.dropdown.list = list;
    var dropdown = this.dropdown;

    this.search.addEventListener('input', function() {
      var url = this.makeRequestString('GB', this.search.value, 'Edinburgh', '2017-07-04T14:00:00Z', '2017-07-10T14:00:00Z' );
      request.getRequest(url , function () {

        var data = JSON.parse(this.responseText);
        dropdown.render(data);
      });
    }.bind(this));

  },

  makeRequestString: function(countryCode, keyword, city, startDate, endDate){
    var url = 'https://app.ticketmaster.com/discovery/v2/events.json?countryCode='
    var newUrl = url + countryCode + '&keyword=' + keyword + '&city='+ city + '&startDateTime='+ startDate + '&endDateTime='+ endDate + '&apikey=XGGKz7PnerTTqIPRLLKeEaD3UAHd9ARu'
    return newUrl;
  }






}


module.exports = Input;
