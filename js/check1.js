window.addEventListener('DOMContentLoaded', async () => {
    const btn = document.querySelector('#gocheck2');
    btn.addEventListener('click', async () => {
        const fields = document.querySelectorAll('.checkout__block input');
        for (let i = 0; i < fields.length; i++) {
            if (fields[i].value == '') {
                fields[i].parentElement.querySelector('.error').classList.remove('none');
                return true;
            }
        }


        // ПРОЦЕСС ПЛАТЕЖА

        const summa = reactiveComputed('priceInt');
        let descr = `Products: ${localStorage.getItem('productType2') || 0} Family Packs Toys AND ${localStorage.getItem('productType1') || 0} Single Toys`;
        const first_name = localStorage.getItem('first_name');
        const last_name = localStorage.getItem('last_name');
        const phone = localStorage.getItem('last_name');
        const country = localStorage.getItem('country');
        const region = localStorage.getItem('region');
        const city = localStorage.getItem('city');
        const address = localStorage.getItem('address');
        const portal_code = localStorage.getItem('portal_code');
        const res = await axios.get(`https://eskidka.site:1032/init_payment?email=${localStorage.getItem('email')}&summa=${summa}&description=${descr}&first_name=${first_name}&last_name=${last_name}&phone=${phone}&country=${country}&region=${region}&city=${city}&address=${address}&portal_code=${portal_code}&single=${localStorage.getItem('productType1')}&multi=${localStorage.getItem('productType2')}`);
        

        localStorage.setItem('productType1', 0);
        localStorage.setItem('productType2', 0);
        window.location.replace(res.data.url);
        return true;
    })
    return true;
})

document.querySelectorAll('input').forEach(inp => {
    inp.addEventListener('input', () => {
        inp.parentElement.querySelector('.error').classList.add('none');
    })
})