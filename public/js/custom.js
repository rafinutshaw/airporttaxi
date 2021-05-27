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

/**
 * *    Set Sidebar nav item active
 */
const setNavItemActive = () => {
    let url = window.location.href;
    let allLinks = document.querySelectorAll("ul .nav-item a");
    let currentLink = [...allLinks].find(e => {
        return e.href == url;
    });

    if (currentLink !== undefined && Object.keys(currentLink).length > 0) {
        currentLink.classList.add("active");
        if (
            currentLink.closest(".nav-treeview") &&
            currentLink.closest(".has-treeview")
        ) {
            currentLink.closest(".nav-treeview").style.display = "block";
            currentLink.closest(".has-treeview").classList.add("active");
        }
    }
};

$(document).ready(function() {
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

    /**
     * * add active class and stay opened when selected in Sidebar
     */
    setNavItemActive();
});
