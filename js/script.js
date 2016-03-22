$(document).ready(function(){

    //nojs
    $('html').removeClass('no-js');

    //------------------------------------------------------------------------//

    //fakelink
    $('a[href="#"]').on('click', function(event) {
        event.preventDefault();
    });

    //------------------------------------------------------------------------//

    //active class
    $('.se-select a').on('click',function(){
        $('.se-select a').removeClass('active');
        $(this).addClass('active');
    })

    //------------------------------------------------------------------------//

    //table sort
    $('.mt-sort').tablesorter();

    //filter collapse
    $('.filter-title a').on('click',function(){
        if ($(this).hasClass('open-collapsed')) {
            $(this).removeClass('open-collapsed');
            $(this).parents('.filter-box').removeClass('fb-collapsed').find('ul').slideDown();
        }else{
            $(this).addClass('open-collapsed');
            $(this).parents('.filter-box').addClass('fb-collapsed').find('ul').slideUp();
        }
    });
    $('.fb-collapsed').find('ul').slideUp();

    //------------------------------------------------------------------------//

    //select
     $('select').selectBoxIt({
        autoWidth: false
     });

    //------------------------------------------------------------------------//

    //accordion
    $('.open-accordion').on('click',function(){
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).parents('.accordion').find('.accordion-text').slideUp();
        }else{
            $('.open-accordion').removeClass('active');
            $('.accordion-text').slideUp();
            $(this).addClass('active');
            $(this).parents('.accordion').find('.accordion-text').slideDown();
        }
    });

    //------------------------------------------------------------------------//

});//document ready

