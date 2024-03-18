$(".menu li, .lnb").hover(
  function () {
    let i = $(this).index();
    console.log(i);
    let ht = $(".sub").eq(i).height();
    console.log(ht);
    $(".lnb").eq(i).height(ht);
  },
  function () {
    $(".lnb").height(0);
  }
);

let ani1 = gsap.timeline();
ani1
  .to(
    ".t1",
    {
      x: -300,
      scale: 1.6,
      autoAlpha: 0,
    },
    "txt"
  )
  .to(
    ".t2",
    {
      x: 300,
      scale: 1.6,
      autoAlpha: 0,
    },
    "txt"
  )
  .to(
    ".aniImg .mainImg",
    {
      scale: 0,
    },
    "txt"
  );
ScrollTrigger.create({
  animation: ani1,
  trigger: ".t1",
  start: "top top",
  end: "+=800",
  scrub: true,
  pinSpacing: false,
});
gsap.utils.toArray(".imgBox").forEach((item) => {
  gsap.to(item, {
    backgroundSize: "100%",
    scrollTrigger: {
      trigger: item,
      scrub: true,
      onEnter: () => {
        gsap.to(item.nextElementSibling, {
          right: 30,
          opacity: 1,
        });
      },
      onEnterBack: () => {
        gsap.to(item.nextElementSibling, {
          right: 30,
          opacity: 1,
        });
      },
      onLeaveBack: () => {
        gsap.to(item.nextElementSibling, {
          right: -20,
          opacity: 0,
        });
      },
    },
  });
});
/*gsap.utils.toArray(".txtBox").forEach((item) => {
  gsap.to(item, {
    right: 30,
    opacity: 1,
    delay: 1,
  });
});*/
/*let ani2 = gsap.timeline();
ani2.to(".imgBox", {
  scale: 1,
});
ScrollTrigger.create({
  animation: ani2,
  trigger: ".imgBox",
  start: "top 50%",
  end: "bottom 100%",
  // markers: true,
  //scrub: true,
});*/
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
