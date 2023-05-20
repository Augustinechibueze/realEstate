// <!-- Initialize Swiper -->
  const progressCircle = document.querySelector(".autoplay-progress svg");
  const progressContent = document.querySelector(".autoplay-progress span");
  var swiper = new Swiper(".mySwiper", {
    // spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false
    },
    loop: true,    
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    on: {
      autoplayTimeLeft(s, time, progress) {
        progressCircle.style.setProperty("--progress", 1 - progress);
        progressContent.textContent = `${Math.ceil(time / 1000)}s`;
      }
    }
  });

const open_icon = document.querySelector('.open-icon')
const close_icon = document.querySelector('.close-icon')
const nav = document.querySelector('nav')
const menu_slider = document.querySelector('.menu-slider')
const header  = document.querySelector('header')

const hideMenu = ()=>{
  nav.style.cssText = `right:-700px`
  menu_slider.style.cssText = `left:-700px;`
}
close_icon.addEventListener('click',hideMenu)

const showMenu = ()=>{
  nav.style.cssText = `right:0`
  menu_slider.style.cssText = `left:0;`
}
open_icon.addEventListener('click',showMenu)

window.addEventListener('scroll',()=>{
  const pexells = window.scrollY
  if(pexells>50){
    header.style.cssText = `
    position:fixed;
    top:0;
    left:0;
    z-index:999;
    backdrop-filter: blur(10px)
    `
  }else{
    header.style.cssText = `
    position:unset;
    backdrop-filter:unset
    `
  }
})

