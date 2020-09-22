const btn = document.getElementById("menu-btn");
const ul = document.getElementById("navmenu");
ul.style.right = "-100%"

btn.onclick = function() {

    if (ul.style.right == "-100%") {
        ul.style.right = "0";

    } else {
        ul.style.right = " -100% "

    }

}


AOS.init({
    duration: 600,
    once: true
});


// var menuBtn = document.getElementById("menu-btn");
// var navMenu = document.getElementById("navmenu")


// navMenu.style.right = "-80%";

// menuBtn.onclick = function() {
//     if (navMenu.style.right == "-80%") {
//         navMenu.style.right = "0"

//     } else {
//         navMenu.style.right = "-80%";

//     }
// }