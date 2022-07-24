
const $ = document.querySelector.bind(document);

const btnToggleIntervalSlider = $('.btn-toggle-interval');
const sliderImg = $('#slider-img');
const elementTippy = $('#my-tippy')
console.log(elementTippy);
const app = {

    subNavHeader() {
        elementTippy.onclick = () => {
            elementTippy.classList.toggle('header-nav-item--active')
        }


        tippy('#my-tippy', {
            hideOnClick: 'toggle',
            trigger: "click",
            interactive: true,
            // offset: [0, 10],
            placement: 'bottom',
            appendTo: () => $('#my-tippy'),
            popperOptions: {
                strategy: 'fixed',
            },
            zIndex: 9999,
            render(instance) {
                const popper = document.createElement('div');
                popper.classList.add('popper');
                // popper.style.top = '100%'
                const box = document.createElement('div');
                popper.appendChild(box);
                box.className = 'box-tippy';
                box.innerHTML = /*html*/`
                <div class="wrapper">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col col-2">
                                <div class="footer-heading sub-heading" >Phần mềm</div>
                                <ul class="footer-list list-unstyled">
                                    <li class="footer-item sub-item"><a href="#" class="footer-link">Ứng dụng cho Windows</a></li>
                                    <li class="footer-item sub-item"><a href="#" class="footer-link">Outlook</a></li>
                                    <li class="footer-item sub-item"><a href="#" class="footer-link">Microsoft Teams</a></li>
                                </ul>
                            </div>
                            <div class="col col-2">
                                <div class="footer-heading sub-heading" >Máy tính và các thiết bị</div>
                                <ul class="footer-list list-unstyled">
                                    <li class="footer-item sub-item"><a href="#" class="footer-link">Mua Xbox</a></li>
                                    <li class="footer-item sub-item"><a href="#" class="footer-link">Phụ kiện Máy tính</a></li>
                                </ul>
                            </div>
                            <div class="col col-2">
                                <div class="footer-heading sub-heading" >Giải trí</div>
                                <ul class="footer-list list-unstyled">
                                    <li class="footer-item sub-item"><a href="#" class="footer-link">Trò chơi trên PC</a></li>
                                    <li class="footer-item sub-item"><a href="#" class="footer-link">Trò chơi trên Windows</a></li>
                                </ul>
                            </div>
                            <div class="col col-2">
                                <div class="footer-heading sub-heading" >Kinh doanh</div>
                                <ul class="footer-list list-unstyled">
                                    <li class="footer-item sub-item"><a href="#" class="footer-link">Đám mây Microsoft</a></li>
                                    <li class="footer-item sub-item"><a href="#" class="footer-link">Microsoft Security</a></li>
                                    <li class="footer-item sub-item"><a href="#" class="footer-link">Azure</a></li>
                                    <li class="footer-item sub-item"><a href="#" class="footer-link">Dynamics 365</a></li>
                                    <li class="footer-item sub-item"><a href="#" class="footer-link">Microsoft 365 dành cho doanh nghiệp</a></li>
                                    <li class="footer-item sub-item"><a href="#" class="footer-link">Microsoft trong ngành</a></li>
                                    <li class="footer-item sub-item"><a href="#" class="footer-link">Microsoft Power Platform</a></li>
                                    <li class="footer-item sub-item"><a href="#" class="footer-link">Windows 365</a></li>
                                </ul>                                               
                            </div>
                            <div class="col col-2">
                                <div class="footer-heading sub-heading" >Nhà phát triển & CNTT</div>
                                <ul class="footer-list list-unstyled">
                                    <li class="footer-item sub-item"><a href="#" class="footer-link">Trung tâm nhà phát triển</a></li>
                                    <li class="footer-item sub-item"><a href="#" class="footer-link">Hướng dẫn sử dụng</a></li>
                                    <li class="footer-item sub-item"><a href="#" class="footer-link">Microsoft Learn</a></li>
                                    <li class="footer-item sub-item"><a href="#" class="footer-link">Cộng đồng Microsoft Tech</a></li>
                                    <li class="footer-item sub-item"><a href="#" class="footer-link">Azure Marketplace</a></li>
                                    <li class="footer-item sub-item"><a href="#" class="footer-link">AppSource</a></li>
                                    <li class="footer-item sub-item"><a href="#" class="footer-link">Visual Studio</a></li>
                                </ul>   
                            </div>                                                               
                            <div class="col col-2">
                                <div class="footer-heading sub-heading" >Khác</div>
                                <ul class="footer-list list-unstyled">
                                    <li class="footer-item sub-item"><a href="#" class="footer-link">Bản tải xuống và bảo mật miễn phí</a></li>
                                    <li class="footer-item sub-item"><a href="#" class="footer-link">Giáo dục</a></li>
                                    <li class="footer-item sub-item"><a href="#" class="footer-link">Licensing</a></li>
                                </ul>  
                            </div>
                        </div>
                    </div>
                    <div class="wrapper__footer">
                        <a class="wrapper__footer-link" href="#">
                            <span>Xem sơ đồ trang</span>
                            <i class="ti-angle-right"></i>
                        </a>
                    </div>
                </div>`;


                function onUpdate(prevProps, nextProps) {
                    // DOM diffing
                    if (prevProps.content !== nextProps.content) {
                        box.textContent = nextProps.content;
                    }
                }
                return {
                    popper,
                    onUpdate
                }
            },
            onClickOutside(instance, event) {
                instance.hide()
            },
        })
    },
    

    init() {
        this.subNavHeader()
    },
};

app.init()
