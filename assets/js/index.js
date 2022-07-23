
const $ = document.querySelector.bind(document);

const btnToggleIntervalSlider = $('.btn-toggle-interval');
const sliderImg = $('#slider-img');

const app = {

    handleClickBtnToggleIntervalSlider() {
        let isPlay = true;
        const classNameActive = 'btn-toggle-interval--active';
        btnToggleIntervalSlider.onclick = e => {
            if (isPlay) {
                btnToggleIntervalSlider.classList.add(classNameActive);
                new bootstrap.Carousel(sliderImg, {
                    interval: false,
                })
                isPlay = false;
            } else {
                btnToggleIntervalSlider.classList.remove(classNameActive);
                new bootstrap.Carousel(sliderImg, {
                    interval: 2000,
                })
                isPlay = true;
            }
        }
    },

    init() {
        this.handleClickBtnToggleIntervalSlider()
    },
};

app.init()
