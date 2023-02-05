const divHomeEl = document.querySelector(".home");
const divAboutEl = document.querySelector(".about");
const divServiceEl = document.querySelector(".service");
const divImgSlideEl = document.querySelector(".imgslide");

const divHomeY = divHomeEl.getBoundingClientRect().y;
const divAboutY = divAboutEl.getBoundingClientRect().y;
const divServiceY = divServiceEl.getBoundingClientRect().y;
const divImgSlideY = divImgSlideEl.getBoundingClientRect().y;

const moveHomeEl = document.querySelector(".move-home");
const moveAboutEl = document.querySelector(".move-about");
const moveServiceEl = document.querySelector(".move-service");
const moveImgSlideEl = document.querySelector(".move-imgslide");

moveHomeEl.addEventListener("click", () => {
  console.log("zmfflr");
  window.scrollTo({
    left: 0,
    top: divHomeY - 101,
    behavior: "smooth",
  });
});
moveAboutEl.addEventListener("click", () => {
  window.scrollTo({
    left: 0,
    top: divAboutY - 101,
    behavior: "smooth",
  });
});
moveServiceEl.addEventListener("click", () => {
  window.scrollTo({
    left: 0,
    top: divServiceY - 101,
    behavior: "smooth",
  });
});
moveImgSlideEl.addEventListener("click", () => {
  window.scrollTo({
    left: 0,
    top: divImgSlideY - 101,
    behavior: "smooth",
  });
});

const slide = document.querySelector(".img-slide");
const btnpre = document.querySelector(".pre");
const btnnext = document.querySelector(".next");
let currentIndex = 0;

function moveSlide(num) {
  slide.style.left = -num * 500 + "px";
  currentIndex = num;
}

btnpre.addEventListener("click", () => {
  if (currentIndex !== 0) moveSlide(currentIndex - 1);
});

btnnext.addEventListener("click", () => {
  if (currentIndex !== 5 - 1) moveSlide(currentIndex + 1);
});
