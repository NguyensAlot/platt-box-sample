/**
 * Created by Anthony on 10/28/2016.
 */



$(document).ready(function() {
    // add popover
    $('[data-toggle="popover"]').popover();

    // side nav highlight
    $('.side-nav-text').click(function(e) {
        $('li').removeClass('side-nav-active');
        $(this).toggleClass('side-nav-active');
    });

});

