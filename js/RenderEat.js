let postApi = "https://travel-blog-mindx.herokuapp.com/posts";

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
    let postBlock = document.querySelector(".posts");
    let htmls = posts.map(function (post) {
        return `
        <post-contenteat class="post-content" id="${post.id}" image="${post.image}" commentLength="${post.comment.length}" title="${post.title}" mainHead="${post.mainHead}" ></post-contenteat>
        <hr>`
    });
    postBlock.innerHTML = htmls.join('');
}