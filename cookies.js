
/*=========================================================
                    COOKIES POLICY JS
=========================================================*/
 
 
/*=========================================================
                    PAGE LOAD
=========================================================*/
 
document.addEventListener("DOMContentLoaded", function () {
 
    initializeCookiesPage();
 
});
 
 
/*=========================================================
                    INITIALIZE
=========================================================*/
 
function initializeCookiesPage() {
 
    const darkModeToggle = document.getElementById("darkModeToggle");
    const rtlToggle = document.getElementById("rtlToggle");
    const policyLogoLink = document.getElementById("policyLogoLink");
 
    /*=====================================================
                    LOAD SAVED DARK MODE
                    (same key as main.js: "theme")
    =====================================================*/
 
    const savedTheme = localStorage.getItem("theme");
 
    if (savedTheme === "dark") {
 
        document.body.classList.add("dark-mode");
 
    } else {
 
        document.body.classList.remove("dark-mode");
 
    }
 
 
    /*=====================================================
                    UPDATE DARK MODE ICON
    =====================================================*/
 
    updateDarkModeIcon();
 
 
    /*=====================================================
                    LOAD SAVED RTL MODE
    =====================================================*/
 
    const savedRTL = localStorage.getItem("rtlMode");
 
    if (savedRTL === "true") {
 
        document.documentElement.classList.add("rtl-mode");
 
        document.documentElement.setAttribute("dir", "rtl");
 
    } else {
 
        document.documentElement.classList.remove("rtl-mode");
 
        document.documentElement.setAttribute("dir", "ltr");
 
    }
 
 
    /*=====================================================
                    DARK MODE BUTTON
    =====================================================*/
 
    if (darkModeToggle) {
 
        darkModeToggle.addEventListener("click", function () {
 
            document.body.classList.toggle("dark-mode");
 
            const isDarkMode =
                document.body.classList.contains("dark-mode");
 
            localStorage.setItem(
                "theme",
                isDarkMode ? "dark" : "light"
            );
 
            updateDarkModeIcon();
 
            updatePolicyLogo();
 
        });
 
    }
 
 
    /*=====================================================
                    RTL BUTTON
    =====================================================*/
 
    if (rtlToggle) {
 
        rtlToggle.addEventListener("click", function () {
 
            document.documentElement.classList.toggle("rtl-mode");
 
            const isRTL =
                document.documentElement.classList.contains("rtl-mode");
 
 
            if (isRTL) {
 
                document.documentElement.setAttribute(
                    "dir",
                    "rtl"
                );
 
                rtlToggle.title = "LTR Mode";
 
                localStorage.setItem(
                    "rtlMode",
                    "true"
                );
 
            } else {
 
                document.documentElement.setAttribute(
                    "dir",
                    "ltr"
                );
 
                rtlToggle.title = "RTL Mode";
 
                localStorage.setItem(
                    "rtlMode",
                    "false"
                );
 
            }
 
        });
 
 
        /* Set initial title */
 
        if (
            document.documentElement.classList.contains(
                "rtl-mode"
            )
        ) {
 
            rtlToggle.title = "LTR Mode";
 
        } else {
 
            rtlToggle.title = "RTL Mode";
 
        }
 
    }
 
 
    /*=====================================================
                    LOGO CLICK
    =====================================================*/
 
    if (policyLogoLink) {
 
        policyLogoLink.addEventListener("click", function () {
 
            window.location.href = "index.html";
 
        });
 
    }
 
 
    /*=====================================================
                    UPDATE LOGO
    =====================================================*/
 
    updatePolicyLogo();
 
}
 
 
/*=========================================================
                DARK MODE ICON
=========================================================*/
 
function updateDarkModeIcon() {
 
    const darkModeToggle =
        document.getElementById("darkModeToggle");
 
 
    if (!darkModeToggle) return;
 
 
    const isDarkMode =
        document.body.classList.contains("dark-mode");
 
 
    if (isDarkMode) {
 
        darkModeToggle.innerHTML =
            '<i data-lucide="sun"></i>';
 
        darkModeToggle.title = "Light Mode";
 
    } else {
 
        darkModeToggle.innerHTML =
            '<i data-lucide="moon"></i>';
 
        darkModeToggle.title = "Dark Mode";
 
    }
 
 
    /* Re-render Lucide icon */
 
    if (typeof lucide !== "undefined") {
 
        lucide.createIcons();
 
    }
 
}
 
 
/*=========================================================
                    POLICY LOGO
=========================================================*/
 
function updatePolicyLogo() {
 
    const policyLogo =
        document.getElementById("policyLogo");
 
 
    if (!policyLogo) return;
 
 
    const isDarkMode =
        document.body.classList.contains("dark-mode");
 
 
    if (isDarkMode) {
 
        policyLogo.src =
            "images/logo-dark.png";
 
    } else {
 
        policyLogo.src =
            "images/logo-light.png";
 
    }
 
}