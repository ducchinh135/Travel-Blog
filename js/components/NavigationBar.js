
import { BaseComponent } from "../BaseComponent.js";

class NavigationBar extends BaseComponent {
    constructor() {
        super();
    }

    render() {
        const template = /*html*/ `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
        <link rel="stylesheet" href="../css/styles_home.css">
            <nav class="nav">
        <div class="nav-menu flex-row">
            <div class="nav-brand">
                <a href="./home.html" class="text-gray">Blooger</a>
            </div>
            <div>
                <ul class="nav-items">
                    <a href="../html/homeUser.html">
                        <li class="nav-link active">
                            Home
                        </li>
                    </a>
                    <a href="../html/travelUser.html">
                        <li class="nav-link">
                            Travel
                        </li>
                    </a>
                    <a href="../html/eatUser.html">
                        <li class="nav-link">
                            Eat
                        </li>
                    </a>
                    <a href="../html/relaxUser.html">
                        <li class="nav-link">
                            Relax
                        </li>
                    </a>
                    <a href="../Videos/indexUser.html">
                        <li class="nav-link">
                            Video
                        </li>
                    </a>
                </ul>
            </div>
            <div class="social text-gray">
            <a href="./login.html">Đăng nhập</a>
            <a>|</a>
            <a href="./sign-up.html">Đăng ký</a>
            </div>

            <!-- Nav mobile ----->
            <div class="toggle-collapse">
                <div class="toggle-icons">
                    <i class="fas fa-bars" id="openNav"></i>
                </div>
            </div>

            <div class="nav-overlay" id="overlay"></div>

            <div class="nav__mobile" id="navMobile">
                <div class="nav__mobile-close" id="closeNav"><i class="fas fa-times"></i></div>
                <ul class="nav__mobile-items">
                    <li class="nav__mobile-link">
                        <a href="./homeUser.html">Home</a>
                    </li>
                    <li class="nav__mobile-link">
                        <a href="./travelUser.html">Travel</a>
                    </li>
                    <li class="nav__mobile-link">
                        <a href="./eatUser.html">Eat</a>
                    </li>
                    <li class="nav__mobile-link">
                        <a href="./relaxUser.html">Relax</a>
                    </li>
                    <li class="nav__mobile-link">
                        <a href="../Videos/indexUser.html">Videos</a>
                    </li>
                </ul>
                <div class="social__mobile text-gray">
                    <a href="./login.html">Đăng nhập</a>
                    <a>|</a>   
                    <a href="./sign-up.html">Đăng ký</a>
                </div>
            </div>
        </div>

    </nav>
    `;

        this._shadowRoot.innerHTML = template;
        let openNav = this._shadowRoot.getElementById("openNav");
        let closeNav = this._shadowRoot.getElementById("closeNav");
        let overlay = this._shadowRoot.getElementById("overlay");
        let navMobile = this._shadowRoot.getElementById("navMobile");

        openNav.onclick = function () {
            navMobile.style.transform = "translateX(0%)";
            navMobile.style.opacity = "1";
            overlay.style.display = "block";
        }

        closeNav.onclick = function () {
            navMobile.style.transform = "translateX(100%)";
            navMobile.style.opacity = "0";
            overlay.style.display = "none";
        }
    }
}

window.customElements.define('navigation-bar', NavigationBar);