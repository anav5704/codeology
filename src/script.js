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

// Dynamic welcome quotes for loading screen

var quotes = [
    "\"Eeveryone can make a choice, but not eveyone can make the right choice.\" <br> <p>- Jasveen Singh.</p>",
    "\"When life hits you, hit back.\" <br> <p> - Veer Chandra.</p>",
    "\"It's cool to be good at many things, but it's better to be the best at one thing.\" <br> <p> - Indeevar Nair.</p>"
]

var randnumberr = Math.floor(Math.random() * (quotes.length));
document.getElementById("quotes").innerHTML = quotes[randnumberr];

// Hides welcome card on click

function closediv() {
    document.querySelector(".helloholder").style.display = "none";
    localStorage.setItem ('modal','true');
}

//Shoows welcsome card on load

window.addEventListener ('load', () => {
    if (localStorage.getItem ('modal') !== 'true') {
    var timeout = 5000; setTimeout ("document.querySelector('.helloholder').style.opacity = '1'", timeout);
    }

    else {
        localStorage.setItem ('modal','true');
        console.log ("seen");
    }
})

// window.addEventListener ('load', () => {
//     var timeout = 5; setTimeout ("document.querySelector('.helloholder').style.opacity = '1'", timeout);
// })