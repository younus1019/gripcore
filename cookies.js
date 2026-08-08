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
  =====================================================*/

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }

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

  updateRTLButton();

  /*=====================================================
                    DARK MODE BUTTON
  =====================================================*/

  if (darkModeToggle) {
    darkModeToggle.addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");

      const isDarkMode = document.body.classList.contains("dark-mode");

      localStorage.setItem("theme", isDarkMode ? "dark" : "light");

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
  }

  /*=====================================================
                        LOGO CLICK
  =====================================================*/

  if (policyLogoLink) {
    policyLogoLink.addEventListener("click", function () {
      window.location.href = "index.html";
    });
  }

  updatePolicyLogo();
}

/*=========================================================
                    DARK MODE ICON
=========================================================*/

function updateDarkModeIcon() {
  const darkModeToggle = document.getElementById("darkModeToggle");

  if (!darkModeToggle) return;

  const isDarkMode = document.body.classList.contains("dark-mode");

  if (isDarkMode) {
    darkModeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';

    darkModeToggle.title = "Light Mode";
  } else {
    darkModeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';

    darkModeToggle.title = "Dark Mode";
  }
}

/*=========================================================
                      RTL BUTTON ICON
=========================================================*/

function updateRTLButton() {
  const rtlToggle = document.getElementById("rtlToggle");

  if (!rtlToggle) return;

  const isRTL = document.documentElement.classList.contains("rtl-mode");

  rtlToggle.innerHTML = '<i class="fa-solid fa-right-left"></i>';

  rtlToggle.title = isRTL ? "Switch to LTR" : "Switch to RTL";
}

/*=========================================================
                        POLICY LOGO
=========================================================*/

function updatePolicyLogo() {
  const policyLogo = document.getElementById("policyLogo");

  if (!policyLogo) return;

  const isDarkMode = document.body.classList.contains("dark-mode");

  if (isDarkMode) {
    policyLogo.src = "images/logo-dark.png";
  } else {
    policyLogo.src = "images/logo-light.png";
  }
}
