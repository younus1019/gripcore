

document.addEventListener("DOMContentLoaded", function () {
  initializeDarkMode();
  initializeRTL();
});



function initializeDarkMode() {
  const darkModeToggle = document.getElementById("darkModeToggle");

  const privacyLogo = document.getElementById("privacyLogo");

  if (!darkModeToggle) return;

 

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }

  updateDarkMode();

 

  darkModeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    const isDarkMode = document.body.classList.contains("dark-mode");

    localStorage.setItem("theme", isDarkMode ? "dark" : "light");

    updateDarkMode();
  });

 

  function updateDarkMode() {
    const isDarkMode = document.body.classList.contains("dark-mode");

    if (isDarkMode) {
      

      if (privacyLogo) {
        privacyLogo.src = "images/logo-dark.png";
      }

      darkModeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';

      darkModeToggle.title = "Light Mode";
    } else {
      

      if (privacyLogo) {
        privacyLogo.src = "images/logo-light.png";
      }

      darkModeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';

      darkModeToggle.title = "Dark Mode";
    }
  }
}



function initializeRTL() {
  const rtlToggle = document.getElementById("rtlToggle");

  if (!rtlToggle) return;

  

  const savedRTL = localStorage.getItem("rtlMode");

  if (savedRTL === "true") {
    document.documentElement.classList.add("rtl-mode");

    document.documentElement.setAttribute("dir", "rtl");
  } else {
    document.documentElement.classList.remove("rtl-mode");

    document.documentElement.setAttribute("dir", "ltr");
  }

  updateRTLButton();

  

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

  

  function updateRTLButton() {
    const isRTL = document.documentElement.classList.contains("rtl-mode");

    rtlToggle.innerHTML = '<i class="fa-solid fa-right-left"></i>';

    rtlToggle.title = isRTL ? "Switch to LTR" : "Switch to RTL";
  }
}
