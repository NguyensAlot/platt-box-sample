/**
 * Created by Anthony on 10/28/2016.
 */



$(document).ready(function() {
    addPopover();
    addSideNavHighlight();
    startNotificationTimer();
});

function addPopover() {
    // add popover
    $('[data-toggle="popover"]').popover();
}

function addSideNavHighlight() {
    // side nav highlight
    $('.side-nav-text').click(function(e) {
        $('li').removeClass('side-nav-active');
        $(this).toggleClass('side-nav-active');
    });
}

function startNotificationTimer() {
    var counter = 0;
    var alertNum = document.getElementById('notification-alert');
    setInterval(function() {
        alertNum.innerHTML = (++counter % 1000).toString();
    }, 3000);
}