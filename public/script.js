let menu = document.getElementById("hamburgertoggle");
let ham =  document.getElementById("btn");

ham.addEventListener('click', () => {
    menu.classList.toggle('activated');
})

let x =document.getElementById("followercount")
x.innerHTML = " 715 ";
