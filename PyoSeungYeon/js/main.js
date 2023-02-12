const $navButtonList = document.querySelectorAll('.nav-list button')

$navButtonList.forEach((button) => {
  button.addEventListener('click', scrollToTabPanel)
})

function scrollToTabPanel() {
  const tabPanelId = this.parentNode.getAttribute('aria-labelledby')
  const tabPanel = document.querySelector(`#${tabPanelId}`)

  const scrollAmount = tabPanel.getBoundingClientRect().top
  window.scrollBy({ top: scrollAmount - 74, behavior: 'smooth' })
}

let move = 0
const sliderList = document.querySelector('.slider-list')
const buttonList = document.querySelectorAll('.btn-group .btn')
const itemCount = sliderList.childElementCount
const movePercent = 100 / itemCount // 증감값 25

buttonList.forEach((button) => {
  button.addEventListener('click', function () {
    if (button.classList.contains('btn-prev')) {
      move += movePercent
      if (move > 0) move = 0
      sliderList.style.transform = `translateX(${move}%)`
    }

    if (button.classList.contains('btn-next')) {
      move -= movePercent
      if (move < -75) move = -75
      sliderList.style.transform = `translateX(${move}%)`
    }
  })
})
