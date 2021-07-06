import { BaseComponent } from "../BaseComponent.js";

class SlideBar extends BaseComponent {
    constructor() {
        super();
    }

    render() {
        const template = `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
        <link rel="stylesheet" href="../css/styles_home.css">
        </style>
        <div class="popular-post">
                        <h2>Popular Post</h2>
                        <div class="post-content" data-aos="flip-up" >
                            <div class="post-image">
                                <div>
                                    <img src="../img/img_eat1.jpg" class="img" alt="blog1">
                                </div>
                                <div class="post-info flex-row">
                                    <span><i class="fas fa-calendar-alt text-gray"></i>&nbsp;&nbsp;January 14,
                                        2019</span>

                                </div>
                            </div>
                            <div class="post-title">
                                <a href="./detailEat1.html">East of Eden - The Best of Thailand’s Markets</a>
                            </div>
                        </div>
                        <div class="post-content" data-aos="flip-up" >
                            <div class="post-image">
                                <div>
                                    <img src="../img/img_relax1.jpg" class="img" alt="blog1">
                                </div>
                                <div class="post-info flex-row">
                                    <span><i class="fas fa-calendar-alt text-gray"></i>&nbsp;&nbsp;January 14,
                                        2019</span>

                                </div>
                            </div>
                            <div class="post-title">
                                <a href="./detailRelax1.html">Silky Sands, Turquoise Surf</a>
                            </div>
                        </div>
                        <div class="post-content" data-aos="flip-up" >
                            <div class="post-image">
                                <div>
                                    <img src="../img/img_eat3.jpg" class="img" alt="blog1">
                                </div>
                                <div class="post-info flex-row">
                                    <span><i class="fas fa-calendar-alt text-gray"></i>&nbsp;&nbsp;January 14,
                                        2019</span>

                                </div>
                            </div>
                            <div class="post-title">
                                <a href="./detailEat3.html">What’s Cooking, Mexico?</a>
                            </div>
                        </div>
                        <div class="post-content" data-aos="flip-up" >
                            <div class="post-image">
                                <div>
                                    <img src="../img/img_travel1.jpg" class="img" alt="blog1">
                                </div>
                                <div class="post-info flex-row">
                                    <span><i class="fas fa-calendar-alt text-gray"></i>&nbsp;&nbsp;January 14,
                                        2019</span>

                                </div>
                            </div>
                            <div class="post-title">
                                <a href="./detailTravel1.html">Mykonos with Mr. & Mrs. Smith</a>
                            </div>
                        </div>

                        
                    </div>
        `;
        this._shadowRoot.innerHTML = template;
    }
}

window.customElements.define('slide-bar', SlideBar);