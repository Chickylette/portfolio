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

document.addEventListener("DOMContentLoaded", function () {

    const galleryImages =
        document.querySelectorAll(".gallery-grid img");

    const imageModal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    const closeModal = document.getElementById("closeModal");

    // Skip gallery functionality on pages without a modal
    if (!imageModal || !modalImage || !closeModal) {
        return;
    }

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

});

/* =========================
   UNIT SHOWCASE
========================= */

document.addEventListener("DOMContentLoaded", function () {

    const unitData = [
        {
            id: "fighter",
            name: "Fighter",
            rarity: "Common",
            role: "Frontliner",
            hp: "Low",
            range: "Melee",
            mp: "On attack",
            skill: "Attack 3 times rapidly",
            icon: "⚔️",
            image: "images/TFT_Fighter.png",
            description:
                "Close-range attacker designed to pressure enemies.",
            rationale:
                "The Fighter was designed as an early-game accessible offensive " +
                "unit that introduces players to frontline pressure. " +
                "Its close-range attacks encourage aggressive positioning, " +
                "while generating MP through attacking rewards " +
                "sustained engagement."
        },
        {
            id: "ranger",
            name: "Ranger",
            rarity: "Common",
            role: "Backliner",
            hp: "Low",
            range: "Ranged",
            mp: "On attack",
            skill: "Shoots 4x Faster for 5 seconds",
            icon: "🏹",
            image: "images/TFT_Ranger.png",
            description:
                "Ranged damage dealer that attacks from behind allied units.",
            rationale:
                "The Ranger was designed to establish a foundational " +
                "implementation of projectile behaviour and bullet traversal within the game," +
                "providing a reliable reference for future ranged units."
        },
        {
            id: "tank",
            name: "Tank",
            rarity: "Common",
            role: "Tank",
            hp: "Medium",
            range: "Melee",
            mp: "On attack and damage taken",
            skill: "",
            icon: "🛡️",
            image: "images/TFT_Tank.png",
            description:
                "Defensive unit designed to absorb attacks and protect allies.",
            rationale:
                "The Tank was designed to provide a defensive foundation " +
                "for team compositions. Its high HP and ability to " +
                "generate MP when receiving damage encourage players " +
                "to position it where it can absorb enemy attacks " +
                "and protect vulnerable allies."
        }
    ];

    const gallery = document.getElementById("unit-gallery");
    const details = document.getElementById("unit-details");

    if (!gallery || !details) return;

    let selectedUnit = unitData[0].id;
    let activeFilter = "All";

    function renderGallery() {
        gallery.innerHTML = "";

        const filteredUnits = unitData.filter(unit =>
            activeFilter === "All" ||
            unit.role === activeFilter
        );

        filteredUnits.forEach(unit => {
            const card = document.createElement("button");

            card.type = "button";
            card.className = "unit-card";

            if (unit.id === selectedUnit) {
                card.classList.add("selected");
            }

            const imageContainer = document.createElement("div");
            imageContainer.className = "unit-image";

            if (unit.image) {
                const img = document.createElement("img");
                img.src = unit.image;
                img.alt = unit.name;
                imageContainer.appendChild(img);
            } else {
                const icon = document.createElement("span");
                icon.className = "placeholder-icon";
                icon.textContent = unit.icon;
                imageContainer.appendChild(icon);
            }

            const name = document.createElement("h4");
            name.textContent = unit.name;

            const rarity = document.createElement("p");
            rarity.textContent = unit.rarity;

            card.append(imageContainer, name, rarity);

            card.addEventListener("click", () => {
                selectedUnit = unit.id;
                renderGallery();
                renderDetails();
            });

            gallery.appendChild(card);
        });
    }

    function renderDetails() {
        const unit = unitData.find(u => u.id === selectedUnit);

        if (!unit) return;

        document.getElementById("unit-name").textContent =
            unit.name;

        document.getElementById("unit-rarity").textContent =
            unit.rarity;

        document.getElementById("unit-description").textContent =
            unit.description;

        document.getElementById("unit-role").textContent =
            unit.role;

        document.getElementById("unit-hp").textContent =
            unit.hp;

        document.getElementById("unit-range").textContent =
            unit.range;

        document.getElementById("unit-mp").textContent =
            unit.mp;

        document.getElementById("unit-skill").textContent =
            unit.skill;

        document.getElementById("unit-rationale-text").textContent =
            unit.rationale;
    }

    document.querySelectorAll(".filter-btn").forEach(button => {
        button.addEventListener("click", () => {
            activeFilter = button.dataset.filter;

            document.querySelectorAll(".filter-btn")
                .forEach(btn => btn.classList.remove("active"));

            button.classList.add("active");

            const visibleUnits = unitData.filter(unit =>
                activeFilter === "All" ||
                unit.role === activeFilter
            );

            if (visibleUnits.length > 0) {
                if (!visibleUnits.some(u => u.id === selectedUnit)) {
                    selectedUnit = visibleUnits[0].id;
                }

                details.hidden = false;
                renderDetails();
            } else {
                details.hidden = true;
            }

            renderGallery();
        });
    });

    renderGallery();
    renderDetails();
});


