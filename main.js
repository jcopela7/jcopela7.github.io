//Fading background
/*$(document).ready(function() {
    var backgrounds = new Array(
        'url(./img/background.jpg)',
        'url(./img/background2.jpg)'
    );
    var t = 0;
    setInterval(function() {
        $('body').css("background-image", backgrounds[t]);
        t += 1;
        if (t > backgrounds.length) {
            t = 0;
        }
    }, 4000);

});*/

//Parallax
$(document).ready(function(){
  $('.parallax').parallax();

  $('.modal').modal({
  dismissible:true,
  opacity:0.7,
  startingTop:'50%',
  });

  $('.slider').slider({
    interval:1000000,
  });

});
