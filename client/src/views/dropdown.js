var request = require('../request.js');
var ModalBox = require('./modalbox.js')

var Dropdown = function (inputHook) {
  var lastInput = document.getElementById('date-search')
  this.ul = document.createElement('ul');
  this.ul.id = 'dropdown';
  this.inputHook = inputHook;
  lastInput.insertAdjacentElement("afterend", this.ul);
  this.modalBox = new ModalBox();
  this.previousData = {};
  this.list;
  this.setupEventListeners();
}

Dropdown.prototype = {
  render: function (objs) {
    this.previousData = objs;
    this.clear();

    if (objs._embedded == undefined) {
      return;
    }

    for (gig of objs._embedded.events) {
      var gigLi = this.createDropdownLi(gig);
      this.ul.appendChild(gigLi);
    }
  },

  createDropdownLi: function (gig) {
    var li = document.createElement('li');
    li.innerText = gig.name;
    li.classList.add('dropdownItem');
    li.addEventListener('click', function () {
      this.confirmSaveGig(gig);
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

  confirmSaveGig: function (gig) {
    var url = '/api/listings';
    var jsonString = JSON.stringify(gig);
    this.modalBox.create(gig, function () {
      this.list.reRender();
    }.bind(this));
  },

  clear: function () {
    this.ul.innerHTML = "";
  }
}

module.exports = Dropdown;
