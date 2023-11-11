const trackButton = document.querySelector('#track-button');

// -----------------------------------------------------------
trackButton.addEventListener('click', async () => {
    // Регистрация по клику на кнопку найти order track 
    const orderId = document.querySelector('#track-order').value;
    const email = document.querySelector('#track-email').value;
    if (orderId == '') {
        document.querySelector('#track-order').classList.add('warning');
        return true;
    }

    if (email == '') {
        document.querySelector('#track-email').classList.add('warning');
        return true;
    }

    

    // -----------------------------------------------------
    document.querySelectorAll('.check__order').forEach(el => {
        el.id = 'check-order-empty';
        el.classList.add('none');
    });
    // после присваивания фейкового id делаем нужный блок check _ order , рендиринг и сначала запрос axios
    const res = await axios.get(`https://eskidka.site:1032/get_order?email=${email}&order_id=${orderId}`);
    const order = res.data;
    // проверка на то, найден ли order (пустой ли объект)
    if (!order.email) {
        const orderBlock = document.querySelector('.check__order.empty')
        orderBlock.classList.remove('none');
        orderBlock.id = 'check-order';
        orderBlock.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        return true;
    } else {
        const orderBlock = document.querySelector('.check__order:not(.empty)')
        orderBlock.classList.remove('none');

        orderBlock.querySelector('.check__order__title').textContent = `Order #${orderId.padStart(6, 'O')}`
        orderBlock.querySelector('.check__order__date').textContent = `Expected Arrival ${getCustomDate(order.date).replaceAll('0', 'O')}`;
        orderBlock.id = 'check-order';
        orderBlock.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })

        document.querySelectorAll('.check__order__status__item').forEach( (barEl, index) => {
            if (index > order.status) {
                return false;
            } else {
                barEl.classList.add('active');
            }
        })
        return true;
    }
})


function getCustomDate(datems = 0) {

    if (!datems) {
        datems = Date.now();
    }

    let currentDate = new Date(datems);
    let day = currentDate.getDate().toString().padStart(2, '0');
    let month = (currentDate.getMonth()+1).toString().padStart(2, '0');
    let year = currentDate.getFullYear();

    let formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
}