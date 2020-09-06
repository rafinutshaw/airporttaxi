// Function to show loading form
const showLoading = (formId = "") => {
    let loading = false;
    console.log(formId);
    document
        .getElementById(formId)
        .querySelectorAll("[required]")
        .forEach(function(i) {
            if (!i.value) {
                loading = false;
            } else {
                loading = true;
            }
        });

    if (loading) {
        document.querySelector("#loading").classList.add("loader-overlay");
        document
            .querySelector("#loading-content")
            .classList.add("lds-ellipsis");
    }
};

const hideLoading = () => {
    document.querySelector("#loading").classList.remove("loader-overlay");
    document.querySelector("#loading-content").classList.remove("lds-ellipsis");
};

$(document).ready(function () {
    // Change Side Nav Option color after clicking (Admin Lte 3)
    $(".nav-link").click(function() {
        if (!$(this).hasClass("active")) {
            $(".nav-link").removeClass("active");
            $(this).addClass("active");
        }
    });

    $(".custom-file-input").change(function() {
        var fileName = $(this).val();
        if (fileName.length) {
            fileName = fileName.replace("C:\\fakepath\\", "");
            if (fileName.length > 14) {
                fileName = fileName.substring(0, 14) + "...";
            }
            $(this)
                .next(".custom-file-label")
                .html(fileName);
        } else {
            $(this)
                .next(".custom-file-label")
                .html("Choose Image");
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
