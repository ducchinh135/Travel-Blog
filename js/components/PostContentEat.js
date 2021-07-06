import { BaseComponent } from "../BaseComponent.js";

class PostContent extends BaseComponent {
    constructor() {
        super();
    }

    static get observedAttributes() {
        return ["id,image,commentLength,title,mainHead"];
    }

    render() {
        const template = `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
        <link rel="stylesheet" href="../css/styles_home.css">
        
        <div class="post-content">
            <div class="post-image">
                <div>
                    <img src="${this.image}" class="img" alt="blog1">
                </div>
                <div class="post-info flex-row">
                    <span><i class="fas fa-user text-gray"></i>&nbsp;&nbsp;Admin</span>
                    <span><i class="fas fa-calendar-alt text-gray"></i>&nbsp;&nbsp;January 14, 2019</span>
                    <span>${this.commentLength} Comments</span>
                </div>
            </div>
            <div class="post-title">
                <a href="./detailEat${this.id}.html">${this.title}</a>
                <p>${this.mainHead}
                </p>
                <button class="btn post-btn"><a href="./detailEat${this.id}.html">Read More &nbsp; <i class="fas fa-arrow-right"></i></a></button>
            </div>
        </div>
        `;
        this._shadowRoot.innerHTML = template;
    }

    get id() {
        return this.getAttribute("id");
    }

    get image() {
        return this.getAttribute("image");
    }

    get commentLength() {
        return this.getAttribute("commentLength");
    }

    get title() {
        return this.getAttribute("title");
    }

    get mainHead() {
        return this.getAttribute("mainHead");
    }
}

window.customElements.define('post-contenteat', PostContent);