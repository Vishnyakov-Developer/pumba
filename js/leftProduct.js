const leftProducts = async function () {
    const leftValue = (await axios.get(`https://eskidka.site:1032/get_value?name=left`)).data;
    const ostValue = (await axios.get(`https://eskidka.site:1032/get_value?name=ost`)).data;

    const oneProc = parseInt(ostValue) / 100;
    const countProc = parseInt(leftValue) / oneProc;

    document.querySelector('#progress-line').style.width = `${countProc}%`;

    document.querySelector('.left').textContent = `${leftValue}`;
    document.querySelector('.ost').textContent = `${ost}`;
    return true;
}

leftProducts();

