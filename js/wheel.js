var resultWrapper = document.querySelector('.spin-result-wrapper');

var wheel = document.querySelector('.wheel-img');


$('.cursor-text').click(function() {

    if (wheel.classList.contains('rotated')) {

        resultWrapper.style.display = "block";

    } else {

        wheel.classList.add('super-rotation');

        setTimeout(function() {

            resultWrapper.style.display = "block";

        }, 6500);

        setTimeout(function() {

            $('.spin-wrapper').slideUp();

            $('.order_block').slideDown();

        }, 7000);

        wheel.classList.add('rotated');

    }

});



$('.close-popup, .pop-up-button').click(function(e) {

    e.preventDefault();

    $('.spin-result-wrapper').fadeOut();

    var top = $('.toform').offset().top;

    $('body,html').animate({ scrollTop: top }, 800);

});

