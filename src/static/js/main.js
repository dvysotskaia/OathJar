$(document).ready(function () {

    //Tabs
    $('.what-content-info__tab').on('click',function (e){
        e.preventDefault();

        $('.what-content-info__block').hide();

        var href = $(this).attr('href');

        // console.log(href)

        $(href).fadeIn();
    });


    //Получаем высоту окна

    var windowHeight = $(window).height();

    //Следим за скролом и показываем/скрываем кнопку
    $(window).on('scroll',function(){

        $(this).scrollTop();

        if( $(this).scrollTop() > windowHeight) {

            $('.scrolltop').fadeIn();

        }else {
            $('.scrolltop').fadeOut();
        }

    });

    //При клике на кнопку - прокрутка страницы наверх

    $('.scrolltop').on('click',function(e){

        e.preventDefault();

        $('html').animate({scrollTop: 0}, 800)

    });


});