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
   UPDATE SIGNUP THEME
========================================= */

function updateSignupTheme() {

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

  themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    const isDarkMode =
      document.body.classList.contains("dark-mode");


    /* Save Theme */

    localStorage.setItem(
      "gripcore-theme",
      isDarkMode ? "dark" : "light"
    );


    /* Update Logo + Icon */

    updateSignupTheme();

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
   APPLY SAVED THEME
========================================= */

updateSignupTheme();



/* =========================================
   RTL TOGGLE
========================================= */

const rtlToggle =
  document.getElementById("rtlToggle");


if (rtlToggle) {

  rtlToggle.addEventListener("click", () => {

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

const passwordToggles =
  document.querySelectorAll(".password-toggle");


passwordToggles.forEach((button) => {

  button.addEventListener("click", () => {

    const targetId =
      button.getAttribute("data-target");

    const input =
      document.getElementById(targetId);

    if (!input) return;

    const isPassword =
      input.type === "password";

    input.type =
      isPassword ? "text" : "password";


    button.innerHTML = `
      <i data-lucide="${isPassword ? "eye-off" : "eye"}"></i>
    `;

    lucide.createIcons();

  });

});



/* =========================================
   SIGNUP FORM
========================================= */

const signupForm =
  document.getElementById("signupForm");


if (signupForm) {

  signupForm.addEventListener("submit", (event) => {

    event.preventDefault();


    const password =
      document.getElementById("password").value;

    const confirmPassword =
      document.getElementById("confirmPassword").value;


    if (password !== confirmPassword) {

      alert("Passwords do not match.");

      return;

    }


    alert("Account created successfully!");

    signupForm.reset();

  });

}