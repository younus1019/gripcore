

document.addEventListener("DOMContentLoaded", initialize404Page);



function initialize404Page() {
  const darkModeToggle = document.getElementById("darkModeToggle");
  const rtlToggle = document.getElementById("rtlToggle");
  const errorLogoLink = document.getElementById("errorLogoLink");

  const savedTheme = localStorage.getItem("theme");

  document.body.classList.toggle("dark-mode", savedTheme === "dark");

  const savedRTL = localStorage.getItem("rtlMode");
  const isRTL = savedRTL === "true";

  document.documentElement.classList.toggle("rtl-mode", isRTL);
  document.documentElement.setAttribute("dir", isRTL ? "rtl" : "ltr");

  updateDarkModeIcon();
  updateRTLButton();
  updateErrorLogo();

  if (darkModeToggle) {
    darkModeToggle.addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");

      const isDarkMode = document.body.classList.contains("dark-mode");

      localStorage.setItem("theme", isDarkMode ? "dark" : "light");

      updateDarkModeIcon();
      updateErrorLogo();
    });
  }

  if (rtlToggle) {
    rtlToggle.addEventListener("click", function () {
      document.documentElement.classList.toggle("rtl-mode");

      const isRTL = document.documentElement.classList.contains("rtl-mode");

      document.documentElement.setAttribute("dir", isRTL ? "rtl" : "ltr");

      localStorage.setItem("rtlMode", String(isRTL));

      updateRTLButton();
    });
  }

  if (errorLogoLink) {
    errorLogoLink.addEventListener("click", function () {
      window.location.href = "index.html";
    });
  }
}



function updateDarkModeIcon() {
  const darkModeToggle = document.getElementById("darkModeToggle");

  if (!darkModeToggle) return;

  const isDarkMode = document.body.classList.contains("dark-mode");

  darkModeToggle.innerHTML = isDarkMode
    ? '<i class="fa-solid fa-sun"></i>'
    : '<i class="fa-solid fa-moon"></i>';

  darkModeToggle.title = isDarkMode ? "Light Mode" : "Dark Mode";
}



function updateRTLButton() {
  const rtlToggle = document.getElementById("rtlToggle");

  if (!rtlToggle) return;

  const isRTL = document.documentElement.classList.contains("rtl-mode");

  rtlToggle.title = isRTL ? "LTR Mode" : "RTL Mode";
}



function updateErrorLogo() {
  const errorLogo = document.getElementById("errorLogo");

  if (!errorLogo) return;

  const isDarkMode = document.body.classList.contains("dark-mode");

  errorLogo.src = isDarkMode ? "images/logo-dark.png" : "images/logo-light.png";
}
