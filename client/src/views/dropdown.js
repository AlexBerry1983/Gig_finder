var request = require('../request.js');

var Dropdown = function (inputHook) {
  this.ul = document.createElement('ul');
  this.inputHook = inputHook;
  this.inputHook.insertAdjacentElement("afterend", this.ul);
  this.previousData = {};

  this.setupEventListeners();
}

Dropdown.prototype = {
  render: function (objs) {
    this.previousData = objs;
    this.ul.id = 'dropdown';
    this.clear();

    for (gig of objs._embedded.events) {
      var gigLi = this.createDropdownLi(gig);
      this.ul.appendChild(gigLi);
      var inputDiv = getElementById('#input-div');
      inputDiv.appendChild(this.ul);
    }
  },

  createDropdownLi: function (gig) {
    var li = document.createElement('li');
    li.innerText = gig.name;
    li.classList.add('dropdownItem');
    li.addEventListener('click', function () {
      console.log(gig);
      this.saveGig();
      this.clear();
    }.bind(this));
    return li;
  },

  setupEventListeners: function () {
    this.inputHook.addEventListener('focus', function () {
      this.render(this.previousData);
    }.bind(this));

    this.inputHook.addEventListener('focusout', function (event) {
      if (document.querySelectorAll('.dropdownItem:hover').length === 0){
        this.clear();
      };
    }.bind(this));
  },

  saveGig: function () {
    console.log("I'm in saveGig");
  },

  clear: function () {
    this.ul.innerHTML = "";
  }
}

module.exports = Dropdown;
