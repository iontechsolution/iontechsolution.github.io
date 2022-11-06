$(document).ready(function () {
  const sections = document.querySelectorAll("section");
  const nav = document.querySelectorAll("nav a");
  window.addEventListener("scroll", () => {
    let header = document.querySelector("nav");
    header.classList.toggle(
      "sticky",
      window.scrollY > 0 && !window.screen < 600
    );
  });
  window.onscroll = () => {
    let current = "home";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 130) {
        current = section.getAttribute("id");
      }
      if (pageYOffset >= sectionTop - 500) {
        section.classList.add("is-visible");
      }
    });
    nav.forEach((a) => {
      a.classList.remove("active");
      if (a.classList.contains(current)) {
        a.classList.add("active");
      }
    });
  };
  $(".home").click(function () {
    $("#nav > a.active").removeClass("active");
    $(".home").addClass("active");
    $("html, body").animate(
      {
        scrollTop: $(".container-intro").offset().top - 100,
      },
      500
    );
  });

  $(".aboutus").click(function () {
    $("#nav > a.active").removeClass("active");
    $("#aboutus").addClass("active");
    $("html, body").animate(
      {
        scrollTop: $(".container-about").offset().top - 100,
      },
      500
    );
  });

  $(".services").click(function () {
    $("#nav > a.active").removeClass("active");
    $("#services").addClass("active");
    $("html, body").animate(
      {
        scrollTop: $(".container-services").offset().top - 100,
      },
      500
    );
  });

  $(".contactus").click(function () {
    $("#nav > a.active").removeClass("active");
    $("#contactus").addClass("active");
    $("html, body").animate(
      {
        scrollTop: $(".container-contact").offset().top - 100,
      },
      500
    );
  });
  $(".card-project").on("mouseenter", function (e) {
    (x = e.pageX - $(this).offset().left),
      (y = e.pageY - $(this).offset().top),
      $(this).find("span").css({ top: y, left: x });
  });
  $(".card-project").on("mouseout", function (e) {
    (x = e.pageX - $(this).offset().left),
      (y = e.pageY - $(this).offset().top),
      $(this).find("span").css({ top: y, left: x });
  });
});

function myFunction() {
  var x = document.getElementById("nav");
  // x-=" sticky"
  // x.className += " sticky";
  if (x.className == "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
}
