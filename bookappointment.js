/* =========================================================
   GRIPCORE BOOK APPOINTMENT JS
========================================================= */


/* =========================================================
   LUCIDE ICONS
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  // Initialize Lucide Icons
  lucide.createIcons();

});


/* =========================================================
   DARK / LIGHT MODE
   + LOGO SWITCHING
========================================================= */

const themeToggle =
  document.getElementById("themeToggle");


// Get Book Appointment Page Logo
const pageLogo =
  document.getElementById("pageLogo");


// Make sure theme button exists
if (themeToggle) {

  themeToggle.addEventListener("click", function () {

    // Toggle Light Mode
    document.body.classList.toggle("light-mode");

    // Toggle Dark Mode
    document.body.classList.toggle("dark-mode");


    // Check Current Mode
    const isLightMode =
      document.body.classList.contains("light-mode");


    // =========================================
    // CHANGE LOGO
    // =========================================

    if (pageLogo) {

      if (isLightMode) {

        // Light Mode Logo
        pageLogo.src = "../images/logo-light.png";

      } else {

        // Dark Mode Logo
        pageLogo.src = "../images/logo-dark.png";

      }

    }


    // =========================================
    // CHANGE THEME ICON
    // =========================================

    themeToggle.innerHTML = isLightMode
      ? '<i data-lucide="sun"></i>'
      : '<i data-lucide="moon"></i>';


    // Reinitialize Lucide Icons
    lucide.createIcons();


    // =========================================
    // SAVE THEME
    // =========================================

    localStorage.setItem(
      "gripcoreTheme",
      isLightMode ? "light" : "dark"
    );

  });

}


/* =========================================================
   LOAD SAVED DARK / LIGHT MODE
========================================================= */

const savedTheme =
  localStorage.getItem("gripcoreTheme");


if (savedTheme === "dark") {

  // Enable Dark Mode
  document.body.classList.add("dark-mode");

  document.body.classList.remove("light-mode");


  // Change Logo
  if (pageLogo) {

    pageLogo.src =
      "../images/logo-dark.png";

  }


  // Change Icon
  if (themeToggle) {

    themeToggle.innerHTML =
      '<i data-lucide="moon"></i>';

  }

} else {

  // Default Light Mode
  document.body.classList.add("light-mode");

  document.body.classList.remove("dark-mode");


  // Change Logo
  if (pageLogo) {

    pageLogo.src =
      "../images/logo-light.png";

  }


  // Change Icon
  if (themeToggle) {

    themeToggle.innerHTML =
      '<i data-lucide="sun"></i>';

  }

}


// Reinitialize Icons
lucide.createIcons();


/* =========================================================
   RTL TOGGLE
========================================================= */

const rtlToggle =
  document.getElementById("rtlToggle");


if (rtlToggle) {

  rtlToggle.addEventListener("click", function () {

    // Toggle RTL
    document.body.classList.toggle("rtl");


    // Check RTL
    const isRTL =
      document.body.classList.contains("rtl");


    // Change Direction
    document.documentElement.dir =
      isRTL ? "rtl" : "ltr";


    // Save RTL Preference
    localStorage.setItem(
      "gripcoreRTL",
      isRTL ? "true" : "false"
    );

  });

}


/* =========================================================
   LOAD SAVED RTL MODE
========================================================= */

const savedRTL =
  localStorage.getItem("gripcoreRTL");


if (savedRTL === "true") {

  document.body.classList.add("rtl");

  document.documentElement.dir = "rtl";

} else {

  document.body.classList.remove("rtl");

  document.documentElement.dir = "ltr";

}


/* =========================================================
   APPOINTMENT FORM
========================================================= */

const appointmentForm =
  document.getElementById("appointmentForm");


if (appointmentForm) {

  appointmentForm.addEventListener(
    "submit",
    function (event) {

      event.preventDefault();


      alert(
        "Your appointment request has been submitted successfully!"
      );


      appointmentForm.reset();

    }
  );

}