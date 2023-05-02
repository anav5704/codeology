// Mobile navbar hamgurger toggle

let menu = document.getElementById("hamburgertoggle");
let ham =  document.getElementById("btn");

ham.addEventListener('click', () => {
    menu.classList.toggle('activated');
})

// Socials follower count varibles

let x =document.getElementById("igfollowercount")
x.innerHTML = " 1500 ";

// Auto Change Year for Copyright

const date = new Date();
document.getElementById( "year" ).innerHTML = date.getFullYear();

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

// Dynamic welcome quotes for loading screen

var quotes = [
    "\"Everyone can make a choice, but not everyone can make the right choice.\" <br> <p>Jasveen Singh</p>",
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
        var timeout = 2500; setTimeout ("document.querySelector('.helloholder').style.opacity = '1'", timeout);
        var timeout = 2500; setTimeout ("document.querySelector('.helloholder').style.pointerEvents = 'all'", timeout);
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

var Freebie = "http://localhost:8080/Freebie.zip";

let sub = document.querySelector(".sub")
const scriptURL = 'https://script.google.com/macros/s/AKfycbwjpN5B3DIR_aaSdXKRiX-k5iL1s6ziNZpi5s4PLDe6XWm3IbyS-SWn2T-8tXgb5Pk/exec'
const form = document.forms['submit-to-google-sheet']
let sending = document.querySelector(".prepreloader");

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        console.log("sent");
        window.open(Freebie, '_blank');
        closediv()
        form.reset();
    }).catch(error => console.error('Error!', error.message));
})

function sent() {
    sending.style.opacity = "1";
    var timeout = 5000; setTimeout ("sending.style.opacity = '0'", timeout);
    setTimeout(() => {
        sub.setAttribute("disabled", null);
    }, 10);
    setTimeout(() => {
        sub.removeAttribute("disabled");
    }, 5000);
}

// Code for quiz - check if answer is correct or nah onclick

// const parentElements = document.querySelectorAll(".quiz");
// parentElements.forEach(function(parentElement) {
//   const allChildren = parentElement.querySelectorAll("button");

//   allChildren.forEach(function (child) {
//     child.addEventListener('click', function() {
//       if (child.hasAttribute('id') ) {
//         child.style.border = "2px solid lime";
//         console.log("click");
//       } else {
//         child.style.border = "2px solid red";
//         console.log("click");
//       }
//     });
//   });
// });

let score1 = 0; // score for quiz 1
let score2 = 0; // score for quiz 2
let score3 = 0; // score for quiz 3

let result1 = document.getElementById("sc1");
let comment1 = document.getElementById("comment1");
let result2 = document.getElementById("sc2");
let result3 = document.getElementById("sc3");


const incorrectPenalty = 1;

const quiz1Elements = document.querySelectorAll("#quiz1"); // select elements for quiz 1
const quiz2Elements = document.querySelectorAll("#quiz2"); // select elements for quiz 2
const quiz3Elements = document.querySelectorAll("#quiz3"); // select elements for quiz 3

quiz1Elements.forEach(function(parentElement) { // loop through quiz 1 elements
  const allChildren = parentElement.querySelectorAll("button");

  allChildren.forEach(function (child) {
    child.addEventListener('click', function() {
      if (child.hasAttribute('id') ) {
        child.style.border = "2px solid lime";
        score1 += 1; // increment score for quiz 1 if answer is correct
      } else {
        child.style.border = "2px solid red";
        score1 = Math.max(0, score1 - incorrectPenalty);
      }
      if ( score1 == 0) {
        comment1.innerHTML = "Rome wasn't built in a day, better luck next time my friend.";
      }

      else if (score1 < 0 || score1 <= 4){
        comment1.innerHTML = "There is still room for improvement. Keep pushing!";
      }

      else if (score1 < 5 || score1 <= 9){
        comment1.innerHTML = "You performed really well. Continue learning more!";
      }

      else {
            comment1.innerHTML = "Perfectoin, as expected from  a Codeology.net user!";
      }
      result1.innerHTML = score1;
      console.log("Score for Quiz 1: " + score1); // log current score for quiz 1
    });
  });
});



quiz2Elements.forEach(function(parentElement) { // loop through quiz 2 elements
  const allChildren = parentElement.querySelectorAll("button");

  allChildren.forEach(function (child) {
    child.addEventListener('click', function() {
      if (child.hasAttribute('id') ) {
        child.style.border = "2px solid lime";
        score2 += 1; // increment score for quiz 2 if answer is correct
      } else {
        child.style.border = "2px solid red";
        score2 = Math.max(0, score2 - incorrectPenalty);
      }
      if ( score2 == 0) {
        comment2.innerHTML = "Rome wasn't built in a day, better luck next time my friend.";
      }

      else if (score2 < 0 || score2 <= 4){
        comment2.innerHTML = "There is still room for improvement. Keep pushing!";
      }

      else if (score2 < 5 || score2 <= 9){
        comment2.innerHTML = "You performed really well. Continue learning more!";
      }

      else {
            comment2.innerHTML = "Perfectoin, as expected from  a Codeology.net user!";
      }
      result2.innerHTML = score2;
      console.log("Score for Quiz 2: " + score2); // log current score for quiz 2
    });
  });
});

quiz3Elements.forEach(function(parentElement) { // loop through quiz 3 elements
  const allChildren = parentElement.querySelectorAll("button");

  allChildren.forEach(function (child) {
    child.addEventListener('click', function() {
      if (child.hasAttribute('id') ) {
        child.style.border = "2px solid lime";
        score3 += 1; // increment score for quiz 3 if answer is correct
      } else {
        child.style.border = "2px solid red";
        score3 = Math.max(0, score3 - incorrectPenalty);
      }
      if ( score3 == 0) {
        comment3.innerHTML = "Rome wasn't built in a day, better luck next time my friend.";
      }

      else if (score3 < 0 || score3 <= 4){
        comment3.innerHTML = "There is still room for improvement. Keep pushing!";
      }

      else if (score3 < 5 || score3 <= 9){
        comment3.innerHTML = "You performed really well. Continue learning more!";
      }

      else {
            comment3.innerHTML = "Perfectoin, as expected from  a Codeology.net user!";
      }
      result3.innerHTML = score3;
      console.log("Score for Quiz 3: " + score3); // log current score for quiz 3
    });
  });
});









