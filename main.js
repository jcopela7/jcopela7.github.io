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
});
