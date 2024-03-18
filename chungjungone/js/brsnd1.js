var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper1 = new Swiper(".mySwiper1", {
  slidesPerView: 5,
  //centeredSlides: true,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 4,
  //centeredSlides: true,
  spaceBetween: 0,
  /* pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },*/
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
$(document).on("wheel", function () {
  //console.log(event.wheelDelta);
  let ht = $(this).scrollTop();
  console.log(ht);
  if (event.wheelDelta < 0 && ht <= 100) {
    $(".top").addClass("on");
  } else if (event.wheelDelta > 0 && ht <= 100) {
    $(".top").removeClass("on");
  }
});
let img = gsap.timeline();
img.to(".imgBox > img", {
  scale: 1,
});
let ani1 = gsap.timeline();
ani1.to(".infoBox:first-child h1", {
  top: -30,
  autoAlpha: 1,
});
ScrollTrigger.create({
  animation: ani1,
  trigger: ".imgBox",
  start: "top top",
  end: "+=500",
  //scrub: true,
  //pinSpacing: false,
  //markers: true,
});
let ani2 = gsap.timeline();
ani2
  .to(".box4 h1", {
    top: -30,
    autoAlpha: 1,
  })
  .to(".box4 h3", {
    top: -30,
    autoAlpha: 1,
    duration: 0.5,
  });
ScrollTrigger.create({
  animation: ani2,
  trigger: ".infoBox:nth-child(3)",
  start: "top top",
  end: "+=300",
  //scrub: true,
  // markers: true,
});
let ani3 = gsap.timeline();
ani3.to(".bitit h2", {
  top: -30,
  autoAlpha: 1,
});
ScrollTrigger.create({
  animation: ani3,
  trigger: ".box4 p",
  start: "top top",
  end: "+=100",
  // scrub: true,
  // markers: true,
});
let ani4 = gsap.timeline();
ani4.to(".font h1", {
  top: -30,
  autoAlpha: 1,
});
ScrollTrigger.create({
  animation: ani4,
  trigger: ".color",
  start: "top top",
  end: "+=100",
  //scrub: true,
  //markers: true,
});
let ani5 = gsap.timeline();
ani5.to(".prdt h1", {
  top: -30,
  autoAlpha: 1,
});
ScrollTrigger.create({
  animation: ani5,
  trigger: ".fontinnersub",
  start: "top top",
  end: "+=100",
  //scrub: true,
  //markers: true,
});
let ani6 = gsap.timeline();
ani6.to(".prdtline h1", {
  top: -30,
  autoAlpha: 1,
});
ScrollTrigger.create({
  animation: ani6,
  trigger: ".mySwiper1",
  start: "top top",
  end: "+=100",
  //scrub: true,
  //markers: true,
});
let ani7 = gsap.timeline();
ani7.to(".social h1", {
  top: -30,
  autoAlpha: 1,
});
ScrollTrigger.create({
  animation: ani7,
  trigger: ".list li:last-child",
  start: "top top",
  end: "+=100",
  //scrub: true,
  //markers: true,
});
let site = true;
$(".site .SiteFamily").slideUp(100);
$(".site p").click(function () {
  if (site) {
    $(".site .SiteFamily")
      .slideDown(200)
      .css({ borderTop: "1px solid", borderBottom: "1px solid" });
  } else {
    $(".site .SiteFamily").slideUp(100);
  }
  site = !site;
});
