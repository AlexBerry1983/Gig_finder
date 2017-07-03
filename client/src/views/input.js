var request = require('../request.js');
var Input = function () {

};

Input.prototype = {
  create: function () {
    var body = document.getElementsByTagName('body')[0];
    var search = document.createElement('input');
    body.appendChild(search);

    search.addEventListener('input', function() {
      var countryCode = 'GB';
      var keyword = search.value;
      var city = 'Edinburgh'
      var today = '2017-07-04T14:00:00Z'
      var weekLater = '2017-07-10T14:00:00Z'
      var url = 'https://app.ticketmaster.com/discovery/v2/events.json?countryCode=' + countryCode + '&keyword=' + keyword + '&city='+ city + '&startDateTime='+ today + '&endDateTime='+ weekLater + '&apikey=XGGKz7PnerTTqIPRLLKeEaD3UAHd9ARu';
      request.getRequest(url , function () {
        console.log(url);
        console.log(JSON.parse(this.responseText));
        //console.dir(search.value)
      })
    })
  },







}


module.exports = Input;
