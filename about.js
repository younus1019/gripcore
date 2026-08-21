

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

    updateTheme();
  })
  .catch((error) => {
    console.error("Navbar Error:", error);
  });




fetch("../components/footer.html")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Footer could not be loaded");
    }

    return response.text();
  })
  .then((data) => {
    document.getElementById("footer").innerHTML = data;

    updateTheme();
  })
  .catch((error) => {
    console.error("Footer Error:", error);
  });




function initializeNavbar() {

  const menuBtn =
    document.querySelector(".menu-btn");

  const menu =
    document.querySelector(".menu");


  // MOBILE MENU

  if (menuBtn && menu) {

    menuBtn.addEventListener("click", () => {

      menu.classList.toggle("active");

    });

  }




  const darkModeBtn =
    document.getElementById("darkModeBtn");


  if (darkModeBtn) {

    darkModeBtn.addEventListener("click", () => {

      document.body.classList.toggle("dark-mode");

      updateTheme();

    });

  }




  const rtlBtn =
    document.getElementById("rtlBtn");


  if (rtlBtn) {

    rtlBtn.addEventListener("click", () => {

      document.documentElement.classList.toggle(
        "rtl-mode"
      );

      const isRTL =
        document.documentElement.classList.contains(
          "rtl-mode"
        );


      document.documentElement.setAttribute(
        "dir",
        isRTL ? "rtl" : "ltr"
      );


      rtlBtn.title =
        isRTL ? "LTR Mode" : "RTL Mode";


      localStorage.setItem(
        "rtlMode",
        isRTL ? "true" : "false"
      );

    });

  }

}




function updateTheme() {

  const headerLogo =
    document.getElementById("headerLogo");

  const footerLogo =
    document.getElementById("footerLogo");

  const darkModeBtn =
    document.getElementById("darkModeBtn");


  const isDark =
    document.body.classList.contains(
      "dark-mode"
    );


  if (isDark) {

    if (headerLogo) {

      headerLogo.src =
        "../images/logo-dark.png";

    }

    if (footerLogo) {

      footerLogo.src =
        "../images/logo-dark.png";

    }

    if (darkModeBtn) {

      darkModeBtn.innerHTML =
        '<i class="fa-solid fa-sun"></i>';

      darkModeBtn.title =
        "Light Mode";

    }

  } else {

    if (headerLogo) {

      headerLogo.src =
        "../images/logo-light.png";

    }

    if (footerLogo) {

      footerLogo.src =
        "../images/logo-light.png";

    }

    if (darkModeBtn) {

      darkModeBtn.innerHTML =
        '<i class="fa-solid fa-circle-half-stroke"></i>';

      darkModeBtn.title =
        "Dark Mode";

    }

  }

}



lucide.createIcons();