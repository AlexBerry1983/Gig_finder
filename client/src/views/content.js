var Content = function () {

}

Content.prototype = {
  create: function () {
    var content = document.createElement('div');
    content.id = 'content';

    var ul = document.createElement('ul');
    ul.id = 'content-list';

    var liTime = document.createElement('li');
    liTime.id = 'time';
    liTime.textContent = gig.dates.start.localTime;
    ul.appendChild(liTime);

    var liDate = document.createElement('li');
    liDate.id = 'date';
    liDate.textContent = gig.dates.start.localDate;
    ul.appendChild(liDate);

    var liPlace = document.createElement('li');
    liPlace.id = 'city';
    liPlace.textContent = gig._embedded.venues[0].name;
    ul.appendChild(liPlace);

    content.appendChild(ul);

    return content;
  }
}


module.exports = Content;
