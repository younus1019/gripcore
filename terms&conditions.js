/* =========================================================
                    TERMS PAGE JAVASCRIPT
========================================================= */

/* =========================================================
                        DOM READY
========================================================= */

document.addEventListener("DOMContentLoaded", function () {
  initializeLucideIcons();
  initializeDarkMode();
  initializeRTL();
});

/* =========================================================
                      LUCIDE ICONS
========================================================= */

function initializeLucideIcons() {
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
}

/* =========================================================
                        DARK MODE
========================================================= */

function initializeDarkMode() {
  const darkModeToggle = document.getElementById("darkModeToggle");

  const termsLogo = document.getElementById("termsLogo");

  if (!darkModeToggle) return;

  /* -----------------------------------------
                  LOAD SAVED THEME
  ----------------------------------------- */

  const savedTheme = localStorage.getItem("theme");

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

    const isDark = document.body.classList.contains("dark-mode");

    localStorage.setItem("theme", isDark ? "dark" : "light");

    updateDarkMode();
  });

  /* -----------------------------------------
                  UPDATE ICON + LOGO
  ----------------------------------------- */

  function updateDarkMode() {
    const isDark = document.body.classList.contains("dark-mode");

    if (isDark) {
      /* Dark mode: show sun icon */

      darkModeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';

      darkModeToggle.title = "Light Mode";

      if (termsLogo) {
        termsLogo.src = "images/logo-dark.png";
      }
    } else {
      /* Light mode: show moon icon */

      darkModeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';

      darkModeToggle.title = "Dark Mode";

      if (termsLogo) {
        termsLogo.src = "images/logo-light.png";
      }
    }
  }
}

/* =========================================================
                          RTL MODE
========================================================= */

function initializeRTL() {
  const rtlToggle = document.getElementById("rtlToggle");

  if (!rtlToggle) return;

  /* -----------------------------------------
                    LOAD SAVED RTL
  ----------------------------------------- */

  const savedRTL = localStorage.getItem("rtlMode");

  if (savedRTL === "true") {
    document.documentElement.classList.add("rtl-mode");

    document.documentElement.setAttribute("dir", "rtl");
  } else {
    document.documentElement.classList.remove("rtl-mode");

    document.documentElement.setAttribute("dir", "ltr");
  }

  updateRTLButton();

  /* -----------------------------------------
                      TOGGLE RTL
  ----------------------------------------- */

  rtlToggle.addEventListener("click", function () {
    document.documentElement.classList.toggle("rtl-mode");

    const isRTL = document.documentElement.classList.contains("rtl-mode");

    if (isRTL) {
      document.documentElement.setAttribute("dir", "rtl");

      localStorage.setItem("rtlMode", "true");
    } else {
      document.documentElement.setAttribute("dir", "ltr");

      localStorage.setItem("rtlMode", "false");
    }

    updateRTLButton();
  });

  /* -----------------------------------------
                    RTL BUTTON ICON
  ----------------------------------------- */

  function updateRTLButton() {
    const isRTL = document.documentElement.classList.contains("rtl-mode");

    rtlToggle.innerHTML = '<i class="fa-solid fa-right-left"></i>';

    rtlToggle.title = isRTL ? "Switch to LTR" : "Switch to RTL";
  }
}
