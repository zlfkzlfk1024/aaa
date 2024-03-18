$(function () {
  $(".menu li, .lnb").hover(
    function () {
      let i = $(this).index();
      console.log(i);
      let ht = $(".sub").eq(i).height();
      console.log(ht);
      $(".lnb").height(0).css("opacity", "0");
      $(".lnb").eq(i).height(ht).css("opacity", "1");
    },
    function () {
      $(".lnb").height(0);
    }
  );
  $(".lnb").hover(
    function () {
      let i = $(this).index();
      $("header .menu li").eq(i).find("a").addClass("on");
    },
    function () {
      $("header .menu li a").removeClass("on");
    }
  );
  $(".slider>div").eq(0).css("opacity", "1");
  $(".btnCont li")
    .eq(0)
    .css("opacity", "1")
    .css("transform", "translateY(-37px)");
  $(".btnCont li a").eq(0).css("opacity", "1");
  $(".btnCont li").hover(function () {
    let i = $(this).index();
    $(".slider>div").css("opacity", "0");
    $(".btnCont li").css("opacity", "0.5").css("transform", "translateY(0)");
    $(".btnCont li a").css("opacity", "0");
    $(".slider>div").eq(i).css("opacity", "1");
    $(".btnCont li")
      .eq(i)
      .css("opacity", "1")
      .css("transform", "translateY(-37px)");
    $(".btnCont li a").eq(i).css("opacity", "1");
  });
});
