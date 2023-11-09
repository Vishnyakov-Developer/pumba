setTimeout(() => {
    document.body.classList.remove('loading');
}, 111)

window.addEventListener('DOMContentLoaded', () => {
    const modalCart = document.querySelector('.cart');
    
    document.querySelector('.header__flex_cart').addEventListener('click', () => {
        modalCart.classList.add('active');
        document.body.style = 'overflow: hidden';
    })

    document.querySelector('#cart-close').addEventListener('click', () => {
        modalCart.classList.remove('active');
        document.body.style = 'overflow: inherit';
    })

})