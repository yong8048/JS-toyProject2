const slideEl = document.querySelectorAll(".slide")
const prev = document.querySelector(".prev")
const next = document.querySelector(".next")
const slides = [...slideEl]

console.log(slides)

let count = 0

prev.addEventListener("click",function(){
  if(count>0){
    count -= 1
  }
  sliding()
})

next.addEventListener("click",function(){
  if(count<slides.length-1){
    count += 1
  }
  sliding()
})

function sliding(){
  if(count>=0&&count<slides.length)
  slideEl.forEach(function(slide){
    slide.style.transform = `translateX(${-count*100}%)`
  })
}