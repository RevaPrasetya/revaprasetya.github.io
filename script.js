gsap.to('.comic-bg', {rotate: 360, duration: 120})

// var tl = gsap.timeline({
//     scrollTrigger:{
//         trigger: '.comic-section',
//         start: 'top 5%',
//         end: 'top 80%',
//         pin: true,
//         toggleActions: "restart restart restart restart",
//         immediateRender: false,
//     },
// });


// tl
// // .to('.comic-1', 0.2, {autoAlpha: 0})
// // .to('.comic-1', 0.2, {autoAlpha: 1, duration: 10})
// // .to('.comic-1', 0.2, {autoAlpha: 0})
// // .to('.comic-2', 0.2, {autoAlpha: 0})
// // .to('.comic-2', 0.2, {autoAlpha: 1, duration: 10})
// // .to('.comic-2', 0.2, {autoAlpha: 0})

$(document).ready(function () {
  $(".slide-container-mpls").slick({
      vertical: true,
      slidesToShow: 3,
      variableHeight: true,
      verticalSwiping: true,
      autoplay: true,
      autoplaySpeed: 4000,
      nextArrow: '.mpls-next-btn',
      prevArrow: '.mpls-prev-btn',
      responsive: [
        {
          breakpoint: 1000,
          settings:{
            slidesToShow: 4
          } 
        },
        {
          breakpoint: 800,
          settings:{
            slidesToShow: 6
          } 
        },
        {
          breakpoint: 600,
          settings:{
            slidesToShow: 6
          } 
        }
      ]
  })
})

$(document).ready(function () {
  $(".slide-container-stc").slick({
      vertical: true,
      slidesToShow: 3,
      variableHeight: true,
      verticalSwiping: true,
      autoplay: true,
      autoplaySpeed: 4000,
      nextArrow: '.stc-next-btn',
      prevArrow: '.stc-prev-btn',
      responsive: [
        {
          breakpoint: 1000,
          settings:{
            slidesToShow: 4
          } 
        },
        {
          breakpoint: 800,
          settings:{
            slidesToShow: 6
          } 
        },
        {
          breakpoint: 600,
          settings:{
            slidesToShow: 6
          } 
        }
      ]
  })
})

$(document).ready(function () {
  $(".slide-container-hut").slick({
      vertical: true,
      slidesToShow: 3,
      adaptiveHeight: true,
      verticalSwiping: true,
      autoplay: true,
      autoplaySpeed: 4000,
      nextArrow: '.hut-next-btn',
      prevArrow: '.hut-prev-btn',
      responsive: [
        {
          breakpoint: 1000,
          settings:{
            slidesToShow: 4
          } 
        },
        {
          breakpoint: 800,
          settings:{
            slidesToShow: 6
          } 
        },
        {
          breakpoint: 600,
          settings:{
            slidesToShow: 6
          } 
        }
      ]
  })
})
function daftarSekarang(){
  document.getElementById('overlay-daftar').classList.toggle('active');
  document.getElementById('daftar').classList.toggle('active');
  document.getElementById('header').classList.toggle('hide');
}

function contactPerson(){
  document.getElementById('overlay-contact').classList.toggle('active');
  document.getElementById('contact').classList.toggle('active');
  document.getElementById('header').classList.toggle('hide');
}