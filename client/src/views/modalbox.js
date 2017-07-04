var dropdown = require('./dropdown.js');
var Button = require('./button.js');

var ModalBox = function(){
  this.currentBoxOption;
}

ModalBox.prototype = {
  create: function(gig){
    // console.log(gig);
    var body = document.getElementsByTagName('body')[0];
    var jsonString = JSON.stringify(gig);
    var gigName = gig.name; 
    var pTag = document.createElement('pTag');
    pTag.innerText = gigName;
    var url = '/api/listings';

    var confirmBox = document.createElement('div');
    var buttonSubmit = new Button();
    var confirmButton = buttonSubmit.create("post", url, function(){
      console.log("in post from submit button");
    }, jsonString);

    var buttonCancel = document.createElement('button');
    buttonCancel.innerText = 'Cancel';

    confirmBox.appendChild(pTag);
    confirmBox.appendChild(confirmButton);
    confirmBox.appendChild(buttonCancel);
    body.appendChild(confirmBox);

  }

}

module.exports = ModalBox;
