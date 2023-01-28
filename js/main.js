const cursor = document.querySelector(".mouse__cursor");

document.addEventListener("mousemove", function(e){
  gsap.to(cursor, {duration: 0.2, left: e.pageX, top: e.pageY});
});