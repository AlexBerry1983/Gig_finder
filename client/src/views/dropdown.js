var Dropdown = function (inputHook) {
  this.ul = document.createElement('ul');
  this.ul.id = 'dropdown';
  inputHook.insertAdjacentElement("afterend", this.ul);
  console.log(inputHook.parentNode);
}

Dropdown.prototype = {
  render: function (objs) {
    this.ul.innerHTML = "";
    for (gig of objs._embedded.events) {
      var gigLi = this.createDropdownLi(gig);
      this.ul.appendChild(gigLi);
    }
  },
  createDropdownLi: function (gig) {
    var li = document.createElement('li');
    li.innerText = gig.name;
    return li;
  }
}

module.exports = Dropdown;
