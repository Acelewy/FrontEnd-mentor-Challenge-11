const navbar = document.querySelector(".navbar")
const ham = document.querySelector(".hamburger")

function toggleHamburger(){
  navbar.classList.toggle("showNav")
  ham.classList.toggle("showClose")
}

ham.addEventListener("click", toggleHamburger)


const menuLinks = document.querySelectorAll(".close")
menuLinks.forEach( 
  function(menuLink) { 
    menuLink.addEventListener("click", toggleHamburger) 
  }
)
