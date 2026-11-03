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
                "Introductory close-range attacker designed to pressure enemies.",
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
                "Introductory ranged damage dealer that attacks from behind allied units.",
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
            skill: "Heals itself for a second",
            icon: "🛡️",
            image: "images/TFT_Tank.png",
            description:
                "Introductory defensive unit designed to absorb attacks and protect allies.",
            rationale:
                "The Tank was designed to provide a defensive foundation " +
                "for team compositions, solidifies the role of a Tank."
        },
        {
            id: "star",
            name: "Star",
            rarity: "Uncommon",
            role: "Backliner",
            hp: "Medium",
            range: "Ranged",
            mp: "On attack",
            skill: "Shoots a healing bullet towards the highest lost HP ally and heal it.",
            icon: "🏹",
            image: "images/TFT_Star.png",
            description:
                "A ranged unit that able to deal damage and heals allies",
            rationale:
                "The Star was designed to introduce a supportive functionality into the game, " +
                " offering players an alternative Backliner option that enhances team sustainability and strategic diversity."
        },
        {
            id: "donut",
            name: "Donut",
            rarity: "Uncommon",
            role: "Backliner",
            hp: "Low",
            range: "Ranged",
            mp: "On attack",
            skill: "Doubles its attack speed (Stackable)",
            icon: "🏹",
            image: "images/TFT_Donut.png",
            description:
                "An enhanced variant of the Ranger that deals more damage and shoot faster",
            rationale:
                "The Donut was designed to offer players an alternative ranged damage dealer with a stronger emphasis on sustained fire."
        },
        {
            id: "pyramid",
            name: "Pyramid",
            rarity: "Uncommon",
            role: "Tank",
            hp: "High",
            range: "Melee",
            mp: "On attack",
            skill: "Gain Damage Reduction for a short period of time",
            icon: "🛡️",
            image: "images/TFT_Pyramid.png",
            description:
                "An enhanced variant of the Tank that improves survivability",
            rationale:
                "The Pyramid was designed to offer increased survivability and allowing it to endure greater damage in " +
                "combat while fulfilling a similar frontline role."
        },
        {
            id: "ramiel",
            name: "Ramiel",
            rarity: "Rare",
            role: "Special",
            hp: "High",
            range: "Ranged",
            mp: "Attack neglected",
            skill: "Ramiel swaps to Destruction Mode and can be attacked now. It will charge up for a short period of time. " +
            "It then will shoot a laser towards the last attacker and sweep in 360 angle. Each target it hits take damage and " +
            "all projectiles will be destroyed on hit. After the sweep, all hit targets take 100 damage and it will then " +
            "changes back to Idle Mode. ",
            icon: "✨",
            image: "images/TFT_Ramiel.png",
            description:
                "Ramiel has two modes: Idle Mode and Destruction Mode. It enters Idle Mode at the beginning of the round. " +
                "In Idle Mode, it cannot attack any units. It can neglects all types of damage and increases MP when attack neglected. " +
                "Projectiles will be destroyed when it hits Ramiel. ",
            rationale:
                "Ramiel was designed as a tribute to the iconic character " +
                "from the anime Neon Genesis Evangelion. Both its visual " +
                "design and attack sequence were recreated to closely " +
                "resemble their original counterparts, capturing the " +
                "character's distinctive appearance and combat behaviour."
        },
        {
            id: "gwen",
            name: "Gwen",
            rarity: "Rare",
            role: "Frontliner",
            hp: "High",
            range: "Melee",
            mp: "On Attack",
            skill: "Cuts the enemy 5 times very fast and deals damage. Increase 1 cut for the next skill used (Stackable)",
            icon: "⚔️",
            image: "images/TFT_Gwen.png",
            description:
                "Gwen cuts through enemies with her scissors",
            rationale:
                "Gwen was designed with inspiration from her original " +
                "counterpart in League of Legends, retaining her distinctive " +
                "visual appearance and combat identity. From a gameplay " +
                "perspective, she was introduced as a powerful Frontliner " +
                "specialising in breaking through heavily defended enemy " +
                "formations. Her offensive capabilities provide players " +
                "with an effective counter to high-durability units, " +
                "encouraging more strategic drafting and team composition."
        },
        {
            id: "rimuru",
            name: "Rimuru",
            rarity: "Rare",
            role: "Special",
            hp: "High",
            range: "Melee/Ranged",
            mp: "Varied",
            skill: "Rimuru does not have a normal attack. His attack pattern is based on the unit consumed with Beelzebuth. ",
            icon: "✨",
            image: "images/TFT_Rimuru.png",
            description:
                "Rimuru cannot generate MP. Rimuru will set the most left bench tile as Rimuru tile when he is on the board. " +
                "When battle starts, he will consume the unit on it and change his form and attack pattern.",
            rationale:
                "Rimuru Tempest was designed as a Special Rare unit inspired " +
                "by the character's unique abilities in That Time I Got " +
                "Reincarnated as a Slime. Its signature ability, Beelzebuth, " +
                "allows Rimuru to consume allied units and transform, " +
                "adapting its appearance and attack sequence based on the " +
                "absorbed unit. This mechanic was introduced to provide " +
                "greater tactical flexibility, allowing players to adapt " +
                "Rimuru's combat role to different situations. The design " +
                "encourages strategic drafting and team composition while " +
                "preserving the character's distinctive identity from " +
                "the original anime."
        },
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


