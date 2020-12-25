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
    let personDropdown = $("#personDropdown");
    let personMenu = $("#personMenu");

    let navProgressBtn = $("#navProgressBtn");

    let dialogs = $("#dialogs");
    let messagesNav = $("#messagesNav");


    let coll = document.getElementsByClassName('collapsible')

    for (let i = 0; i < coll.length; i++) {
        coll[i].addEventListener('click', function(){
            this.classList.toggle('active');
            let content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + 'px'
            }
        })
    }

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



    $(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $("#person__menu__dropdown"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            personMenu.removeClass("show__menu");
        }
    });

    personDropdown.on("click", function(event) {
        event.preventDefault();
        if (personMenu.hasClass("show__menu")) {
            personMenu.removeClass("show__menu")
        } else {
            personMenu.addClass("show__menu");
        }

    });

    dialogs.on("click", function(event) {
        event.preventDefault();

        dialogs.toggleClass("dialogs__active")
        messagesNav.toggleClass("show_dialogs");

    });

})









