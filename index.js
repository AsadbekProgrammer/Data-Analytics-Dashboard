// javascript

let isOpen = false;

function openSlide() {
  const menu = document.querySelector(".menu");
    
    menu.style.transition = "left 0.7s ease"
    menu.style.left = "-100%"
    
    
}

function closeSlide() {
    const menu = document.querySelector(".menu");
    
    menu.style.transition = "left 0.7s ease"
    menu.style.left = "0"

}