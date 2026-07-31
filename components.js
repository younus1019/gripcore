


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

    initializeNavbar();
    setActiveNavLink();
    updateTheme();
  })
  .catch((error) => console.error(error));

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

    initializeFooter();
    updateTheme();
  })
  .catch((error) => console.error(error));

// =========================================
// UPDATE THEME
// =========================================

function updateTheme() {
  const headerLogo = document.getElementById("headerLogo");
  const footerLogo = document.getElementById("footerLogo");
  const darkModeBtn = document.getElementById("darkModeBtn");

  const isDark = document.body.classList.contains("dark-mode");

  if (isDark) {
    if (headerLogo) headerLogo.src = "../images/logo-dark.png";
    if (footerLogo) footerLogo.src = "../images/logo-dark.png";

    if (darkModeBtn) {
      darkModeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
      darkModeBtn.title = "Light Mode";
    }
  } else {
    if (headerLogo) headerLogo.src = "../images/logo-light.png";
    if (footerLogo) footerLogo.src = "../images/logo-light.png";

    if (darkModeBtn) {
      darkModeBtn.innerHTML = '<i class="fa-solid fa-circle-half-stroke"></i>';
      darkModeBtn.title = "Dark Mode";
    }
  }
}

// =========================================
// INITIALIZE NAVBAR
// =========================================

function initializeNavbar() {
  // ==========================
  // MOBILE MENU
  // ==========================

  const menuBtn = document.querySelector(".menu-btn");
  const menu = document.querySelector(".menu");

  if (menuBtn && menu) {
    menuBtn.addEventListener("click", () => {
      menu.classList.toggle("active");
    });
  }

  // ==========================
  // MOBILE DROPDOWN
  // ==========================

  const dropdownLinks = document.querySelectorAll(".dropdown > a");

  dropdownLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      if (window.innerWidth <= 1024) {
        e.preventDefault();

        const parent = this.parentElement;

        // Close other dropdowns
        document.querySelectorAll(".dropdown").forEach((item) => {
          if (item !== parent) {
            item.classList.remove("active");
          }
        });

        parent.classList.toggle("active");
      }
    });
  });

  // ==========================
  // DARK MODE
  // ==========================

  const darkModeBtn = document.getElementById("darkModeBtn");

  if (darkModeBtn) {
    darkModeBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      updateTheme();
    });
  }

  // ==========================
  // RTL MODE
  // ==========================

  const rtlBtn = document.getElementById("rtlBtn");

  if (rtlBtn) {
    const savedRTL = localStorage.getItem("rtlMode");

    if (savedRTL === "true") {
      document.documentElement.classList.add("rtl-mode");
      document.documentElement.setAttribute("dir", "rtl");
      rtlBtn.title = "LTR Mode";
    }

    rtlBtn.addEventListener("click", () => {
      document.documentElement.classList.toggle("rtl-mode");

      const isRTL = document.documentElement.classList.contains("rtl-mode");

      if (isRTL) {
        document.documentElement.setAttribute("dir", "rtl");
        rtlBtn.title = "LTR Mode";
      } else {
        document.documentElement.setAttribute("dir", "ltr");
        rtlBtn.title = "RTL Mode";
      }

      localStorage.setItem("rtlMode", isRTL);
    });
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

  console.log("Current Page:", currentPage);

  if (currentPage === "" || currentPage === "/") {
    currentPage = "index.html";
  }

  document.querySelectorAll(".menu a").forEach((link) => {
    link.classList.remove("active");

    const href = link.getAttribute("href");

    if (!href || href === "#") return;

    const linkPage = href.split("/").pop();

    console.log("Link Page:", linkPage);

    if (linkPage === currentPage) {
      console.log("MATCH FOUND");

      link.classList.add("active");

      const dropdown = link.closest(".dropdown");

      if (dropdown) {
        const parentLink = dropdown.querySelector(":scope > a");

        if (parentLink) {
          parentLink.classList.add("active");
        }
      }
    }
  });
}

// =========================================
// INITIALIZE FOOTER
// =========================================

function initializeFooter() {
  const footerLogo = document.getElementById("footerLogo");

  if (footerLogo) {
    console.log("Footer loaded successfully");
  }
}
