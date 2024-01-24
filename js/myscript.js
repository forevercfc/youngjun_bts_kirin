$(function () {
  AOS.init();
  const loading = $(".loading");
  $(window).on("load", function () {
    loading.remove();
  });
  //로딩 이후에 세로 스크롤 다시 생기도록 설정
  $(window).on("pageshow", function () {
    $("html,body").css({ overflow: "visible" });

    // $("html,body").scrollTop(50000);
  });
  //animatescroll plugin 동작 구문
  $(".navbar li:nth-child(1) a").click(function () {
    $("#top").animatescroll({ scrollSpeed: 1000, easing: "easeInQuad" });
  });
  $(".navbar li:nth-child(2) a").click(function () {
    $("#birth").animatescroll({ scrollSpeed: 1000, easing: "easeInQuad" });
  });
  $(".navbar li:nth-child(3) a").click(function () {
    $("#secret").animatescroll({ scrollSpeed: 1000, easing: "easeInQuad" });
  });
  $(".navbar li:nth-child(4) a").click(function () {
    $("#products").animatescroll({ scrollSpeed: 1000, easing: "easeInQuad" });
  });
  $(".navbar li:nth-child(5) a").click(function () {
    $("#cf").animatescroll({ scrollSpeed: 1000, easing: "easeInQuad" });
  });
  $(".navbar li:nth-child(6) a").click(function () {
    $("#garden").animatescroll({ scrollSpeed: 1000, easing: "easeInQuad" });
  });
});
