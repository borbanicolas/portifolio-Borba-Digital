menu = document.querySelector('.menu-hamburguer')
hamburguer = document.querySelector('.hamburguer')
header = document.querySelector('.menu-mobile')
info = document.querySelector('.banner__info')
menu.addEventListener('click', functionActive)

function functionActive(){
      
        menu.classList.toggle('menu-active')
        header.classList.toggle('menu-mobile-activy')
        info.classList.toggle('info-active')
}