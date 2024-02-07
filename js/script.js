"use strict"
// hamburger-menu
let closeX = document.querySelector(".close");

let lines = document.querySelector(".menu-open");

let sideMenu = document.querySelector("#sidemenu");

lines.addEventListener("click", () => {
    sideMenu.style.left = "0"
})

closeX.addEventListener("click", () => {
    sideMenu.style.left = "-200px"
});


// hamburger-menu

// animation
document.addEventListener('scroll', function () {
    let sections = document.querySelectorAll('.slide div');

    sections.forEach(function (item) {
        if (item.getBoundingClientRect().top <= window.innerHeight - 200) {
            if (item.className === 'left') {
                item.classList.add('animate__animated', 'animate__backInDown');
            } else if (item.className === 'right') {
                item.classList.add('animate__animated', 'animate__backInDown');
            } else {
                item.classList.add('animate__animated', 'animate__fadeInDown');
            }

            item.style.opacity = 1;
        }

        if (item.getBoundingClientRect().top >= window.innerHeight) {
            item.classList.remove('animate__animated', 'animate__fadeInDown');
            item.style.opacity = 0;
        }
    });
});

// animation