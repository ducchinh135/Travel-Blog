import { BaseComponent } from "../BaseComponent.js";

class BlogContent extends BaseComponent {
    constructor() {
        super();
    }

    static get observedAttributes() {
        return ["id"];
    }

    render() {
        const template = `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
        <link rel="stylesheet" href="../css/styles__inforBlog.css">
        <link rel="stylesheet" href="../css/styles_blog.css">
        <link rel="stylesheet" href="../css/styles_home.css">
        
        <p>nnnfnsnfnsnn</p>
        <div class="inforBlog--container" id="exploree">

        </div>
        `;
        this._shadowRoot.innerHTML = template;
        let postApi = "https://travel-blog-mindx.herokuapp.com/post_travel/";
        let contentBlog = this._shadowRoot.querySelector('.inforBlog--container')
        function start() {
            getPosts(renderPosts);
        }
        start();

        function getPosts(callback) {
            fetch(postApi)
                .then(function (reponsive) {
                    return reponsive.json();
                })
                .then(callback)
        }
        function renderPosts(posts) {
            console.log(posts);
            let htmls =
                `
                <blog-main title="${posts.title}" mainHead="${posts.mainHead}" image="${posts.image}" mainWelcome="${posts.mainWelcome}"
                mainFocus="${posts.mainFocus}" mainCate="${posts.mainCate}" mainContent="${posts.mainContent}" mainFoot="${posts.mainFoot}"></blog-main>
                `
            contentBlog.innerHTML = htmls;
        }
    }

    get id() {
        return this.getAttribute("id");
    }
}

window.customElements.define('blog-content', BlogContent);