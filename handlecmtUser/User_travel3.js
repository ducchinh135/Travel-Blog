let commentApi = "https://travel-blog-mindx.herokuapp.com/post_travel/3";
import Comment from "../js/Comments.js"
alert("Vào đc rồi");
function start() {
    getCmts(renderCmts);

    getCmts(handleCreatCmt);
}
start();

function getCmts(callback) {
    fetch(commentApi)
        .then(function (reponsive) {
            return reponsive.json();
        })
        .then(callback)
}


function renderCmts(post) {
    let cmtBlock = document.querySelector(".inforBlog--userComment");
    let result = JSON.parse(localStorage.getItem("current-user"));
    let listCmts = post.comment.reverse();
    console.log(listCmts)

    let htmls = listCmts.map(function (comment) {

        return `
        <div class="inforBlog--userComment__body">
            <div class="author--imgage"><img src="../img/avatar.jpg" /></div>
            <div class="inforBlog--userComment__content">
                <span class="comment--name" style="font-size: 20px;">${result.name}</span>
                <div class="inforBlog--userComment--date" id="dateCmt" style="font-size: 14px;">${comment.date}</div>
                <br />
                <p id="contentCmt">${comment.content}</p>
            </div>
            <div id="delete" onclick="handleDeleteCmts(${comment.id})"><i class="fas fa-plus"></i></div>
        </div>
        `;
    });
    cmtBlock.innerHTML = htmls.join('');

}

function handleCreatCmt(post) {
    let creatBtn = document.querySelector("#creatCmt");

    creatBtn.onclick = function () {
        let content = document.querySelector("#txtComment").value;
        let date = new Date().toISOString()
        let listID = [];
        for (let i in post.comment) {
            listID.push(Number(i))
        }
        let id = listID.length + 1;
        console.log(listID.length);
        let formData = new Comment(id, date, content)
        console.log(formData)
        let formCmt = {
            id: formData._id,
            date: formData._date,
            content: formData._content
        }

        post.comment.push(formCmt);


        fetch(commentApi, {
            method: 'PUT', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...post }),
        })
            .then(response => response.json())
            .then(data => {
                getCmts(renderCmts);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

        document.querySelector("#txtComment").value = "";
    }
}

function handleDeleteCmts(id) {
    let deleteID = id;
    getCmts(function (post) {
        post.comment.splice((id - 1), 1)

        for (let i = 0; i < post.comment.length; i++) {
            post.comment[i].id = post.comment.length - (post.comment.length - (i + 1))
        }

        fetch(commentApi, {
            method: 'PUT', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...post }),
        })
            .then(response => response.json())
            .then(data => {
                getCmts(renderCmts);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    })
}