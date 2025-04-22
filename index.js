document.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".menu");
    const openBtn = document.querySelectorAll(".humberger")[0]; // Menu icon
    const closeBtn = document.querySelectorAll(".humberger")[1]; // Arrow icon

    if (openBtn) {
        openBtn.addEventListener("click", (e) => {
            e.preventDefault();
            menu.style.left = "0";
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener("click", (e) => {
            e.preventDefault();
            menu.style.left = "-100%";
        });
    }
});
