
const toggleBtn = document.querySelector('.toggleBtn')
const menu = document.querySelector('.menu')


toggleBtn.addEventListener('click', event => {
  menu.classList.toggle('onToggle')
  Array.from(menu.childNodes).forEach(node => {
    if(node.tagName === 'LI') node.classList.toggle('onToggle')

  })
  Array.from(toggleBtn.childNodes).forEach(node => {
    console.dir(node)
    if(node.tagName === "DIV") node.classList.toggle('onToggle')
  })
})
