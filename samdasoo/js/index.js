let ani1 = gsap.timeline();
ani1.to(".t2", {
  autoAlpha: 1,
});
ScrollTrigger.create({
  animation: ani1,
  trigger: ".img1 img:last-child",
  start: "top top",
  end: "+=800",
  scrub: true,
});
let ani2 = gsap.timeline();
ani2.to(".t3", {
  autoAlpha: 1,
});
ScrollTrigger.create({
  animation: ani2,
  trigger: ".img2 img:last-child",
  start: "top top",
  end: "+=800",
  scrub: true,
});
ani2.to(".sam", {
  autoAlpha: 0,
});
ScrollTrigger.create({
  animation: ani2,
  trigger: ".wrap",
  start: "top top",
  end: ".section3",
  scrub: true,
});
let ani4 = gsap.timeline();
ani4.to(".lang p", {
  color: "#fff",
});
ScrollTrigger.create({
  animation: ani4,
  trigger: ".section2",
  start: "top top",
  end: ".section3",
  scrub: true,
});
let ani5 = gsap.timeline();
ani5.to(".lang p", {
  color: "#000",
});
ScrollTrigger.create({
  animation: ani5,
  trigger: ".section4",
  start: "top top",
  end: "footer",
  scrub: true,
});
let ani6 = gsap.timeline();
ani6.to(".section4 .bg .txt", {
  top: 300,
  autoAlpha: 1,
});
ScrollTrigger.create({
  animation: ani6,
  trigger: ".img3 img:last-child",
  start: "top top",
  end: "+=500",
  scrub: true,
});
