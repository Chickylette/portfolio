document.addEventListener("DOMContentLoaded", function () {
    const sideMenu = document.getElementById("sideMenu");
    const menuButton = document.querySelector(".menu-button");

    menuButton.addEventListener("click", function (event) {
        event.stopPropagation();
        sideMenu.classList.toggle("open");
    });

    sideMenu.addEventListener("click", function (event) {
        event.stopPropagation();
    });

    document.addEventListener("click", function () {
        sideMenu.classList.remove("open");
    });
});