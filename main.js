$(document).ready(function () {
    $(".sidenav").sidenav();
    $(".parallax").parallax();
    $(".scrollTo").click(function () {
        var page = $(this).attr("href");
        var speed = 1000;
        $("html, body").animate({
            scrollTop: $(page).offset().top - $(".navbar-fixed").height()
        }, speed);

        return false;
    });
});