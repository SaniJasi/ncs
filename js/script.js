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

    //popup
    $(window).bind("touchstart click", function(e){
        if (('.popup-box').length) {
            $('.popup-box').fadeOut();
            $('body').removeClass('body-hidden');
        }
    });
    $('.popup').bind("click touchstart", function(event){
        event.stopPropagation();
    });
    $(document).keydown(function(e){
        if (e.keyCode == 27){
            $('.popup-box').fadeOut();
            $('body').removeClass('body-hidden');
            e.preventDefault();
        }
    });
    $('.open-popup').on('click',function(){
        if (('.popup-box').length) {
            $(""+$(this).attr('href')+"").fadeIn();
            $('body').addClass('body-hidden');
        }
        return false;
    });
    $('.close-popup,.request-close-popup').on('click', function() {
        $('.popup-box').fadeOut();
            $('body').removeClass('body-hidden');
        return false;
    });
    
    //------------------------------------------------------------------------//

    //add-remove variables
    $(document).on('click','.add-new-search',function(){
        $('.copy-box .se-input').clone().appendTo('.se-list');
        if ($('.se-list .se-input').length > 2) {
            $('.se-list .se-input').addClass('se-medium');
        }
        return false;
    })
    $(document).on('click','.remove-new-search',function(){
        if ($('.se-list .se-input').length>1) {
           $('.se-list .se-input:last-child').remove(); 
        } 
        return false; 
    })
    
    //------------------------------------------------------------------------//

    //custom scroll
    $('.custom-scroll').mCustomScrollbar();
    
    //------------------------------------------------------------------------//

    //collapse request
    $('.collapse-request').on('click',function(){
        $(this).parents('.request-box').toggleClass('request-collapsed').find('.request-info-white').slideToggle();
    })
    
    //------------------------------------------------------------------------//

    //open/close voters
    $('.open-voters').on('click',function(){
        $(this).toggleClass('active');
        $('.votes-box').slideToggle(500);
        $('.vote-box').slideUp(400);
        $('.open-vote').removeClass('active');
    })
    $('.assingn-voters').on('click',function(){
        $('.open-voters').removeClass('active');
        $('.votes-box').slideUp();
    })
    $('.open-vote').on('click',function(){
        $(this).toggleClass('active');
        $('.vote-box').slideToggle(500);
        $('.votes-box').slideUp(400);
        $('.open-voters').removeClass('active');
    })
    $('.close-vote').on('click',function(){
        $('.open-vote').removeClass('active');
        $('.vote-box').slideUp();
    })
    
    //------------------------------------------------------------------------//



});//document ready

