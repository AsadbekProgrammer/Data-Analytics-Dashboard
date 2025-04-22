document.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".menu");
    const openBtn = document.getElementById('openSlide') // Menu icon
    const closeBtn = document.getElementById('closeSlide') // Arrow icon

    if (openBtn) {
        openBtn.addEventListener("click", (e) => {
            e.preventDefault();
            menu.style.transition = "left 0.7s ease"
            menu.style.left = "0";
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener("click", (e) => {
            e.preventDefault();
            menu.style.transition = "left 0.7s ease"
            menu.style.left = "-100%";
        });
    }
});
