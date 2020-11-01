$(function() {


//    Fixed header

    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");
    let navToggle = $("#navToggle");




//    Nav Toggle


    navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");
    });


})









