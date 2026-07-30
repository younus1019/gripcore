/*=========================================================
                    404 PAGE JAVASCRIPT
=========================================================*/


/*=========================================================
                    PAGE LOAD
=========================================================*/

document.addEventListener("DOMContentLoaded", function () {

    initialize404Page();

});


/*=========================================================
                    INITIALIZE 404 PAGE
=========================================================*/

function initialize404Page() {

    const darkModeToggle =
        document.getElementById("darkModeToggle");

    const rtlToggle =
        document.getElementById("rtlToggle");

    const errorLogoLink =
        document.getElementById("errorLogoLink");


    /*=====================================================
                    LOAD DARK MODE
    =====================================================*/

    const savedDarkMode =
        localStorage.getItem("darkMode");


    if (savedDarkMode === "true") {

        document.body.classList.add("dark-mode");

    }


    /*=====================================================
                    LOAD RTL MODE
    =====================================================*/

    const savedRTL =
        localStorage.getItem("rtlMode");


    if (savedRTL === "true") {

        document.documentElement.classList.add("rtl-mode");

        document.documentElement.setAttribute(
            "dir",
            "rtl"
        );

    } else {

        document.documentElement.classList.remove(
            "rtl-mode"
        );

        document.documentElement.setAttribute(
            "dir",
            "ltr"
        );

    }


    /*=====================================================
                    UPDATE CONTROLS
    =====================================================*/

    updateDarkModeIcon();

    updateRTLButton();

    updateErrorLogo();


    /*=====================================================
                    DARK MODE BUTTON
    =====================================================*/

    if (darkModeToggle) {

        darkModeToggle.addEventListener(
            "click",
            function () {

                document.body.classList.toggle(
                    "dark-mode"
                );


                const isDarkMode =
                    document.body.classList.contains(
                        "dark-mode"
                    );


                localStorage.setItem(
                    "darkMode",
                    isDarkMode
                );


                updateDarkModeIcon();

                updateErrorLogo();

            }
        );

    }


    /*=====================================================
                    RTL BUTTON
    =====================================================*/

    if (rtlToggle) {

        rtlToggle.addEventListener(
            "click",
            function () {

                document.documentElement.classList.toggle(
                    "rtl-mode"
                );


                const isRTL =
                    document.documentElement.classList.contains(
                        "rtl-mode"
                    );


                if (isRTL) {

                    document.documentElement.setAttribute(
                        "dir",
                        "rtl"
                    );

                    localStorage.setItem(
                        "rtlMode",
                        "true"
                    );

                } else {

                    document.documentElement.setAttribute(
                        "dir",
                        "ltr"
                    );

                    localStorage.setItem(
                        "rtlMode",
                        "false"
                    );

                }


                updateRTLButton();

            }
        );

    }


    /*=====================================================
                    LOGO CLICK
    =====================================================*/

    if (errorLogoLink) {

        errorLogoLink.addEventListener(
            "click",
            function () {

                window.location.href =
                    "index.html";

            }
        );

    }

}


/*=========================================================
                    DARK MODE ICON
=========================================================*/

function updateDarkModeIcon() {

    const darkModeToggle =
        document.getElementById("darkModeToggle");


    if (!darkModeToggle) return;


    const isDarkMode =
        document.body.classList.contains(
            "dark-mode"
        );


    if (isDarkMode) {

        darkModeToggle.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

        darkModeToggle.title =
            "Light Mode";

    } else {

        darkModeToggle.innerHTML =
            '<i class="fa-solid fa-moon"></i>';

        darkModeToggle.title =
            "Dark Mode";

    }

}


/*=========================================================
                    RTL BUTTON
=========================================================*/

function updateRTLButton() {

    const rtlToggle =
        document.getElementById("rtlToggle");


    if (!rtlToggle) return;


    const isRTL =
        document.documentElement.classList.contains(
            "rtl-mode"
        );


    if (isRTL) {

        rtlToggle.textContent = "LTR";

        rtlToggle.title = "LTR Mode";

    } else {

        rtlToggle.textContent = "RTL";

        rtlToggle.title = "RTL Mode";

    }

}


/*=========================================================
                    UPDATE ERROR LOGO
=========================================================*/

function updateErrorLogo() {

    const errorLogo =
        document.getElementById("errorLogo");


    if (!errorLogo) return;


    const isDarkMode =
        document.body.classList.contains(
            "dark-mode"
        );


    if (isDarkMode) {

        errorLogo.src =
            "images/logo-dark.png";

    } else {

        errorLogo.src =
            "images/logo-light.png";

    }

}