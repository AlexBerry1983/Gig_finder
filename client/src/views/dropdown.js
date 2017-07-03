var Dropdown = function (inputHook) {
  this.ul = document.createElement('li');
  this.ul.textContent = 'test';
  inputHook.insertAdjacentElement("beforebegin", this.ul);
  console.log(inputHook.parentNode);
}

Dropdown.prototype = {
  render: function (objs) {
    for (gig of objs._embedded.events) {
      console.log(this.ul);
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
