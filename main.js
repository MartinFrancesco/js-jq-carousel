/**
* JQUERY
**/

$( document ).ready(function() {

   //CLICK
   $ ('.prev').click( function() {
     nextPrevImages('prev');
   });

   $ ('.next').click( function() {
     nextPrevImages('next');
   });


}); //Doc ready!

//Dichiarazione funzione
function nextPrevImages(direction) {

  var activeImage = $ ('.images img.active');
  var activeCircle = $ ('nav i.active');

  //Reset
  activeImage.removeClass('active');
  activeCircle.removeClass('active');

  //NEXT
  if (direction === 'next') {

    if (activeImage.hasClass('last') === true) {
      $ ('.images img.first').addClass('active');
      $ ('nav i.first').addClass('active');
    } else {
      activeImage.next('img').addClass('active');
      activeCircle.next('i').addClass('active');
    }
  }

  //PREV
  else if (direction === 'prev') {

    if (activeImage.hasClass('first') === true) {
      $ ('.images img.last').addClass('active');
      $ ('nav i.last').addClass('active');
    } else {
      activeImage.prev('img').addClass('active');
      activeCircle.prev('i').addClass('active');
    }
  }
}
