window.addEventListener('DOMContentLoaded', () => {
    const inp = document.querySelector('.done__input');
    const myId = getUrlParameter('id') || 'Not Found';

    // inp.value = myId;
    inp.setAttribute('placeholder', myId);
    inp.disabled = true;
})

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;
    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};