var dropdown = require('./dropdown.js');
var Button = require('./button.js');

var ModalBox = function(){

}

ModalBox.prototype = {
  create: function(gig){
    // console.log(gig);
    var body = document.getElementsByTagName('body')[0];
    var jsonString = JSON.stringify(gig);
    var url = '/api/listings';
    var confirmBox = document.createElement('div');
    var button = new Button();
    var confirmButton = button.create("post", url, function(){
      console.log("in post from button");
    }, jsonString);
    confirmBox.appendChild(confirmButton);
    body.appendChild(confirmBox);
  }

}

module.exports = ModalBox;
