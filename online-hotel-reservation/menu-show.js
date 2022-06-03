$('.menu-button').click(function(){
    $(this).toggleClass("click");
    $('.menu-bar').toggleClass("show");
});

function openHomePage(){
    window.location.href = "index.html";
}

function openGallery(){
    window.location.href = "gallery.html";
}

function openRooms(){
    window.location.href = "rooms.html";
}

function openServices(){
    window.location.href = "services.html";
}

function openActivities(){
    window.location.href = "activities.html";
}

function openInfo(){
    window.location.href = "info.html";
}

function openBooking(){
    window.location.href = "booking.html";
}