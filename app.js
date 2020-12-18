$(function() {


//    Fixed header

    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");
    let navToggle = $("#navToggle");
    let description = $("#description");
    let content = $("#content");
    let mycoursesInprogress = $("#mycoursesInprogress");
    let mycoursesFinished = $("#mycoursesFinished");

    let finished = $("#finished");
    let inprogress = $("#inprogress");
    let contentContent = $("#contentContent");
    let descriptionContent = $("#descriptionContent");
    let progressNav = $("#progressNav");
    let navProgressBtn = $("#navProgressBtn");




//    Nav Toggle


    navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");
    });

    content.on("click", function(event) {
        event.preventDefault();

        descriptionContent.addClass("hide");
        contentContent.addClass("show");
        content.addClass("extra__active");
        description.removeClass("extra__active");


    });

    description.on("click", function(event) {
        event.preventDefault();

        contentContent.removeClass("show");
        descriptionContent.removeClass("hide");
        content.removeClass("extra__active");
        description.addClass("extra__active");
    });

    navProgressBtn.on("click", function(event) {
        event.preventDefault();

        progressNav.toggleClass("active");
        navProgressBtn.toggleClass("active");
    });

    finished.on("click", function(event) {
        event.preventDefault();

        mycoursesInprogress.addClass("hide");
        mycoursesFinished.addClass("showFlex");
        finished.addClass("extra__active");
        inprogress.removeClass("extra__active");


    });

    inprogress.on("click", function(event) {
        event.preventDefault();

        mycoursesFinished.removeClass("showFlex");
        mycoursesInprogress.removeClass("hide");
        finished.removeClass("extra__active");
        inprogress.addClass("extra__active");
    });

})









