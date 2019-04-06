var i = 1;
var text = ['Mature solutions', 'Young team', 'Passionate engineers', 'Dedicated service'];

setInterval(swap, 3000);

function swap (){
    // $('#swapper').fadeOut(2000, swap);
    setTimeout(swap_text(),2000);
    // $('#swapper').fadeIn(2000);
}

function swap_text() {
    var swapper = document.getElementById('swapper');
    swapper.innerHTML = ' - ' + text[i] + ' - ';
    if (i < text.length-1){
        i++
    }else {
        i = 0
    }

}

var scrollTime = 200;

$('nav[href="#container"]').on('click', function (e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, scrollTime, 'linear');
});
