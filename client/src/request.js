var request = {
  getRequest: function(url, callback){
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = callback;
    request.send();
  },

  postRequest: function (method, url, callback, payload) {
    var request = new XMLHttpRequest();
    request.open(method, url);
    request.setRequestHeader('Content-Type', 'application/json');
    request.onload = callback;
    request.send(payload);
  }
}


module.exports = request;
