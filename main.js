const button1 = document.querySelector(".change")
const elem1 = document.querySelector("body")
const elem2 = document.querySelector(".goblins")

button1.addEventListener("click", () => {
    button1.style.backgroundColor = "purple"
   elem1.style.backgroundImage = "url(img2.jpg)"
   elem1.style.backgroundRepeat = "no-repeat"
   elem1.style.backgroundPosition = "center"
   elem1.style.backgroundSize = "cover"
//    elem1.style.backgroundPositionY = "100%"
  elem2.textContent = "WIZARDS"
  elem1.body.heigh = "100vh"
})



