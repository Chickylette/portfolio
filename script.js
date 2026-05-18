document.addEventListener("DOMContentLoaded", function () {

    // Load menu.html into container
    fetch("./Menu.html")
        .then(response => response.text())
        .then(data => {

            document.getElementById("menuContainer").innerHTML = data;

            // Menu functionality AFTER loading
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

                if (sideMenu.classList.contains("open")) {
                    sideMenu.classList.remove("open");
                }
            });
        });
});