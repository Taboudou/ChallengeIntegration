$(document).ready(function () {
    // $(".fa-bars").click(function () {
    //   $(".menu").toggleClass("show-menu");
    // });
  
    const btnNavEl = document.querySelector("#menu-button");
    const headerEl = document.querySelector(".header");
  
    btnNavEl.addEventListener("click", function () {
      headerEl.classList.toggle("nav-open");
    });
  
    $(window).on("scroll", function (event) {
      let windowHeight = $(this).height();
      let windowScroll = $(this).scrollTop();
  
      windowScroll > 0
        ? //   ? $("#site-header").css("background-color", "rgba(0, 0, 0, 0.5)")
          //   : $("#site-header").css("background-color", "transparent");
          $("#site-header").addClass("sticky")
        : $("#site-header").removeClass("sticky");
  
      // $("main > section:not(#section1, .visible)").each(function () {
      // let sectionTop = $(this).position().top;
      // let offset = windowHeight - sectionTop + windowScroll;
  
      // if (offset >= windowHeight / 4) {
      //     $(this).css({ opacity: 1, top: 3 }).addClass("visible");
      // }
      // });
    });
  });