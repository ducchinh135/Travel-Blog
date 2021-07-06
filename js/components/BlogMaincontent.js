import { BaseComponent } from "../BaseComponent.js";

class BlogMainContent extends BaseComponent {
    constructor() {
        super();
    }

    static get observedAttributes() {
        return ["id,title,mainHead,image,mainWelcome,mainFocus,mainCate,mainContent,mainFoot"];
    }

    render() {
        const template = `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
        <link rel="stylesheet" href="../css/styles__inforBlog.css">
        <link rel="stylesheet" href="../css/styles_blog.css">
        <link rel="stylesheet" href="../css/styles_home.css">
        
        <div class="inforBlog--container__author">
        <div class="author--imgage"><img src="../img/avatar.jpg" /></div>
        <span class="date">Nov 19,2020</span>
    </div>
    <div class="inforBlog--container__title">
        <span>
            <h1>${this.title}</h1>
        </span>
    </div>
    <div class="inforBlog--container__main">
    <div class="main--head">
        <span>
            <strong>${this.mainHead}</strong>
        </span>
    </div>
    <div class="main--imgage">
        <img src="${this.image}" />
    </div>
    <div class="main--welcome">
        <span>${this.mainWelcome}</span>
    </div>
    <div class="main--focus">
        <span>${this.mainFocus}</span>
    </div>
    <div class="main--cate">
        <span>${this.mainCate}</span>
    </div>
    <div class="main--content">
        <span>${this.mainContent}</span>
    </div>
    <div class="main--foot">
        <span>${this.mainFoot}</span>
    </div>
    </div>

    <div class="line--blog__1"></div>
        <div class="inforBlog--container__share">
        <ul>
            <li><i class="fab fa-facebook-f"></i></li>
            <li><i class="fab fa-twitter"></i></li>
            <li><i class="fab fa-instagram"></i></li>
            <li><i class="fas fa-link"></i></li>
        </ul>
        <div>
            <span>Travel</span>
        </div>
    </div>
    <div class="line--blog__2"></div>
    <div class="inforBlog--container__infor">
        <div class="blog--view">
            <p>0</p>
            <p>views</p>
        </div>
        <div class="blog--love"><i class="far fa-heart"></i></div>
    </div>
        `;
        this._shadowRoot.innerHTML = template;
    }

    get id() {
        return this.getAttribute("id");
    }

    get title() {
        return this.getAttribute("title");
    }

    get mainHead() {
        return this.getAttribute("mainHead");
    }

    get image() {
        return this.getAttribute("image");
    }

    get mainWelcome() {
        return this.getAttribute("mainWelcome");
    }

    get mainFocus() {
        return this.getAttribute("mainFocus");
    }

    get mainCate() {
        return this.getAttribute("mainCate");
    }

    get mainContent() {
        return this.getAttribute("mainContent");
    }

    get mainFoot() {
        return this.getAttribute("mainFoot");
    }
}

window.customElements.define('blog-main', BlogMainContent);