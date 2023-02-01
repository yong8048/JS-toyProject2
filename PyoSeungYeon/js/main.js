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
