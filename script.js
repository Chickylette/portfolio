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

    /* =========================
       MERMAID FLOWCHART
    ========================== */

    if (typeof mermaid !== "undefined") {
        mermaid.initialize({
            startOnLoad: false,
            theme: "default",
            flowchart: {
                curve: "basis",
                htmlLabels: true
            }
        });

        mermaid.run({
            querySelector: ".mermaid"
        });
    }
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

/* =========================
   UNIT SHOWCASE
========================= */

document.addEventListener("DOMContentLoaded", function () {

    const unitData = {
        fighter: {
            name: "Fighter",
            description:
                "A close-range Frontliner that gains MP " +
                "through attacking and pressures enemy Backliners." +
                "\nAttacks 3x times quickyly when skill activated."
        },
        ranger: {
            name: "Ranger",
            description:
                "A long-range Backliner that provides " +
                "sustained damage from a safe distance."
        },
        tank: {
            name: "Tank",
            description:
                "A defensive unit with high HP that gains MP " +
                "through attacking and receiving damage."
        }
    };

    const unitCards = document.querySelectorAll(".unit-card");
    const unitName = document.getElementById("unit-name");
    const unitDescription =
        document.getElementById("unit-description");

    if (!unitCards.length || !unitName || !unitDescription) {
        return;
    }

    unitCards.forEach(function (card) {

        card.addEventListener("click", function () {

            const unitId = card.dataset.unit;
            const unit = unitData[unitId];

            if (!unit) {
                console.error("Unit not found:", unitId);
                return;
            }

            unitName.textContent = unit.name;
            unitDescription.textContent = unit.description;

            console.log("Selected unit:", unit.name);
        });

    });

});

