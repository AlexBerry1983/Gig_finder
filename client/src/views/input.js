var Dropdown = require('./dropdown.js');
var request = require('../request.js');
var moment = require('moment');

var Input = function () {
  this.search = document.createElement('input');
  this.search.id = 'main-search'
  this.search.placeholder=" Type an Artist or Keyword";

  this.searchLocation = document.createElement('input');
  this.searchLocation.id = 'location-search';
  this.searchLocation.placeholder = " Location";

  this.searchDate = document.createElement('input');
  this.searchDate.type = 'date';
  this.searchDate.id = 'date-search';
  this.searchDate.placeholder = " Date";

  var body = document.getElementsByTagName('body')[0];
  var inputDiv = document.createElement('div')
  inputDiv.id = 'input-div'
  inputDiv.appendChild(this.search);
  inputDiv.appendChild(this.searchLocation);
  inputDiv.appendChild(this.searchDate);
  var containerDiv = document.getElementById('main-container');
  containerDiv.appendChild(inputDiv);
  this.dropdown = new Dropdown(this.search);
};

Input.prototype = {
  create: function (list) {
    this.dropdown.list = list;
    var dropdown = this.dropdown;

    this.search.addEventListener('input', function() {
      var now = moment();
      var nowStr = now.format('YYYY-MM-DDTHH:mm:ss') + 'Z';

      var then = now.clone().add(100, 'y');
      if (this.searchDate.value) {
        then = moment(this.searchDate.value);
        then.hour(24);
      }

      var thenStr = then.format('YYYY-MM-DDTHH:mm:ss') + 'Z';
      var url = this.makeRequestString('GB', this.search.value, 'Edinburgh', 'Music', nowStr, thenStr );
      request.getRequest(url , function () {

        var data = JSON.parse(this.responseText);
        dropdown.render(data);
      });
    }.bind(this));

  },

  makeRequestString: function(countryCode, keyword, city, eventType, startDate, endDate){
    var url = 'https://app.ticketmaster.com/discovery/v2/events.json?countryCode='
    var newUrl = url + countryCode + '&keyword=' + keyword + '&city='+ city + '&classificationName=' + eventType +'&startDateTime='+ startDate + '&endDateTime='+ endDate + '&apikey=XGGKz7PnerTTqIPRLLKeEaD3UAHd9ARu'
    return newUrl;
  }






}


module.exports = Input;
