
/* =========================================================
                    LUCIDE ICONS
========================================================= */
 
document.addEventListener("DOMContentLoaded", function () {
 
    lucide.createIcons();
 
    initializeDarkMode();
    initializeRTL();
 
});
 
 
/* =========================================================
                    DARK MODE
========================================================= */
 
function initializeDarkMode() {
 
    const darkModeToggle =
        document.getElementById("darkModeToggle");
 
    const termsLogo =
        document.getElementById("termsLogo");
 
 
    if (!darkModeToggle) return;
 
 
    /* -----------------------------------------
                LOAD SAVED THEME
                (same key as main.js: "theme")
    ----------------------------------------- */
 
    const savedTheme =
        localStorage.getItem("theme");
 
 
    if (savedTheme === "dark") {
 
        document.body.classList.add("dark-mode");
 
    } else {
 
        document.body.classList.remove("dark-mode");
 
    }
 
 
    updateDarkMode();
 
 
    /* -----------------------------------------
                TOGGLE DARK MODE
    ----------------------------------------- */
 
    darkModeToggle.addEventListener("click", function () {
 
        document.body.classList.toggle("dark-mode");
 
 
        const isDark =
            document.body.classList.contains("dark-mode");
 
 
        localStorage.setItem(
            "theme",
            isDark ? "dark" : "light"
        );
 
 
        updateDarkMode();
 
    });
 
 
    /* -----------------------------------------
                UPDATE ICON + LOGO
    ----------------------------------------- */
 
    function updateDarkMode() {
 
        const isDark =
            document.body.classList.contains("dark-mode");
 
 
        if (isDark) {
 
            /* Dark Mode */
 
            darkModeToggle.innerHTML =
                '<i data-lucide="sun"></i>';
 
            darkModeToggle.title = "Light Mode";
 
 
            if (termsLogo) {
 
                termsLogo.src =
                    "images/logo-dark.png";
 
            }
 
        } else {
 
            /* Light Mode */
 
            darkModeToggle.innerHTML =
                '<i data-lucide="moon"></i>';
 
            darkModeToggle.title = "Dark Mode";
 
 
            if (termsLogo) {
 
                termsLogo.src =
                    "images/logo-light.png";
 
            }
 
        }
 
 
        /* Re-create Lucide icon */
 
        lucide.createIcons();
 
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
                (same key as main.js: "rtlMode")
    ----------------------------------------- */
 
    const savedRTL =
        localStorage.getItem("rtlMode");
 
 
    if (savedRTL === "true") {
 
        document.documentElement.classList.add(
            "rtl-mode"
        );
 
        document.documentElement.setAttribute(
            "dir",
            "rtl"
        );
 
    }
 
 
    updateRTLButton();
 
 
    /* -----------------------------------------
                TOGGLE RTL
    ----------------------------------------- */
 
    rtlToggle.addEventListener("click", function () {
 
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
                "rtlMode",
                "true"
            );
 
        } else {
 
            document.documentElement.setAttribute(
                "dir",
                "ltr"
            );
 
            localStorage.setItem(
                "rtlMode",
                "false"
            );
 
        }
 
 
        updateRTLButton();
 
    });
 
 
    /* -----------------------------------------
                RTL BUTTON TITLE
    ----------------------------------------- */
 
    function updateRTLButton() {
 
        const isRTL =
            document.documentElement.classList.contains(
                "rtl-mode"
            );
 
 
        rtlToggle.title =
            isRTL ? "LTR Mode" : "RTL Mode";
 
    }
 
}