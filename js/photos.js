window.addEventListener('DOMContentLoaded', async () => {
    let slide = 0;
    const block = document.querySelector('.photo__photo__gallery');
    document.querySelector('.photo__slider__arrow-right').addEventListener('click', () => {
        slide++;
        if(slide == 4) {
            slide = 0;
        }
        const scrollWidth = block.scrollWidth;
        block.scrollLeft = scrollWidth/4 * slide;
    })
    document.querySelector('.photo__slider__arrow-left').addEventListener('click', () => {
        slide--;
        if(slide == -1) {
            slide = 3;
        }
        const scrollWidth = block.scrollWidth;
        block.scrollLeft = scrollWidth/4 * slide;
    })
})

