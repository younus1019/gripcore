/* =========================================================
   GRIPCORE BOOK APPOINTMENT JS
========================================================= */

/* =========================================================
   DOM LOADED
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  // Initialize Lucide Icons
  lucide.createIcons();

  // Apply Saved Theme
  loadTheme();

  // Apply Saved RTL
  loadRTL();
});

/* =========================================================
   ELEMENTS
========================================================= */

const themeToggle = document.getElementById("themeToggle");

const rtlToggle = document.getElementById("rtlToggle");

const pageLogo = document.getElementById("pageLogo");

/* =========================================================
   UPDATE THEME UI
========================================================= */

function updateTheme() {
  const isDark = document.body.classList.contains("dark-mode");

  // ==========================
  // LOGO
  // ==========================

  if (pageLogo) {
    pageLogo.src = isDark
      ? "../images/logo-dark.png"
      : "../images/logo-light.png";
  }

  // ==========================
  // BUTTON ICON
  // ==========================

  if (themeToggle) {
    themeToggle.innerHTML = isDark
      ? '<i data-lucide="sun"></i>'
      : '<i data-lucide="moon"></i>';
  }

  lucide.createIcons();
}

/* =========================================================
   LOAD SAVED THEME
========================================================= */

function loadTheme() {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-mode");
  } else {
    document.body.classList.add("light-mode");
    document.body.classList.remove("dark-mode");
  }

  updateTheme();
}

/* =========================================================
   DARK MODE TOGGLE
========================================================= */

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");

    const isDark = document.body.classList.contains("dark-mode");

    localStorage.setItem("theme", isDark ? "dark" : "light");

    updateTheme();
  });
}

/* =========================================================
   LOAD RTL
========================================================= */

function loadRTL() {
  const savedRTL = localStorage.getItem("rtlMode");

  if (savedRTL === "true") {
    document.body.classList.add("rtl");

    document.documentElement.setAttribute("dir", "rtl");
  } else {
    document.body.classList.remove("rtl");

    document.documentElement.setAttribute("dir", "ltr");
  }
}

/* =========================================================
   RTL TOGGLE
========================================================= */

if (rtlToggle) {
  rtlToggle.addEventListener("click", () => {
    document.body.classList.toggle("rtl");

    const isRTL = document.body.classList.contains("rtl");

    document.documentElement.setAttribute("dir", isRTL ? "rtl" : "ltr");

    localStorage.setItem("rtlMode", isRTL);
  });
} /* =========================================================
   APPOINTMENT FORM
========================================================= */

const appointmentForm = document.getElementById("appointmentForm");

if (appointmentForm) {
  appointmentForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // =====================================
    // GET FORM VALUES
    // =====================================

    const fullName = document.getElementById("fullName")?.value.trim();

    const phone = document.getElementById("phone")?.value.trim();

    const email = document.getElementById("email")?.value.trim();

    const vehicle = document.getElementById("vehicle")?.value.trim();

    const service = document.getElementById("service")?.value;

    const appointmentDate = document.getElementById("appointmentDate")?.value;

    const appointmentTime = document.getElementById("appointmentTime")?.value;

    // =====================================
    // BASIC VALIDATION
    // =====================================

    if (
      !fullName ||
      !phone ||
      !email ||
      !vehicle ||
      !service ||
      !appointmentDate ||
      !appointmentTime
    ) {
      alert("Please fill in all required fields.");

      return;
    }

    // =====================================
    // SUCCESS
    // =====================================

    alert("Your appointment has been booked successfully!");

    appointmentForm.reset();
  });
}

/* =========================================================
   REINITIALIZE LUCIDE ICONS
========================================================= */

window.addEventListener("load", () => {
  updateTheme();

  loadRTL();

  lucide.createIcons();
});

/* =========================================================
   WINDOW RESIZE
========================================================= */

window.addEventListener("resize", () => {
  if (window.innerWidth > 1024) {
    document.body.classList.remove("menu-open");
  }
});

/* =========================================================
   PAGE SHOW (BACK/FORWARD CACHE SUPPORT)
========================================================= */

window.addEventListener("pageshow", () => {
  loadTheme();

  loadRTL();
});

/* =========================================================
   END OF FILE
========================================================= */
