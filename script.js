document.addEventListener("DOMContentLoaded", function () {

    // Get elements
    const sideMenu = document.getElementById("sideMenu");
    const menuButton = document.getElementById("menuButton");

    // Open / Close menu when button is clicked
    menuButton.addEventListener("click", function (event) {

        // Prevent click from immediately closing menu
        event.stopPropagation();

        // Toggle menu
        sideMenu.classList.toggle("open");
    });

    // Prevent menu clicks from closing menu
    sideMenu.addEventListener("click", function (event) {
        event.stopPropagation();
    });

    // Close menu when clicking anywhere outside
    document.addEventListener("click", function () {

        // Close menu only if open
        if (sideMenu.classList.contains("open")) {
            sideMenu.classList.remove("open");
        }
    });

});