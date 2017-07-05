

var Content = function () {

}

Content.prototype = {
  create: function (gig) {

    var content = document.createElement('div');
    content.id = 'content';

    var ul = document.createElement('ul');
    ul.id = 'content-list';



    var liTime = document.createElement('li');
    liTime.id = 'time';
    var time = gig.dates.start.localTime.split("").slice(0, -3).join("");
    liTime.textContent = time || 'Not Found';
    ul.appendChild(liTime);

    var liDate = document.createElement('li');
    liDate.id = 'date';
    liDate.textContent = gig.dates.start.localDate || 'Not Found';
    ul.appendChild(liDate);

    var liPlace = document.createElement('li');
    liPlace.id = 'city';
    liPlace.textContent = gig._embedded.venues[0].name || 'Not Found';
    ul.appendChild(liPlace);

    var imgUrl = gig.images[0].url;
    var image = document.createElement('img')
    image.setAttribute("src", imgUrl);
    image.setAttribute("width", "300");
    image.setAttribute("height", "300");



    var liImage = document.createElement('li');
    liImage.id = 'image'
    liImage.appendChild(image);
    //ul.appendChild(liImage);
    var imgDiv = document.createElement('div');
    imgDiv.id ='imgDiv';
    imgDiv.appendChild(liImage)

    content.appendChild(ul);
    content.appendChild(liImage);





    return content;
  }
}


module.exports = Content;
