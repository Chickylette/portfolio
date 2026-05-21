document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       LOAD MENU
    ========================== */
    fetch("./Menu.html")
        .then(response => response.text())
        .then(data => {

            // Insert menu into container
            document.getElementById("menuContainer").innerHTML = data;

            // Get menu elements AFTER loading
            const sideMenu = document.getElementById("sideMenu");
            const menuButton = document.getElementById("menuButton");

            // Toggle menu
            menuButton.addEventListener("click", function (event) {

                // Prevent outside click event
                event.stopPropagation();

                // Open / Close menu
                sideMenu.classList.toggle("open");
            });

            // Prevent menu click from closing itself
            sideMenu.addEventListener("click", function (event) {
                event.stopPropagation();
            });

            // Close menu when clicking outside
            document.addEventListener("click", function () {

                if (sideMenu.classList.contains("open")) {
                    sideMenu.classList.remove("open");
                }
            });

        })
        .catch(error => console.error("Menu failed to load:", error));



    /* =========================
       LOAD FOOTER
    ========================== */
    fetch("./Footer.html")
        .then(response => response.text())
        .then(data => {

            // Insert footer into container
            document.getElementById("footerContainer").innerHTML = data;

        })
        .catch(error => console.error("Footer failed to load:", error));

});

/* =========================
   IMAGE GALLERY MODAL
========================= */

const galleryImages = document.querySelectorAll(".gallery-grid img");

const imageModal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.getElementById("closeModal");

galleryImages.forEach(function (image) {

    image.addEventListener("click", function () {

        modalImage.src = image.src;

        imageModal.classList.add("open");
    });
});

closeModal.addEventListener("click", function () {

    imageModal.classList.remove("open");
});

imageModal.addEventListener("click", function (event) {

    if (event.target === imageModal) {

        imageModal.classList.remove("open");
    }
});