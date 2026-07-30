/* =========================================================
                PRIVACY PAGE JAVASCRIPT
========================================================= */


/* =========================================================
                DOM READY
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    initializeLucide();

    initializeDarkMode();

    initializeRTL();

});


/* =========================================================
                LUCIDE ICONS
========================================================= */

function initializeLucide() {

    if (typeof lucide !== "undefined") {

        lucide.createIcons();

    }

}


/* =========================================================
                DARK MODE
========================================================= */

function initializeDarkMode() {

    const darkModeToggle =
        document.getElementById("darkModeToggle");

    const privacyLogo =
        document.getElementById("privacyLogo");


    if (!darkModeToggle) return;


    /* -----------------------------------------
                    LOAD SAVED MODE
    ----------------------------------------- */

    const savedDarkMode =
        localStorage.getItem("privacyDarkMode");


    if (savedDarkMode === "true") {

        document.body.classList.add("dark-mode");

    }


    updateDarkMode();


    /* -----------------------------------------
                    TOGGLE MODE
    ----------------------------------------- */

    darkModeToggle.addEventListener(
        "click",
        function () {

            document.body.classList.toggle("dark-mode");


            const isDarkMode =
                document.body.classList.contains(
                    "dark-mode"
                );


            localStorage.setItem(
                "privacyDarkMode",
                isDarkMode ? "true" : "false"
            );


            updateDarkMode();

        }
    );


    /* -----------------------------------------
                    UPDATE
    ----------------------------------------- */

    function updateDarkMode() {

        const isDarkMode =
            document.body.classList.contains(
                "dark-mode"
            );


        if (isDarkMode) {

            /* ==============================
                    DARK MODE
            ============================== */

            if (privacyLogo) {

                privacyLogo.src =
                    "images/logo-dark.png";

            }


            darkModeToggle.innerHTML =
                '<i data-lucide="sun"></i>';

            darkModeToggle.title =
                "Light Mode";

        } else {

            /* ==============================
                    LIGHT MODE
            ============================== */

            if (privacyLogo) {

                privacyLogo.src =
                    "images/logo-light.png";

            }


            darkModeToggle.innerHTML =
                '<i data-lucide="moon"></i>';

            darkModeToggle.title =
                "Dark Mode";

        }


        initializeLucide();

    }

}


/* =========================================================
                    RTL MODE
========================================================= */

function initializeRTL() {

    const rtlToggle =
        document.getElementById("rtlToggle");


    if (!rtlToggle) return;


    /* -----------------------------------------
                    LOAD SAVED RTL
    ----------------------------------------- */

    const savedRTL =
        localStorage.getItem("privacyRTL");


    if (savedRTL === "true") {

        document.documentElement.classList.add(
            "rtl-mode"
        );

        document.documentElement.setAttribute(
            "dir",
            "rtl"
        );

    } else {

        document.documentElement.classList.remove(
            "rtl-mode"
        );

        document.documentElement.setAttribute(
            "dir",
            "ltr"
        );

    }


    updateRTLButton();


    /* -----------------------------------------
                    TOGGLE RTL
    ----------------------------------------- */

    rtlToggle.addEventListener(
        "click",
        function () {

            document.documentElement.classList.toggle(
                "rtl-mode"
            );


            const isRTL =
                document.documentElement.classList.contains(
                    "rtl-mode"
                );


            if (isRTL) {

                document.documentElement.setAttribute(
                    "dir",
                    "rtl"
                );

                localStorage.setItem(
                    "privacyRTL",
                    "true"
                );

            } else {

                document.documentElement.setAttribute(
                    "dir",
                    "ltr"
                );

                localStorage.setItem(
                    "privacyRTL",
                    "false"
                );

            }


            updateRTLButton();

        }
    );


    /* -----------------------------------------
                    RTL BUTTON TEXT
    ----------------------------------------- */

    function updateRTLButton() {

        const isRTL =
            document.documentElement.classList.contains(
                "rtl-mode"
            );


        rtlToggle.textContent =
            isRTL ? "LTR" : "RTL";

    }

}