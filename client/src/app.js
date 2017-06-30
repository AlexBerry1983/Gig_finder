//console.log("hello");

var app = function(){
  var request = new XMLHttpRequest();
  request.open('GET', 'http://localhost:3000/api/listings');
  request.onload = function(){
    console.log(request.responseText);
  }
  request.send();
}

app();
