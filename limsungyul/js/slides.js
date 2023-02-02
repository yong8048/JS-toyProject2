const slides = document.querySelector('.slides')
const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
console.log(slides)
Array.from(...slides.children).forEach( (slide, index) => {
  console.dir(slide)
  slide.style.left = `${index * 100}%`
  slide.addEventLisenter('load', () => {
    slide.classList.remove('loading')
  })
})

