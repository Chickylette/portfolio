document.addEventListener("DOMContentLoaded", function () {
    fetch("./Menu.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("menuContainer").innerHTML = data;

            const sideMenu = document.getElementById("sideMenu");
            const menuButton = document.getElementById("menuButton");

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
        })
        .catch(error => console.error("Menu failed to load:", error));
});