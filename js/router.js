var root = null;
var useHash = true; // Defaults to: false
var hash = "#c"; // Defaults to: '#'
window.router = new Navigo(root, useHash, hash);
let id;
let $app = document.getElementById("app");
window.router.on("/login", function () {
    $app.innerHTML = "<custom-login></custom-login>";
})
    .resolve();

window.router.on("/signup", function () {
    $app.innerHTML = " <custom-signup></custom-signup>";
})
    .resolve()
window.router.on("/home", function () {
    $app.innerHTML = ` 
        <nav-Login></nav-Login>
        <main>
        <site-title></site-title>
        <section>
            <div class="blog">
                <div class="container">
                    <div class="owl-carousel owl-theme blog-post">
                        <div class="blog-content">
                            <img src="../img/Slide01.jpg" alt="post-1">
                            <div class="blog-title">
                                <h3>Book with us and book it out of here!</h3>
                            </div>
                        </div>
                        <div class="blog-content">
                            <img src="../img/Slide02.jpg" alt="post-1">
                            <div class="blog-title">
                                <h3>Someday I’M gonna travel the world</h3>
                            </div>
                        </div>
                        <div class="blog-content">
                            <img src="../img/Slide03.jpg" alt="post-1">
                            <div class="blog-title">
                                <h3>Don’t just book it. Thomas Cook it</h3>
                            </div>
                        </div>
                        <div class="blog-content">
                            <img src="../img/Slide04.jpg" alt="post-1">
                            <div class="blog-title">
                                <h3>Go and see all you possibly can</h3>
                            </div>
                        </div>
                        <div class="blog-content">
                            <img src="../img/Slide05.jpg" alt="post-1">
                            <div class="blog-title">
                                <h3>Travel more to discover yourself</h3>
                            </div>
                        </div>
                        <div class="blog-content">
                            <img src="../img/Slide06.jpg" alt="post-1">
                            <div class="blog-title">
                                <h3>Don’t be a tourist, be a traveler</h3>
                            </div>
                        </div>
                    </div>
                    <div class="owl-navigation">
                        <span class="owl-nav-prev"><i class="fas fa-long-arrow-alt-left"></i></span>
                        <span class="owl-nav-next"><i class="fas fa-long-arrow-alt-right"></i></span>
                    </div>
                </div>
            </div>
        </section>
        <section class="container" id="exploree">
            <div class="site-content">
                <aside class="sidebar">
                    <slide-bar></slide-bar>
                </aside>
            </div>
        </section>
    </main> `;
})
    .resolve();

//xử lý trường hợp người dùng truy cập vào route không tồn tại
window.router.notFound(function () {
    $app.innerHTML = "không tìm thấy trang này";
});
