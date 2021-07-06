
let containerPost = document.querySelector(".inforBlog--container");
const postApi = "https://travel-blog-mindx.herokuapp.com/post_travel/1";
const getDataPost = async () => {
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
    function renderPosts(dataPost) {
        let htmls =
            `
        <blog-main title="${dataPost.title}" mainHead="${dataPost.mainHead}" image="${dataPost.image}" mainWelcome="${dataPost.mainWelcome}"
        mainFocus="${dataPost.mainFocus}" mainCate="${dataPost.mainCate}" mainContent="${dataPost.mainContent}" mainFoot="${dataPost.mainFoot}"></blog-main>
        `
        containerPost.innerHTML = htmls;
    }
}
getDataPost();

