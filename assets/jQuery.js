//pc fixMenu//
$(document).ready(function () {
  let start_position = 0,
    window_position;
  const header = $("#fixNav");
  var firstSectionHeight = $("section").outerHeight();
  $(window).scroll(function () {
    window_position = $(window).scrollTop();
    const headerHeight = header.outerHeight();
    if (window_position <= firstSectionHeight) {
      header.css("top", "0");
    } else {
      header.css("top", -headerHeight + "px");
    }
    start_position = window_position;
  });
  $(window).trigger("scroll");
});

//p-logo
$(document).ready(function () {
  let start_position = 0,
    window_position;
  const logo = $(".p-logo");
  var secondSectionHeight = $(".p-keyVisual__topImage").outerHeight();
  $(window).scroll(function () {
    window_position = $(window).scrollTop();
    const logoHeight = logo.outerHeight();
    if (window_position <= secondSectionHeight) {
      logo.css("top", "0");
    } else {
      logo.css("top", -logoHeight + "100px");
    }
    start_position = window_position;
  });
  $(window).trigger("scroll");
});

//hamburger
$(function () {
  $(".hamBtn").on("click", function () {
    $(".hamBtn").toggleClass("close");
    $("nav").fadeToggle(500);
  });
});

$(function () {
  $(".ham_fixBtn").on("click", function () {
    $(".ham_fixBtn").toggleClass("close");
    $("nav").fadeToggle(500);
  });
});

//img next
const slide = document.getElementById("slide");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const indicator = document.getElementById("indicator");
const lists = document.querySelectorAll(".list");
const totalSlides = lists.length;
let count = 0;
function updateListBackground() {
  for (let i = 0; i < lists.length; i++) {
    lists[i].style.backgroundColor =
      i === count % totalSlides ? "#704639" : "transparent";
  }
}
function nextClick() {
  slide.classList.remove(`slide${(count % totalSlides) + 1}`);
  count++;
  slide.classList.add(`slide${(count % totalSlides) + 1}`);
  updateListBackground();
}
function prevClick() {
  slide.classList.remove(`slide${(count % totalSlides) + 1}`);
  count--;
  if (count < 0) count = totalSlides - 1;
  slide.classList.add(`slide${(count % totalSlides) + 1}`);
  updateListBackground();
}
next.addEventListener("click", () => {
  nextClick();
});
prev.addEventListener("click", () => {
  prevClick();
});
indicator.addEventListener("click", (event) => {
  if (event.target.classList.contains("list")) {
    const index = Array.from(lists).indexOf(event.target);
    slide.classList.remove(`slide${(count % totalSlides) + 1}`);
    count = index;
    slide.classList.add(`slide${(count % totalSlides) + 1}`);
    updateListBackground();
    startAutoPlay();
  }
});

//ふわっと表示
$(function () {
  $(window).scroll(function () {
    $(".p-about,.p-goods,.p-store").each(function () {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 200) {
        $(this).addClass("active");
      }
    });
  });
});

//footer list
$(function () {
  $(".button1").on("click", function () {
    $(this).parents(".accordion").find(".content").slideToggle(200);
    $(this).toggleClass("open");
  });
});

//mail
const form = document.getElementById("form");
const button = document.getElementById("button");

form.addEventListener("input", update);
form.addEventListener("change", update);

function update() {
  const isRequired = form.checkValidity();

  if (isRequired) {
    button.disabled = false;
    button.style.opacity = 1;
    button.style.cursor = "pointer";
    return;
  }
}

//フォーム再送信
$(function () {
  if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
  }
});
