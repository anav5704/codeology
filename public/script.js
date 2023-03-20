// Mobile navbar hamgurger toggle

let menu = document.getElementById("hamburgertoggle");
let ham =  document.getElementById("btn");

ham.addEventListener('click', () => {
    menu.classList.toggle('activated');
})

// Socials follower count varibles

let x =document.getElementById("igfollowercount")
x.innerHTML = " 850 ";
let y =document.getElementById("ytfollowercount")
y.innerHTML = " 10 ";
let z =document.getElementById("ttfollowercount")
z.innerHTML = " 10 ";

// Navbar hide on scroll behaviour

nav = document.querySelector(".navholder");
let LastScrollY = window.scrollY;

window.addEventListener ("scroll", () => {
    if (LastScrollY < window.scrollY) {
        nav.style.top= "-10vh";
    }
    else {
        nav.style.top= "0";
    }
    LastScrollY = window.scrollY;
})

// Hide mobile menu on area click

let modal = document.querySelector('.menus');
let mobileham = document.querySelector(".ham4");
window.addEventListener('click', outsideClick);
function outsideClick(e) {
    if (e.target == modal) {
        menu.classList.toggle('activated');
        mobileham.classList.toggle('active');
}}

