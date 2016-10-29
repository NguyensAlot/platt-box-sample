/**
 * Created by Anthony on 10/28/2016.
 */



$(document).ready(function() {
    addPopover();
    addSideNavHighlight();
    startNotificationTimer();
    addEventListener();
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

function addEventListener() {
    document.getElementById("addFile").addEventListener('click', addMockFile, false);
    document.getElementById("addDir").addEventListener('click', addMockDirectory, false);
}

// add mock data
function addMockFile() {
    $('#files-table tbody').append("<tr>" +
        "<td class='fa fa-file-text-o'></td>" +
        "<td>#Name</td>" +
        "<td>#Size</td>" +
        "<td>#Date</td>" +
        "<td class='fa fa-ellipsis-v cursor-pointer' aria-hidden='true'></td></td>");
}

function addMockDirectory() {
    $('#files-table tbody').append("<tr>" +
        "<td class='fa fa-folder'></td>" +
        "<td>#Name</td>" +
        "<td></td>" +
        "<td>New</td>" +
        "<td class='fa fa-ellipsis-v cursor-pointer' aria-hidden='true'></td></td>");
}

function popoverMenu() {

}