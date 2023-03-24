// Mobile navbar hamgurger toggle

let menu = document.getElementById("hamburgertoggle");
let ham =  document.getElementById("btn");

ham.addEventListener('click', () => {
    menu.classList.toggle('activated');
})

// Socials follower count varibles

let x =document.getElementById("igfollowercount")
x.innerHTML = " 900 ";
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
    "\"Eeveryone can make a choice, but not eveyone can make the right choice.\" <br> <p>Jasveen Singh</p>",
    "\"When life hits you, hit back.\" <br> <p> Veer Chandra</p>",
    "\"It's cool to be good at many things, but it's better to be the best at one thing.\" <br> <p> Indeevar Nair</p>"
]

var randnumberr = Math.floor(Math.random() * (quotes.length));
document.getElementById("quotes").innerHTML = quotes[randnumberr];

// Hides welcome card on click

function closediv() {
    document.querySelector(".helloholder").style.display = "none";
    sessionStorage.setItem ('modal','true');
}

// Shoows welcsome card on load and resets on window close

window.addEventListener ('load', () => {
    if (sessionStorage.getItem ('modal') !== 'true') {
        var timeout = 5000; setTimeout ("document.querySelector('.helloholder').style.opacity = '1'", timeout);
        var timeout = 5000; setTimeout ("document.querySelector('.helloholder').style.pointerEvents = 'all'", timeout);
    }
    
    else {
        document.querySelector(".helloholder").style.pointerEvents = "none";
        sessionStorage.setItem ('modal','true');
        console.log ("seen");
    }
})

// 0 f-ing idea how this works but it does. Code for sidebar to stick when it has fully scrolled

let sidebar = document.querySelector (".featured");
let ghost = document.querySelector (".ghost");

window.onscroll = () => {
    let scrollTop = window.scrollY;
    let viewpoortheight = window.innerHeight;
    let contentheight = sidebar.offsetHeight;
    let navheight = nav.offsetHeight;
    let ghostheight = ghost.offsetHeight;
    let big_brain_anav_math_moment = contentheight - viewpoortheight + navheight/2  ;

    if(scrollTop > contentheight - viewpoortheight + navheight + ghostheight) {
        sidebar.style.position  = "sticky";
        sidebar.style.top  = -big_brain_anav_math_moment + "px";
    }
    else{
        sidebar.style.position  = "";
        sidebar.style.top  = " ";
    } 
}

// Email List submissioin form

const scriptURL = 'https://script.google.com/macros/s/AKfycbwjpN5B3DIR_aaSdXKRiX-k5iL1s6ziNZpi5s4PLDe6XWm3IbyS-SWn2T-8tXgb5Pk/exec'
const form = document.forms['submit-to-google-sheet']
let done = document.querySelector(".done");

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        done.style.opacity = '1';
        var timeout = 5000; setTimeout ("done.style.opacity = '0'", timeout);
        form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})
