/* =========================================
   LUCIDE ICONS
========================================= */

lucide.createIcons();


/* =========================================
   DARK MODE
========================================= */

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

  document.body.classList.toggle("dark-mode");

  const icon = document.body.classList.contains("dark-mode")
    ? "sun"
    : "moon";

  themeToggle.innerHTML = `
    <i data-lucide="${icon}"></i>
  `;

  lucide.createIcons();

});


/* =========================================
   RTL TOGGLE
========================================= */

const rtlToggle = document.getElementById("rtlToggle");

rtlToggle.addEventListener("click", () => {

  document.body.classList.toggle("rtl");

});


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