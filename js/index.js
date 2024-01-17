// swiper
var swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 3000,
  },
  loop: true,
});
// burger
const navList = document.querySelector(".nav__list");
const navBurger = document.querySelector(".nav__burger");
navBurger.addEventListener("click", function () {
  navList.classList.toggle("active");
  navBurger.classList.toggle("active");
});
// search
const search = document.querySelector(".search");
const searchBtn = document.querySelector(".header__search");
const clearBtn = document.querySelector(".search__clear");
searchBtn.addEventListener("click", function () {
  search.classList.add("open");
  searchBtn.classList.add("open");
  clearBtn.classList.add("open");
});

clearBtn.addEventListener("click", function () {
  search.classList.remove("open");
  searchBtn.classList.remove("open");
  clearBtn.classList.remove("open");
  document.getElementById("input").value = "";
});
// question
const accordion = document.querySelectorAll("[data-collapse]");
accordion.forEach((question, index) => {
  accordion[index].addEventListener("click", () => {
    question.classList.toggle("active");
  });
});
// TAB
const tabBtn = document.querySelectorAll(".work__btn");
const tabItem = document.querySelectorAll(".tab-content");
tabBtn.forEach(tabClick);
function tabClick(btn) {
  btn.addEventListener("click", function () {
    let currentBtn = btn;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);
    if (!currentBtn.classList.contains("active")) {
      tabBtn.forEach(function (item) {
        item.classList.remove("active");
      });
      tabItem.forEach(function (item) {
        item.classList.remove("active");
      });
      currentBtn.classList.add("active");
      currentTab.classList.add("active");
    }
  });
}
document.querySelector(".work__btn").click();
