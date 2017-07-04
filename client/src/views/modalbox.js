var dropdown = require('./dropdown.js');
var Button = require('./button.js');

var ModalBox = function(){
  this.currentBoxOption;
}

ModalBox.prototype = {
  create: function(gig){

    if (this.currentBoxOption !== undefined) {
      this.clear(this.currentBoxOption);
    }

    var body = document.getElementsByTagName('body')[0];
    var jsonString = JSON.stringify(gig);
    var gigName = gig.name; 
    var pTag = document.createElement('pTag');
    pTag.innerText = gigName;
    var url = '/api/listings';

    var confirmBox = document.createElement('div');
    confirmBox.id = 'confirm-box';
    this.currentBoxOption = confirmBox;

    this.clear(confirmBox);

    var buttonSubmit = new Button();
    var confirmButton = buttonSubmit.create("post", url, function(){
      console.log("in post from submit button");
    }, jsonString);

    var buttonCancel = document.createElement('button');
    buttonCancel.innerText = 'Cancel';

    // confirmBox.appendChild(pTag);
    // confirmBox.appendChild(confirmButton);
    // confirmBox.appendChild(buttonCancel);
    this.append(confirmBox, pTag, confirmButton, buttonCancel);
    body.appendChild(confirmBox);

  },

  clear: function (node) {
     while (node.hasChildNodes()) {
       node.removeChild(node.children[0]);
     }
     node.remove();
   },

   append: function() {
    for (var i =  1; i <= arguments.length - 1; i++) {
      arguments[0].appendChild(arguments[i]);
    }
   }



}

module.exports = ModalBox;
