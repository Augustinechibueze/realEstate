
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



var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop:true,
    autoplay:true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });