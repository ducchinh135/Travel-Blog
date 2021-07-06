// let kichthuoc = document.getElementsByClassName("chuyen_slide")[0].clientWidth;
// let chuyenslide = document.getElementsByClassName("chuyen_slide")[0];
// let icon = document.getElementById("icon");
// let item1 = document.getElementById("return");
// let Timkiem = document.getElementsByClassName("short");
// let Select = document.getElementById("Select");

// let listvideo = [
//     {

//         title: "Beach",
//         categories: "Extreme",
//         url: `
//             <div>
//             <iframe iframe style="box-shadow: rgba(28, 28, 29, 0.2) 3px 3px 3px 3px;" width="306" height="172"
//             src="https://www.youtube.com/embed/DIgv-e18OzA" title="YouTube video player" frameborder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowfullscreen ></iframe>        
//             </div>`,

//     },
//     {
//         title: "California",
//         categories: "Extreme",
//         url: `
//         <div>
//         <iframe style=" margin-left: 10px;box-shadow: rgba(28, 28, 29, 0.2) 3px 3px 3px 3px;"
//         width="306" height="172" src="https://www.youtube.com/embed/Qmi-Xwq-MEc"
//         title="YouTube video player" frameborder="0"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//         allowfullscreen></iframe>
//         </div> `,
//     },
//     {
//         title: "Camp",
//         categories: "Travel",
//         url: `
//         <div>
//         <iframe width="306" height="172" src="https://www.youtube.com/embed/1357p2xwNN8" style="opacity: 1; margin-left: 10px;box-shadow: rgba(28, 28, 29, 0.2) 3px 3px 3px 3px; title="YouTube video player" 
//         frameborder="0" allow="accelerometer; autoplay;
//          clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//         </div>`,
//     },
//     {
//         title: "Car",
//         categories: "Travel",
//         url: `
//         <div>
//         <iframe width="306" height="172"  style=" box-shadow: rgba(28, 28, 29, 0.2) 3px 3px 3px 3px;" src="https://www.youtube.com/embed/HFKW7zx93Tc"  title="YouTube video player"
//          frameborder="0" allow="accelerometer; autoplay; 
//         clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//         </div>`,

//     },
//     {
//         title: "HaGiang",
//         categories: "Travel",
//         url:
//             `
//          <div>
//         <iframe width="306" height="172" src="https://www.youtube.com/embed/1Wl0w0cw580" style="box-shadow: rgba(28, 28, 29, 0.2) 3px 3px 3px 3px;margin-left:10px;"  title="YouTube video player" frameborder="0"
//          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//          </div>
//          `
//     },
//     {
//         title: "TamDao",
//         categories: "Travel",
//         url: `
//    <div>

//         <iframe width="306" height="172" src="https://www.youtube.com/embed/EWHzwQMXfcQ" style="box-shadow: rgba(28, 28, 29, 0.2) 3px 3px 3px 3px;margin-left:10px;"
//          title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write;
//          encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//          </div>
//         `

//     }
// ];

// function render(listvideo) {
//     let strVideoHTML = "";
//     for (let i = 0; i < listvideo.length; i++) {
//         let videoHTML = listvideo[i].url;
//         strVideoHTML += videoHTML;

//     }
//     // console.log(strVideoHTML);
//     document.getElementsByClassName("chuyen_slide")[0].innerHTML = strVideoHTML;
// }
// render(listvideo)

// let img = chuyenslide.getElementsByTagName("imgiframe");
// let max = kichthuoc * img.length;
// max -= kichthuoc;
// let chuyen = 0;
// let page = 1;

// function changePage() {
//     if (page === 1) {
//         page++;
//         chuyenslide.style.marginLeft = "-950px";
//         icon.style.transform = 'rotate(180deg)';
//         icon.style.transition = '0.2s';
//     } else {
//         page--;
//         chuyenslide.style.marginLeft = "0px";
//         icon.style.transform = 'rotate(0deg)';
//         icon.style.transition = '0.2s';
//     }
// }
// function not_search() {
//     chuyenslide.style.opacity = 1;
//     Select.style.opacity = 1;
//     document.getElementById("list_search").style.display = "none";

// }
// function change() {
//     let text_search = document.getElementById("ser").value;
//     console.log(text_search);
//     let import_videos = [];
//     for (let i = 0; i < listvideo.length; i++) {
//         if (listvideo[i].title.toLowerCase().trim().includes(text_search.toLowerCase().trim())) {
//             import_videos.push(listvideo[i]);
//             render(import_videos);
//         }

//     }
// }
// function open_Extreme() {
//     let selectvideo = [];
//     for (let i = 0; i < listvideo.length; i++) {
//         if (listvideo[i].categories == "Extreme") {
//             selectvideo.push(listvideo[i]);
//             render(selectvideo);
//         }
//         else if(listvideo[i].categories=="Travel") {
//             render(import_videos);
//         }
//     }


// }

// function playVideo() {
//     document.getElementById("hiddenVideo").style.overflow = "hidden";
// }

