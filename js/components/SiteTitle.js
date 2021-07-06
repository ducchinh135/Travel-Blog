import { BaseComponent } from "../BaseComponent.js";

class SiteTitle extends BaseComponent {
    constructor() {
        super();
    }

    render() {
        const template = `
        <link rel="stylesheet" href="../css/styles_home.css">
        <main>
        <section class="site-title">
            <div class="site-background">
                <h3>Tours & Travels</h3>
                <h1>Amazing Place on Earth</h1>
                <a href="#exploree"><button class="btn"> Explore </button></a>
            </div>
        </section>
        </main>
        `;
        this._shadowRoot.innerHTML = template;
    }
}

window.customElements.define('site-title', SiteTitle);