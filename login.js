/* =========================================
   INITIALIZE LUCIDE ICONS
========================================= */

lucide.createIcons();


/* =========================================
   DARK / LIGHT MODE
========================================= */

const themeToggle =
  document.getElementById("themeToggle");

const pageLogo =
  document.getElementById("pageLogo");


/* =========================================
   UPDATE THEME
========================================= */

function updateLoginTheme() {

  const isDarkMode =
    document.body.classList.contains("dark-mode");


  /* ===============================
     UPDATE LOGO
  =============================== */

  if (pageLogo) {

    pageLogo.src = isDarkMode
      ? "../images/logo-dark.png"
      : "../images/logo-light.png";

  }


  /* ===============================
     UPDATE THEME ICON
  =============================== */

  if (themeToggle) {

    themeToggle.innerHTML = isDarkMode
      ? '<i data-lucide="sun"></i>'
      : '<i data-lucide="moon"></i>';

    lucide.createIcons();

  }

}


/* =========================================
   DARK / LIGHT MODE TOGGLE
========================================= */

if (themeToggle) {

  themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    const isDarkMode =
      document.body.classList.contains("dark-mode");


    /* Save Theme */

    localStorage.setItem(
      "gripcore-theme",
      isDarkMode ? "dark" : "light"
    );


    /* Update Logo + Icon */

    updateLoginTheme();

  });

}


/* =========================================
   LOAD SAVED THEME
========================================= */

const savedTheme =
  localStorage.getItem("gripcore-theme");


if (savedTheme === "dark") {

  document.body.classList.add("dark-mode");

}


/* =========================================
   APPLY THEME
========================================= */

updateLoginTheme();



/* =========================================
   RTL TOGGLE
========================================= */

const rtlToggle =
  document.getElementById("rtlToggle");


if (rtlToggle) {

  rtlToggle.addEventListener("click", function () {

    document.body.classList.toggle("rtl");

    const isRTL =
      document.body.classList.contains("rtl");

    document.documentElement.dir =
      isRTL ? "rtl" : "ltr";

    localStorage.setItem(
      "gripcore-direction",
      isRTL ? "rtl" : "ltr"
    );

  });

}


/* =========================================
   LOAD SAVED RTL
========================================= */

const savedDirection =
  localStorage.getItem("gripcore-direction");


if (savedDirection === "rtl") {

  document.body.classList.add("rtl");

  document.documentElement.dir = "rtl";

}



/* =========================================
   PASSWORD SHOW / HIDE
========================================= */

const passwordInput =
  document.getElementById("password");

const passwordToggle =
  document.getElementById("passwordToggle");


if (passwordToggle && passwordInput) {

  passwordToggle.addEventListener("click", function () {

    const isPassword =
      passwordInput.type === "password";

    passwordInput.type =
      isPassword ? "text" : "password";


    passwordToggle.innerHTML =
      isPassword
        ? '<i data-lucide="eye-off"></i>'
        : '<i data-lucide="eye"></i>';


    lucide.createIcons();

  });

}



/* =========================================
   LOGIN FORM
========================================= */

const loginForm =
  document.getElementById("loginForm");


if (loginForm) {

  loginForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const email =
      document.getElementById("email").value.trim();

    const password =
      document.getElementById("password").value.trim();


    if (!email || !password) {

      alert("Please enter your email and password.");

      return;

    }


    // Demo login
    alert("Login successful!");

  });

}