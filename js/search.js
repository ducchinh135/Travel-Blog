let data = [
    {
        id: 1,
        linkHtml: "./detailEat1.html",
        title: "East of Eden - The Best of Thailand’s Markets",
        mainhead: "In the last few decades floating markets in Thailand, serving as places for trade and exchange of organic products, have came up as tourism destinations. Thailand is rich in canals, boats, homes, fruits, vegetables and souvenirs in certain and multiple ways."
    },
    {
        id: 2,
        linkHtml: "./detailEat2.html",
        title: "Dark and Beautiful - The Magic of Acai",
        mainhead: "Acai Berry, a superfood of its kind is considered delicious yet beneficial for health. Because of its form and nature it can be easily included in our diet."
    },
    {
        id: 3,
        linkHtml: "./detailEat2.html",
        title: "What’s Cooking, Mexico?",
        mainhead: "It is hard to even think about planning a vacation to Mexico without imagining the finest Mexican cuisine. Its delicious flavors, rich ingredients, and unique concoctions have become famous worldwide."
    },
    {
        id: 4,
        linkHtml: "./detailRelax1.html",
        title: "Silky Sands, Turquoise Surf",
        mainhead: "A short trip to Hamilton Island, exploring the Great Barrier Reef with family.",
    },
    {
        id: 5,
        linkHtml: "./detailRelax1.html",
        title: "Essential Spa & Body Treatments",
        mainhead: "There’s nothing more luxurious and relaxing than a trip to the spa, and here at Le Mas Candille we’re passionate about offering the most splendid and unforgettable pampering experiences to our guests.",
    },
    {
        id: 6,
        linkHtml: "./detailRelax1.html",
        title: "Top 5 Beaches in Corfu, Greece",
        mainhead: "It is well known some of Greece’s most beautiful beaches can be found on the Ionian island of Corfu. Many of Corfu’s beaches have been awarded Blue Flag status",
    },
    {
        id: 7,
        linkHtml: "./detailTravel1.html",
        title: "Mykonos with Mr. & Mrs. Smith",
        mainhead: "Welcome to Mykonos! As you guys remember, I went from Athens to the two most popular islands in Greece, Santorini and Mykonos with Mr. & Mrs. Smith, a site dedicated to curating the best hotels for you.",
    },
    {
        id: 8,
        linkHtml: "./detailTravel2.html",
        title: "The Mexico Diary",
        mainhead: "Mexico - the city of dream and ancient sculptures, monuments, Castle attract n number of tourist every year.",
    },
    {
        id: 9,
        linkHtml: "./detailTravel1.html",
        title: "Travel in Ipanema",
        mainhead: "IpanemaBeach, the stretch of white sand on Rio's coast between Arpoador and Leblon beaches, is considered the jewel in the city's crown",
    }
];

//let blogApi = "http://localhost:3000/posts";

let cmt = document.querySelector(".inforBlog--comment");
let inputCmt = document.querySelector(".inforBlog--userComment");

let deleteSearch = document.getElementById("deleteSearch");
deleteSearch.onclick = function () {
    document.getElementById("txtSearch").value = "";
}


function searchBlog() {
    startSearch();
    cmt.style.display = 'none';
    inputCmt.style.display = 'none';
}

function startSearch() {
    //getBlog(renderSearchBlog);
    renderSearchBlog(data)
}

// function getBlog(callback) {
//     fetch(blogApi)
//         .then(function (reponsive) {
//             return reponsive.json();
//         })
//         .then(callback)
// }


function renderSearchBlog(posts) {
    let search = document.getElementById("txtSearch").value;
    let searchBlock = document.querySelector(".inforBlog--container");

    let htmls = [];
    for (let i = 0; i < posts.length; i++) {
        if (posts[i].title.toLowerCase().includes(search)) {
            htmls.push({
                id: posts[i].id,
                linkHtml: posts[i].linkHtml,
                title: posts[i].title,
                mainhead: posts[i].mainhead
            });
        }
    }
    console.log(htmls)

    let listHtml = htmls.map(function (html) {
        return `
        <div class="container--author">
            <div class="author--imgage"><img src="../img/avatar.jpg" /></div>
                <span class="date">Nov 19,2020</span>
            </div>
        <div class="container--infor">
            <a href="${html.linkHtml}">
                <div class="container--infor__head">
                    ${html.title}
                </div>
                <div class="container--infor__body">
                    ${html.mainhead}
                </div>
            </a>
            <div class="line"></div>
            <div class="container--infor__foot">
                <div class="foot--left">
                    <div><i class="far fa-eye"></i>
                        <p>0</p>
                    </div>
                        <a href=""${html.linkHtml}">
                            <div class="social--comment"><i class="far fa-comment-alt"></i>
                                <p>0</p>
                            </div>
                        </a>
                    </div>
                <div class="social--love"><i class="far fa-heart"></i></div>
            </div>
        </div>`;
    });
    searchBlock.innerHTML = listHtml.join('');

}




