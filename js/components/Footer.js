import { BaseComponent } from "../BaseComponent.js";

class Footer extends BaseComponent {
    constructor() {
        super();
    }

    render() {
        const template = `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
        <link rel="stylesheet" href="../css/styles_home.css">
        <footer class="footer">
        <div class="container">
            <div class="about-us" >
                <h2>About us</h2>
                <p>You are not alone. Over the past eleven years, I’ve helped millions of people
                    answer those questions and travel more for less with time tested and proven tips
                    and advice.</p>
            </div>
            <div class="newsletter" >
                <h2>Newsletter</h2>
                <p>Stay update with our latest</p>
                <div class="form-element">
                    <input type="text" placeholder="Email" id="txtMail">
                    <span id="btnMail"><a id="hrefMail" href="mailto:abc@gmail.com"><i
                                class="fas fa-chevron-right"></a></i></span>
                </div>
            </div>
            <div class="follow" >
                <h2>Follow us</h2>
                <p>Let us be Social</p>
                <div>
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-youtube"></i>
                </div>
            </div>
            <div class="contact">
                <h2>Contact</h2>
                <p><i class="fas fa-home"></i> Ha Noi, Viet Nam</p>
                <p><i class="fas fa-envelope"></i> ducchinh@gmail.com</p>
                <p><i class="fas fa-phone"></i> +84 914 253999</p>
            </div>
        </div>
        <div class="rights flex-row">
            <h4 class="text-gray">
                Copyright ©2021 All rights reserved
            </h4>
        </div>
        <div class="move-up">
            <span><i class="fas fa-arrow-circle-up fa-2x"></i></span>
        </div>
    </footer>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"
        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
        `;
        this._shadowRoot.innerHTML = template;
        this._shadowRoot.querySelector('.move-up').addEventListener('click', function () {
            $('html, body').animate({
                scrollTop: 0
            }, 1000);
        })
    }
}

window.customElements.define('footer-main', Footer);