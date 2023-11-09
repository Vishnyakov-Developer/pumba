setTimeout(() => {
    document.body.classList.remove('loading');
}, 111)

window.addEventListener('DOMContentLoaded', () => {
    const modalCart = document.querySelector('.cart');
    
    document.querySelector('.header__flex_cart').addEventListener('click', () => {
        modalCart.classList.add('active');
    })

    document.querySelector('#cart-close').addEventListener('click', () => {
        modalCart.classList.remove('active');
    })
})