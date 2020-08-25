// Auto Close any HTML Element

export let autoClose = (target, timeout) => {
    setTimeout(() => {
        $(target).remove();
    }, timeout);
};

// Get Variables from url using key like 'email'
// use this like 'getUrlVars()["email"])'
export let getUrlVars = () => {
    var vars = {};
    let url = decodeURIComponent(window.location.href);
    var parts = url.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
        vars[key] = value;
    });
    return vars;
};
