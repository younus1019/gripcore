
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
 
 
    /* Save Theme — SAME KEY as main.js ("theme"), not "gripcore-theme" */
 
    localStorage.setItem(
      "theme",
      isDarkMode ? "dark" : "light"
    );
 
 
    /* Update Logo + Icon */
 
    updateSignupTheme();
 
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
   APPLY SAVED THEME
========================================= */
 
updateSignupTheme();
 
 
 
/* =========================================
   RTL TOGGLE
   (aligned to main.js: key "rtlMode",
   class "rtl-mode" on <html>, not "rtl" on <body>)
========================================= */
 
const rtlToggle =
  document.getElementById("rtlToggle");
 
 
if (rtlToggle) {
 
  rtlToggle.addEventListener("click", () => {
 
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