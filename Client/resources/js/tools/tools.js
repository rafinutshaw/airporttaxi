// Auto Close any HTML Element

export let autoClose = (target, timeout) => {
    setTimeout(() => {
        $(target).remove();
    }, timeout);
};
