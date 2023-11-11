setTimeout(() => {
    document.body.classList.remove('loading');
}, 111)
const modalCart = document.querySelector('.cart');
window.addEventListener('DOMContentLoaded', () => {
    setInterval(() => {
        if(document.readyState == 'complete') {
            document.querySelector('.loader').classList.add('none');
        }
    }, 200)
    setTimeout(() => {
        document.querySelector('.loader').classList.add('none');
    }, 4000)
    
    
    
    document.querySelector('.header__flex_cart').addEventListener('click', () => {
        openCart();
    })

    document.querySelector('#cart-close').addEventListener('click', () => {
        
        modalCart.classList.remove('active');
        document.querySelector('body > .bg').classList.add('none');
        document.body.style = 'overflow: inherit';
    })

})

document.body.addEventListener('clicks', (target) => {

    let close = true;
    let el = target.target;
    if(el.classList.contains('header__flex')) {
        return true;
    }
    while (true) {
        console.log('white');
        const parentNode = el?.parentNode;
        el = parentNode;
        console.log(parentNode);
        if (parentNode?.tagName == 'body' || parentNode?.tagName == 'html' || parentNode?.tagName == null || parentNode?.tagName == undefined) {
            break;
        } else {
            const classes = parentNode?.classList;
            console.log(classes)
            if (classes?.length > 0) {
                classes.forEach(clas => {
                    if (clas.includes('cart')) {
                        close = false;
                    }
                })
            }
            
        }
    }

    if (!close) return;
    modalCart.classList.remove('active');
    document.querySelector('body > .bg').classList.add('none');
    document.body.style = 'overflow: inherit';
});

document.querySelector('body > .bg').addEventListener('click', () => {
    modalCart.classList.remove('active');
    document.querySelector('body > .bg').classList.add('none');
    document.body.style = 'overflow: inherit';
})

const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

function openCart() {
    document.querySelector('.cart__inner').scrollTop = 0
    modalCart.classList.add('active');
    document.body.style = 'overflow: hidden';
    document.querySelector('body > .bg').classList.remove('none');
}

document.querySelectorAll('input').forEach(inputEl => {
    inputEl.addEventListener('input', () => {
        inputEl.classList.remove('warning');
    })
})

function openCart() {
    document.querySelector('.cart__inner').scrollTop = 0
    modalCart.classList.add('active');
    document.body.style = 'overflow: hidden';
    document.querySelector('body > .bg').classList.remove('none');
    return true;
}

document.querySelector('#buy-multi').addEventListener('click', () => {
    localStorage.setItem('productType2', parseInt(localStorage.getItem('productType2')) + 1);
    openCart();
    document.querySelector('header').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})
document.querySelector('#buy-multi-and-cart').addEventListener('click', () => {
    localStorage.setItem('productType2', parseInt(localStorage.getItem('productType2')) + 1);
    openCart();
    document.querySelector('header').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })

})

document.querySelector('#buy-single').addEventListener('click', () => {
    localStorage.setItem('productType1', parseInt(localStorage.getItem('productType1')) + 1);
    openCart();
    document.querySelector('header').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})
document.querySelector('#buy-single-and-cart').addEventListener('click', () => {
    localStorage.setItem('productType1', parseInt(localStorage.getItem('productType1')) + 1);
    openCart();
    document.querySelector('header').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})