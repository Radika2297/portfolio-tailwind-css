// Fix-nav

window.onscroll = function () {
  const header = document.querySelector('header')
  const fixedNav = header.offsetTop
  const toTOp = document.querySelector('#to-top')



  if(window.scrollY > fixedNav) {
    header.classList.add('navbar-fixed')
    toTOp.classList.remove('hidden')
    toTOp.classList.add('flex')
  } else{
    toTOp.classList.add('hidden')
    toTOp.classList.remove('flex')
    header.classList.remove('navbar-fixed')
  }
}



// Hamburger

const hamburger = document.querySelector('#hamburger')
const navMenu = document.querySelector('#nav-menu')
hamburger.addEventListener('click', function(){
  hamburger.classList.toggle('hamburger-active')
  navMenu.classList.toggle('hidden')
})


// klik di luar hamburger

window.addEventListener('click', function(e){
  if ( e.target != hamburger && e.target != navMenu){
    hamburger.classList.remove('hamburger-active')
    navMenu.classList.add('hidden')
  }
})


// Darkmode Toggle

const darkToggle = document.querySelector('#dark-toggle')
const html = document.querySelector('html')

darkToggle.addEventListener('click', function (){
  if(darkToggle.checked) {
    html.classList.add('dark')
    localStorage.theme = 'dark'
  } else{
    html.classList.remove('dark')
    localStorage.theme = 'light'
  }
})


if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  darkToggle.checked = true
} else {
  darkToggle.checked = false
}

