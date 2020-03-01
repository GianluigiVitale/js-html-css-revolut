$(document).ready(function() {

    $(".menu-item > a").click(function() {
        if ($(this).parent(".menu-item").children(".dropdown-menu").is(":visible")) {
            $(this).parent(".menu-item").children(".dropdown-menu").slideToggle();
        } else {
            $(".dropdown-menu").slideUp();
            $(this).parent(".menu-item").children(".dropdown-menu").slideToggle();
        }
    });













});
