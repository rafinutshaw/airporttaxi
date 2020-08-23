$(document).ready(function() {
    // Change Side Nav Option color after clicking (Admin Lte 3)
    $(".nav-link").click(function() {
        if (!$(this).hasClass("active")) {
            $(".nav-link").removeClass("active");
            $(this).addClass("active");
        }
    });

    // alert("HI");
    // console.log("HI");
    // // auto logout
    // const timeout = 5000; // 900000 ms = 15 minutes
    // var idleTimer = null;
    // $("*").bind(
    //     "mousemove click mouseup mousedown keydown keypress keyup submit change mouseenter scroll resize dblclick",
    //     function() {
    //         clearTimeout(idleTimer);

    //         idleTimer = setTimeout(function() {
    //             document.getElementById("logout-form").submit();
    //         }, timeout);
    //     }
    // );
    // $("body").trigger("mousemove");
});
