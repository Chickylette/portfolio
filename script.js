document.addEventListener("DOMContentLoaded", function () {
    const sideMenu = document.getElementById("sideMenu");
    const menuButton = document.getElementById("menuButton");

    menuButton.addEventListener("click", function (event) {
        event.stopPropagation();
        sideMenu.classList.toggle("open");
    });

    document.addEventListener("click", function (event) {
        const clickedInsideMenu = sideMenu.contains(event.target);
        const clickedMenuButton = menuButton.contains(event.target);

        if (!clickedInsideMenu && !clickedMenuButton) {
            sideMenu.classList.remove("open");
        }
    });
});