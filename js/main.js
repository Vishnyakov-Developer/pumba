setTimeout(() => {
    document.body.classList.remove('loading');
}, 111)

window.addEventListener('DOMContentLoaded', () => {
    setInterval(() => {
        if(document.readyState == 'complete') {
            document.querySelector('.loader').classList.add('none');
        }
    }, 200)
    setTimeout(() => {
        document.querySelector('.loader').classList.add('none');
    }, 4000)
    
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


document.querySelectorAll('input').forEach(inputEl => {
    inputEl.addEventListener('input', () => {
        inputEl.classList.remove('warning');
    })
})