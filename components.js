

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
}


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



function updateTheme() {
  const headerLogo = document.getElementById("headerLogo");
  const footerLogo = document.getElementById("footerLogo");
  const darkModeBtn = document.getElementById("darkModeBtn");

  const isDark = document.body.classList.contains("dark-mode");

  if (isDark) {
    if (headerLogo) {
      headerLogo.src = "../images/logo-dark.png";
    }

    if (footerLogo) {
      footerLogo.src = "../images/logo-dark.png";
    }

    if (darkModeBtn) {
      darkModeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';

      darkModeBtn.title = "Light Mode";
    }
  } else {
    if (headerLogo) {
      headerLogo.src = "../images/logo-light.png";
    }

    if (footerLogo) {
      footerLogo.src = "../images/logo-light.png";
    }

    if (darkModeBtn) {
      darkModeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';

      darkModeBtn.title = "Dark Mode";
    }
  }
}



function initializeNavbar() {
 

  const menuBtn = document.querySelector(".menu-btn");
  const menu = document.querySelector(".menu");

  if (menuBtn && menu) {
    menuBtn.addEventListener("click", () => {
      menu.classList.toggle("active");
    });
  }

  

  document.querySelectorAll(".dropdown > a").forEach((link) => {
    link.addEventListener("click", function (e) {
      if (window.innerWidth <= 1024) {
        e.preventDefault();

        const parent = this.parentElement;

        document.querySelectorAll(".dropdown").forEach((item) => {
          if (item !== parent) {
            item.classList.remove("active");
          }
        });

        parent.classList.toggle("active");
      }
    });
  });



  const darkModeBtn = document.getElementById("darkModeBtn");

  if (darkModeBtn) {
    darkModeBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");

      if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }

      updateTheme();
    });
  }



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



function setActiveNavLink() {
  let currentPage = window.location.pathname.split("/").pop();

  if (currentPage === "" || currentPage === "/") {
    currentPage = "index.html";
  }

  document.querySelectorAll(".menu a").forEach((link) => {
    link.classList.remove("active");

    const href = link.getAttribute("href");

    if (!href || href === "#") return;

    const linkPage = href.split("/").pop();

    if (linkPage === currentPage) {
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



function initializeFooter() {
  const footerLogo = document.getElementById("footerLogo");

  if (footerLogo) {
    if (document.body.classList.contains("dark-mode")) {
      footerLogo.src = "../images/logo-dark.png";
    } else {
      footerLogo.src = "../images/logo-light.png";
    }
  }
}



window.addEventListener("resize", () => {
  const menu = document.querySelector(".menu");

  if (window.innerWidth > 1024 && menu) {
    menu.classList.remove("active");
  }
});



document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }

  updateTheme();
});
