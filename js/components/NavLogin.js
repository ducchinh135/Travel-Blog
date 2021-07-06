import { BaseComponent } from "../BaseComponent.js";
import { getDataFromDoc } from "../utils.js";
class NavLogin extends BaseComponent {
    constructor() {
        super();

        this.state = {
            name: ''
        }

        this.props = {
            "id": '',
            "owner": '',


        };
    }

    static get observedAttributes() {
        return ['id', 'owner'];
    }
    render() {
        const result = JSON.parse(localStorage.getItem("current-user"));
        console.log(result.email);
        if (result.email == "nnminh432@gmail.com") {
            const template1 = /*html*/ `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js">
        
        <link rel="stylesheet" href="../css/styles_home.css">
            <nav class="nav">
        <div class="nav-menu flex-row">
            <div class="nav-brand">
                <a href="./home.html" class="text-gray">Blooger</a>
            </div>
            <div>
                <ul class="nav-items">
                    <a href="../html/home.html">
                        <li class="nav-link active">
                            Home
                        </li>
                    </a>
                    <a href="../html/travel.html">
                        <li class="nav-link">
                            Travel
                        </li>
                    </a>
                    <a href="../html/eat.html">
                        <li class="nav-link">
                            Eat
                        </li>
                    </a>
                    <a href="../html/relax.html">
                        <li class="nav-link">
                            Relax
                        </li>
                    </a>
                    <a href="../Videos/index.html">
                        <li class="nav-link">
                            Video
                        </li>
                    </a>
                </ul>
            </div>
            <div class="social text-gray">
            <a href="../admin/">Admin</a>
            <a>|</a>
            <a href="./homeUser.html">Log out</a>
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
                        <a href="./home.html">Home</a>
                    </li>
                    <li class="nav__mobile-link">
                        <a href="./travel.html">Travel</a>
                    </li>
                    <li class="nav__mobile-link">
                        <a href="./eat.html">Eat</a>
                    </li>
                    <li class="nav__mobile-link">
                        <a href="./relax.html">Relax</a>
                    </li>
                    <li class="nav__mobile-link">
                        <a href="../Videos/index.html">Videos</a>
                    </li>
                </ul>
                <div class="social__mobile text-gray">
                    
                <a href="../admin/">Admin</a>
                <a>|</a>
                <a href="./homeUser.html">Log out</a>
                </div>
            </div>
        </div>

    </nav>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"
        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    `;
            this._shadowRoot.innerHTML = template1;
        } else {
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
                <a href="../html/home.html">
                <li class="nav-link active">
                    Home
                </li>
            </a>
            <a href="../html/travel.html">
                <li class="nav-link">
                    Travel
                </li>
            </a>
            <a href="../html/eat.html">
                <li class="nav-link">
                    Eat
                </li>
            </a>
            <a href="../html/relax.html">
                <li class="nav-link">
                    Relax
                </li>
            </a>
            <a href="../Videos/index.html">
                <li class="nav-link">
                    Video
                </li>
            </a>
                </ul>
            </div>
            <div class="social text-gray">
            <a>${result.name}</a>
            <a>|</a>
            <a href="./homeUser.html">Log out</a>
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
                <a href="./home.html">Home</a>
            </li>
            <li class="nav__mobile-link">
                <a href="./travel.html">Travel</a>
            </li>
            <li class="nav__mobile-link">
                <a href="./eat.html">Eat</a>
            </li>
            <li class="nav__mobile-link">
                <a href="./relax.html">Relax</a>
            </li>
            <li class="nav__mobile-link">
                <a href="../Videos/index.html">Videos</a>
            </li>
                </ul>
                <div class="social text-gray">
                <a>${result.name}</a>
                <a>|</a>
                <a href="./homeUser.html">Log out</a>
                </div>
            </div>
        </div>

    </nav>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"
        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    
    `;
            this._shadowRoot.innerHTML = template;
        }
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
window.customElements.define('nav-login', NavLogin);

