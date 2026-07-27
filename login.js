/* =========================================
   INITIALIZE LUCIDE ICONS
========================================= */

lucide.createIcons();


/* =========================================
   DARK / LIGHT MODE
========================================= */

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {

  document.body.classList.toggle("dark-mode");

  const isDarkMode =
    document.body.classList.contains("dark-mode");

  localStorage.setItem(
    "gripcore-theme",
    isDarkMode ? "dark" : "light"
  );

  themeToggle.innerHTML = isDarkMode
    ? '<i data-lucide="sun"></i>'
    : '<i data-lucide="moon"></i>';

  lucide.createIcons();

});


/* =========================================
   LOAD SAVED THEME
========================================= */

const savedTheme =
  localStorage.getItem("gripcore-theme");

if (savedTheme === "dark") {

  document.body.classList.add("dark-mode");

  themeToggle.innerHTML =
    '<i data-lucide="sun"></i>';

  lucide.createIcons();

}


/* =========================================
   RTL TOGGLE
========================================= */

const rtlToggle =
  document.getElementById("rtlToggle");

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


/* =========================================
   LOGIN FORM
========================================= */

const loginForm =
  document.getElementById("loginForm");


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