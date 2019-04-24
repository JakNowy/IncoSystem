
$(document).ready(function () {

    function swap(text,i) {
        document.getElementById('swapper').innerHTML=(text[i])
    }

    var text = ['Mature solutions', 'Young team', 'Passionate engineers', 'Dedicated service'];
    var i =0;

    var swapTime = 2000;
    var correct = 0;

    $('#swapper').fadeIn(swapTime).fadeOut(swapTime, swap(text, i));
    setInterval(function (){
        i++;
        if (i==text.length){i=0}
        $('#swapper').fadeIn(swapTime-correct).fadeOut(swapTime-correct, swap(text, i));
        }
    ,(swapTime-correct+4)*2);


//  SECTION SCROLLING
    var scrollTime = 200;
    var currentPosition = $(document).scrollTop;

    $('a[href="#s1"]').on('click', function (e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, scrollTime, 'linear');
    });

    $('a[href="#s2"]').on('click', function (e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, scrollTime, 'linear');
    });

    $('a[href="#s3"]').on('click', function (e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, scrollTime, 'linear');
    });

    $('a[href="#s4"]').on('click', function (e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, scrollTime, 'linear');
    });
// END


// DOCKING NAVBAR
    $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var popup_height = $('#s2').offset().top - 1;

    // if lower
    if (scroll < popup_height) {
        $("#navbar").removeClass("docked");
        $('#nav-border').css('visibility', 'hidden');
        $('a').addClass('underline')
    }
    // if higher
    if (scroll >= popup_height) {
        $("#navbar").addClass("docked");
        $('#nav-border').css('visibility', 'visible');
        $('a').removeClass('underline')
    }
    });



    // $(window).bind('scroll', function () {
    // if ($(window).scrollTop()) {
    //     $('#nav').addClass('docked');
    // } else {
    //     $('#nav').removeClass('docked');
    // }
    // });
// END

// UNDERLINE ACTIVE NAV-ITEM
    $(window).scroll(function(){

        // SECTION 1
       if ($(document).scrollTop() > $('#s1').offset().top){
           $('nav #s1').addClass('nav-active')
       }
       if ($(document).scrollTop() < $('#s1').offset().top){
           $('nav #s1').removeClass('nav-active')
       }

        // SECTION 2
       if ($(document).scrollTop() > $('#s2').offset().top){
           $('nav #s2').addClass('nav-active')
       }
       if ($(document).scrollTop() < $('#s2').offset().top){
           $('nav #s2').removeClass('nav-active')
       }

        // SECTION 3
      if ($(document).scrollTop() > $('#s3').offset().top){
           $('nav #s3').addClass('nav-active')
       }
       if ($(document).scrollTop() < $('#s3').offset().top){
           $('nav #s3').removeClass('nav-active')
       }

      //   // SECTION 4
      // if ($(document).scrollTop() > $('#s4').offset().top){
      //      $('nav #s4').addClass('nav-active')
      //  }
      //  if ($(document).scrollTop() < $('#s4').offset().top){
      //      $('nav #s4').removeClass('nav-active')
      //  }
    });
// MOBILE BURGER NAV
    $('#burger-icon').on('click', () => {
        if ($('#menu').css('display') == 'block' ){
            $('#menu').css({
                'display':'none'
            })
        }else{
            $('#menu').css({
                'display':'block'

            })
        }
    });

});

