function setValuesKit() {
    if (!localStorage.getItem('productType1')) {
        localStorage.setItem('productType1', 0)
    }
    
    if (!localStorage.getItem('productType2')) {
        localStorage.setItem('productType2', 0)
    }
}
setValuesKit()

setInterval(() => {
    document.querySelectorAll('[reactive]').forEach(el => {
        const nameAttribute = el.getAttribute('variable');
        const nameFunction = el.getAttribute('func');
        if (nameAttribute) {
            if(el.tagName == 'input' || el.tagName == 'INPUT') {
                if (el.value.length > 0 || el.classList.contains('used')) {
                    if(el.hasAttribute('reverse-reactive')) {
                        localStorage.setItem(nameAttribute, el.value);
                    }
                }
                el.value = localStorage.getItem(nameAttribute);
                
            } else {
                el.textContent = localStorage.getItem(nameAttribute);
            }
        } else {
            el.textContent = reactiveComputed(nameFunction);
        }
        
        
    })
}, 355)

var reactiveComputed = function reactiveComputed(val) {
    switch(val) {
        case 'price': {
            return `$${(parseInt(localStorage.getItem('productType2')) * 55.98 + parseInt(localStorage.getItem('productType1')) * 27.99).toFixed(2)}`;
        }
        case 'priceInt': {
            return parseInt((parseInt(localStorage.getItem('productType2')) * 55.98 + parseInt(localStorage.getItem('productType1')) * 27.99).toFixed(2));
        }
        case 'count': {
            return parseInt(localStorage.getItem('productType2')) + parseInt(localStorage.getItem('productType1'));
        }
    }
}

function customSecondCat() {
    const multiElements = document.querySelectorAll('[is-multi]');
    const singleElements = document.querySelectorAll('[is-single]');

    if (localStorage.getItem('productType1') > 0 && localStorage.getItem('productType2') < 1) {
        multiElements.forEach(e => e.classList.add('none'));
    } else if (localStorage.getItem('productType1') > 0 && localStorage.getItem('productType2') > 0) {
        singleElements.forEach(e => e.classList.remove('none'));
        multiElements.forEach(e => e.classList.remove('none'));
    } else if (localStorage.getItem('productType1') < 1 && localStorage.getItem('productType2') > 0) {
        singleElements.forEach(e => e.classList.add('none'));
    } else if (localStorage.getItem('productType1') < 1 && localStorage.getItem('productType2') < 1) {
        singleElements.forEach(e => e.classList.add('none'));
        multiElements.forEach(e => e.classList.remove('none'));
    }
}
setInterval(() => {
    customSecondCat();
}, 300)


function customCountCartNone() {
    const curEl = document.querySelector('.header__flex_cart .count');
    if (parseInt(curEl.textContent) > 0) {
        curEl.classList.remove('none');
    } else {
        curEl.classList.add('none');
    }
}
setInterval(() => {
    customCountCartNone();
}, 500)



function minusPlus() {
    document.querySelector('#minus-multi').addEventListener('click', () => {
        if (parseInt(localStorage.getItem('productType2')) < 1) return;
        localStorage.setItem('productType2', parseInt(localStorage.getItem('productType2')) - 1)
    })
    document.querySelector('#plus-multi').addEventListener('click', () => {
        localStorage.setItem('productType2', parseInt(localStorage.getItem('productType2')) + 1)
    })
    document.querySelector('#minus-single').addEventListener('click', () => {
        if (parseInt(localStorage.getItem('productType1')) < 1) return;
        localStorage.setItem('productType1', parseInt(localStorage.getItem('productType1')) - 1)
    })
    document.querySelector('#plus-single').addEventListener('click', () => {
        if (parseInt(localStorage.getItem('productType1')) < 1) return;
        localStorage.setItem('productType1', parseInt(localStorage.getItem('productType1')) + 1)
    })
}
minusPlus();

document.querySelectorAll('input').forEach(e => e.addEventListener('input', () => e.classList.add('used')));