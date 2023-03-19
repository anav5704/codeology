let menu = document.getElementById("hamburgertoggle");
let ham =  document.getElementById("btn");

ham.addEventListener('click', () => {
    menu.classList.toggle('activated');
})

let x =document.getElementById("followercount")
x.innerHTML = " 850 ";

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

