// =========================================
// LOAD NAVBAR
// =========================================

fetch("../components/navbar.html")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Navbar could not be loaded");
    }

    return response.text();
  })
  .then((data) => {
    document.getElementById("navbar").innerHTML = data;

    // Initialize Navbar
    initializeNavbar();
    setActiveNavLink();

    // Apply saved theme after navbar loads
    updateTheme();
  })
  .catch((error) => {
    console.error("Navbar Error:", error);
  });

// =========================================
// LOAD FOOTER
// =========================================

fetch("../components/footer.html")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Footer could not be loaded");
    }

    return response.text();
  })
  .then((data) => {
    document.getElementById("footer").innerHTML = data;

    // Initialize Footer
    initializeFooter();

    // Apply same theme to footer logo
    updateTheme();
  })
  .catch((error) => {
    console.error("Footer Error:", error);
  });

// =========================================
// UPDATE THEME
// HEADER + FOOTER LOGOS
// =========================================

function updateTheme() {
  // Get Header Logo
  const headerLogo = document.getElementById("headerLogo");

  // Get Footer Logo
  const footerLogo = document.getElementById("footerLogo");

  // Get Dark Mode Button
  const darkModeBtn = document.getElementById("darkModeBtn");

  // Check Dark Mode
  const isDarkMode = document.body.classList.contains("dark-mode");

  // =========================================
  // DARK MODE
  // =========================================

  if (isDarkMode) {
    // Header Logo
    if (headerLogo) {
      headerLogo.src = "../images/logo-dark.png";
    }

    // Footer Logo
    if (footerLogo) {
      footerLogo.src = "../images/logo-dark.png";
    }

    // Change Icon
    if (darkModeBtn) {
      darkModeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';

      darkModeBtn.title = "Light Mode";
    }
  }

  // =========================================
  // LIGHT MODE
  // =========================================
  else {
    // Header Logo
    if (headerLogo) {
      headerLogo.src = "../images/logo-light.png";
    }

    // Footer Logo
    if (footerLogo) {
      footerLogo.src = "../images/logo-light.png";
    }

    // Change Icon
    if (darkModeBtn) {
      darkModeBtn.innerHTML = '<i class="fa-solid fa-circle-half-stroke"></i>';

      darkModeBtn.title = "Dark Mode";
    }
  }
}

// =========================================
// NAVBAR JAVASCRIPT
// =========================================
function initializeNavbar() {

  // ===============================

  // MOBILE MENU

  // ===============================



  const menuBtn = document.querySelector(".menu-btn");



  const menu = document.querySelector(".menu");



  if (menuBtn && menu) {

    menuBtn.addEventListener("click", () => {

      menu.classList.toggle("active");

    });

  }



  // ===============================

  // DARK MODE

  // ===============================



  const darkModeBtn = document.getElementById("darkModeBtn");



  if (darkModeBtn) {

    darkModeBtn.addEventListener("click", function () {

      // Toggle Dark Mode

      document.body.classList.toggle("dark-mode");



      // Update Header Logo

      // Update Footer Logo

      // Update Icon

      updateTheme();

    });

  }



  // ===============================

  // RTL MODE

  // ===============================



  const rtlBtn = document.getElementById("rtlBtn");



  if (rtlBtn) {

    rtlBtn.addEventListener("click", function () {

      // Toggle RTL

      document.documentElement.classList.toggle("rtl-mode");



      // Check RTL

      const isRTL = document.documentElement.classList.contains("rtl-mode");



      if (isRTL) {

        // Enable RTL

        document.documentElement.setAttribute("dir", "rtl");



        // Change Button Title

        rtlBtn.title = "LTR Mode";



        // Save Preference

        localStorage.setItem("rtlMode", "true");

      } else {

        // Enable LTR

        document.documentElement.setAttribute("dir", "ltr");



        // Change Button Title

        rtlBtn.title = "RTL Mode";



        // Save Preference

        localStorage.setItem("rtlMode", "false");

      }

    });

    // ===============================
    // LOAD SAVED RTL MODE
    // ===============================

    const savedRTL = localStorage.getItem("rtlMode");

    if (savedRTL === "true") {
      document.documentElement.classList.add("rtl-mode");

      document.documentElement.setAttribute("dir", "rtl");

      rtlBtn.title = "LTR Mode";
    }
  }
}

// =========================================
// SET ACTIVE NAV LINK
// =========================================

// =========================================
// SET ACTIVE NAV LINK
// =========================================

function setActiveNavLink() {

  let currentPage = window.location.pathname.split("/").pop();

  // Root URL
  if (currentPage === "" || currentPage === "/") {
    currentPage = "index.html";
  }

  // Remove active from all links
  document.querySelectorAll(".menu a").forEach((link) => {
    link.classList.remove("active");
  });


  // =========================================
  // CHECK ALL NAV LINKS
  // =========================================

  document.querySelectorAll(".menu a").forEach((link) => {

    const href = link.getAttribute("href");

    if (!href || href === "#") return;


    // Get only filename from href
    const linkPage = href.split("/").pop();


    // =========================================
    // DIRECT PAGE MATCH
    // =========================================

    if (linkPage === currentPage) {

      link.classList.add("active");


      // =========================================
      // IF DROPDOWN CHILD
      // ACTIVATE PARENT
      // =========================================

      const dropdown = link.closest(".dropdown");

      if (dropdown) {

        const parentLink = dropdown.querySelector(":scope > a");

        if (parentLink) {
          parentLink.classList.add("active");
        }

      }

    }

  });


  // =========================================
  // HOME PAGE FIX
  // =========================================

  if (currentPage === "index.html") {

    const homeLink = document.querySelector(
      '.menu a[href="index.html"], .menu a[href="./index.html"], .menu a[href="../index.html"]'
    );

    if (homeLink) {
      homeLink.classList.add("active");
    }

    // If Home is dropdown parent
    const homeDropdown = homeLink?.closest(".dropdown");

    if (homeDropdown) {

      const homeParent = homeDropdown.querySelector(":scope > a");

      if (homeParent) {
        homeParent.classList.add("active");
      }

    }

  }

}

// =========================================
// FOOTER JAVASCRIPT
// =========================================

function initializeFooter() {
  const footerLogo = document.getElementById("footerLogo");

  if (footerLogo) {
    console.log("Footer loaded successfully");
  }
}
