const cursor = document.querySelector(".mouse__cursor");
const cardsEl = document.querySelectorAll(".card")

document.addEventListener("mousemove", function(e){
  gsap.to(cursor,{
		duration: 0.3,
		left: e.pageX-22,
		top: e.pageY-18
	})
})

cardsEl.forEach(card => {
  card.addEventListener('mouseenter',()=>{
    cursor.classList.add("active")
    card.style.fill
  })
  card.addEventListener('mouseleave',()=>{
    cursor.classList.remove("active")
  })
})