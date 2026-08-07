
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
 
 
    /* Save Theme — SAME KEY as main.js ("theme"), not "gripcore-theme" */
 
    localStorage.setItem(
      "theme",
      isDarkMode ? "dark" : "light"
    );
 
 
    /* Update Logo + Icon */
 
    updateLoginTheme();
 
  });
 
}
 
 
/* =========================================
   LOAD SAVED THEME
   (same key as main.js: "theme")
========================================= */
 
const savedTheme =
  localStorage.getItem("theme");
 
 
if (savedTheme === "dark") {
 
  document.body.classList.add("dark-mode");
 
} else {
 
  document.body.classList.remove("dark-mode");
 
}
 
 
/* =========================================
   APPLY THEME
========================================= */
 
updateLoginTheme();
 
 
 
/* =========================================
   RTL TOGGLE
   (aligned to main.js: key "rtlMode",
   class "rtl-mode" on <html>, not "rtl" on <body>)
========================================= */
 
const rtlToggle =
  document.getElementById("rtlToggle");
 
 
if (rtlToggle) {
 
  rtlToggle.addEventListener("click", function () {
 
    document.documentElement.classList.toggle("rtl-mode");
 
    const isRTL =
      document.documentElement.classList.contains("rtl-mode");
 
    document.documentElement.setAttribute(
      "dir",
      isRTL ? "rtl" : "ltr"
    );
 
    localStorage.setItem("rtlMode", isRTL);
 
  });
 
}
 
 
/* =========================================
   LOAD SAVED RTL
   (same key/class as main.js)
========================================= */
 
const savedRTL =
  localStorage.getItem("rtlMode");
 
 
if (savedRTL === "true") {
 
  document.documentElement.classList.add("rtl-mode");
 
  document.documentElement.setAttribute("dir", "rtl");
 
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