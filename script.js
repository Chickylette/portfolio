const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const sideMenu = document.getElementById("sideMenu");

function toggleMenu() {
    sideMenu.classList.toggle("open");
}

/* Close menu when clicking outside */
document.addEventListener("click", function(event) {

    const menuButton = document.querySelector(".menu-button");

    const clickedInsideMenu = sideMenu.contains(event.target);
    const clickedMenuButton = menuButton.contains(event.target);

    /* If clicked outside both menu and button */
    if (
        !clickedInsideMenu &&
        !clickedMenuButton &&
        sideMenu.classList.contains("open")
    ) {
        sideMenu.classList.remove("open");
    }
});