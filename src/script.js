// Mobile navbar hamgurger toggle

let menu = document.getElementById("hamburgertoggle");
let ham =  document.getElementById("btn");

ham.addEventListener('click', () => {
    menu.classList.toggle('activated');
})

// Socials follower count varibles

let x =document.getElementById("igfollowercount")
x.innerHTML = " 850 ";
// let y =document.getElementById("ytfollowercount")
// y.innerHTML = " 10 ";
// let z =document.getElementById("ttfollowercount")
// z.innerHTML = " 10 ";

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

// Dynamic welcome text on hello card

var greetings = [
    "Hello There 👋",
    "Ni Sa Bula 🤝",
    "Namaste 🙏",
    "Asalamu Alaikum 🌙"
]

var randnumber = Math.floor(Math.random() * (greetings.length));
document.getElementById("hellotext").innerHTML = greetings[randnumber];


function close() {
    // document.querySelector(".hello").style.opacity = "0";
    // document.querySelector(".hello").style.visibility = "hidden";
    console.log ("close");
}

function myFunction() {
    document.querySelector(".hello").style.opacity = "0";
    document.querySelector(".hello").style.visibility = "hidden";
}