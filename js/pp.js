$(document).ready(function () {
  // fullpage
  $("#fullpage").fullpage({
    sectionsColor: ["cornsilk", "#fff", "#7BAABE"],
    anchors: ["sec1", "sec2", "sec3"],
    menu: "#menu",
    scrollingSpeed: 1000,
    onLeave: function (origin, destination, direction) {
      // 빠른전환으로 이벤트중복시 fullpage와 swiper전환시점 분리막기
      $("#fullpage").on("scroll touchmove mousewheel", function (event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
      });
      swiper.mousewheel.disable();
    },
    afterLoad: function (anchorLink, index) {
      // 전환이 끝난후 이벤트풀기
      $("#fullpage").off("scroll mousewheel");
      if (!$(".fp-completely .swiper-wrapper").length > 0)
        $("#fullpage").off("touchmove"); // 모바일분기
      if (swiper) swiper.mousewheel.enable();
      // 슬라이드 섹션을 벗어나면 휠풀어주기
    },
  });

  // swiper
  var length = $(".sec2 .swiper-slide").length;
  var swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    spaceBetween: 0,
    freeMode: false,
    speed: 1000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    mousewheel: true,
    on: {
      slideChange: function () {
        var idx = this.activeIndex;
        // 처음과 마지막 슬라이드가 아닐경우 fullpage전환 막기
        if (this.activeIndex != 0 && idx != length)
          $.fn.fullpage.setAllowScrolling(false);
        if (length == 2 && idx == 0) $.fn.fullpage.setAllowScrolling(false); //슬라이드가 2개밖에 없을때
      },
      slideChangeTransitionEnd: function () {
        var idx = this.activeIndex;
        // 처음과 마지막 슬라이드일 경우 fullpage전환 풀기
        if (idx == 0 || idx >= length - 1)
          $.fn.fullpage.setAllowScrolling(true);
      },
      touchMove: function (e) {
        var startY = e.touches.startY;
        setTimeout(function () {
          if (startY > e.touches.currentY) swiper.slideNext();
          else swiper.slidePrev();
        }, 100);
      },
    },
  });
});
let photo = document.querySelectorAll(".pro2 > img")[0];
let i = 1;
function slid() {
  photo.setAttribute("src", `../images/ch${i}.png`);
  i++;
  if (i > 2) i = 1;
}
let interval = setInterval(slid, 1000);
photo.onmouseenter = function () {
  clearInterval(interval);
};
photo.onmouseleave = function () {
  interval = setInterval(slid, 1000);
};
AOS.init({
  duration: 400, //기본400
  easing: "ease-in-out-quad",
  offset: 120, //기본120스크롤에 얼마나 반응할지를 설정 해당요소가 스크롤링이
  //50픽셀이상 진행될때 애니메이션이 시작되도록 지정(화면 아래에서부터의 거리)
  once: false,
  delay: 500,
});
