
/*=========================================================
                    COMING SOON JS
=========================================================*/
 
document.addEventListener("DOMContentLoaded", function () {
 
 
    /*=====================================================
                        ELEMENTS
    =====================================================*/
 
    const darkModeToggle =
        document.getElementById("darkModeToggle");
 
    const rtlToggle =
        document.getElementById("rtlToggle");
 
    const comingLogo =
        document.getElementById("comingLogo");
 
    const countdownDays =
        document.getElementById("days");
 
    const countdownHours =
        document.getElementById("hours");
 
    const countdownMinutes =
        document.getElementById("minutes");
 
    const countdownSeconds =
        document.getElementById("seconds");
 
    const notifyForm =
        document.getElementById("notifyForm");
 
    const emailInput =
        document.getElementById("email");
 
    const notifyMessage =
        document.getElementById("notifyMessage");
 
 
    /*=====================================================
                        DARK MODE
    =====================================================*/
 
    const savedTheme =
        localStorage.getItem("theme");
 
 
    /*-----------------------------------------------------
                    LOAD SAVED THEME
    -----------------------------------------------------*/
 
    if (savedTheme === "dark") {
 
        document.body.classList.add("dark-mode");
 
        if (comingLogo) {
            comingLogo.src = "images/logo-dark.png";
        }
 
        if (darkModeToggle) {
            darkModeToggle.innerHTML =
                '<i class="fa-solid fa-sun"></i>';
 
            darkModeToggle.title = "Light Mode";
        }
 
    } else {
 
        document.body.classList.remove("dark-mode");
 
        if (comingLogo) {
            comingLogo.src = "images/logo-light.png";
        }
 
        if (darkModeToggle) {
            darkModeToggle.innerHTML =
                '<i class="fa-solid fa-moon"></i>';
 
            darkModeToggle.title = "Dark Mode";
        }
    }
 
 
    /*-----------------------------------------------------
                    DARK MODE TOGGLE
    -----------------------------------------------------*/
 
    if (darkModeToggle) {
 
        darkModeToggle.addEventListener("click", function () {
 
            document.body.classList.toggle("dark-mode");
 
            const isDark =
                document.body.classList.contains("dark-mode");
 
 
            /*---------------------------------------------
                        DARK MODE
            ---------------------------------------------*/
 
            if (isDark) {
 
                localStorage.setItem(
                    "theme",
                    "dark"
                );
 
                if (comingLogo) {
                    comingLogo.src =
                        "images/logo-dark.png";
                }
 
                darkModeToggle.innerHTML =
                    '<i class="fa-solid fa-sun"></i>';
 
                darkModeToggle.title =
                    "Light Mode";
 
            }
 
 
            /*---------------------------------------------
                        LIGHT MODE
            ---------------------------------------------*/
 
            else {
 
                localStorage.setItem(
                    "theme",
                    "light"
                );
 
                if (comingLogo) {
                    comingLogo.src =
                        "images/logo-light.png";
                }
 
                darkModeToggle.innerHTML =
                    '<i class="fa-solid fa-moon"></i>';
 
                darkModeToggle.title =
                    "Dark Mode";
            }
 
        });
 
    }
 
 
    /*=====================================================
                            RTL
    =====================================================*/
 
    const savedRTL =
        localStorage.getItem("rtlMode");
 
 
    /*-----------------------------------------------------
                    LOAD SAVED RTL
    -----------------------------------------------------*/
 
    if (savedRTL === "true") {
 
        document.documentElement.classList.add(
            "rtl-mode"
        );
 
        document.documentElement.setAttribute(
            "dir",
            "rtl"
        );
 
        if (rtlToggle) {
            rtlToggle.textContent = "LTR";
            rtlToggle.title = "Switch to LTR";
        }
 
    } else {
 
        document.documentElement.classList.remove(
            "rtl-mode"
        );
 
        document.documentElement.setAttribute(
            "dir",
            "ltr"
        );
 
        if (rtlToggle) {
            rtlToggle.textContent = "RTL";
            rtlToggle.title = "Switch to RTL";
        }
    }
 
 
    /*-----------------------------------------------------
                    RTL TOGGLE
    -----------------------------------------------------*/
 
    if (rtlToggle) {
 
        rtlToggle.addEventListener("click", function () {
 
            document.documentElement.classList.toggle(
                "rtl-mode"
            );
 
            const isRTL =
                document.documentElement.classList.contains(
                    "rtl-mode"
                );
 
 
            /*---------------------------------------------
                            RTL MODE
            ---------------------------------------------*/
 
            if (isRTL) {
 
                document.documentElement.setAttribute(
                    "dir",
                    "rtl"
                );
 
                rtlToggle.textContent = "LTR";
 
                rtlToggle.title =
                    "Switch to LTR";
 
                localStorage.setItem(
                    "rtlMode",
                    "true"
                );
 
            }
 
 
            /*---------------------------------------------
                            LTR MODE
            ---------------------------------------------*/
 
            else {
 
                document.documentElement.setAttribute(
                    "dir",
                    "ltr"
                );
 
                rtlToggle.textContent = "RTL";
 
                rtlToggle.title =
                    "Switch to RTL";
 
                localStorage.setItem(
                    "rtlMode",
                    "false"
                );
            }
 
        });
 
    }
 
 
    /*=====================================================
                        COUNTDOWN
    =====================================================*/
 
    /*
        Change this date when you want
        the website to launch.
    */
 
    const launchDate =
        new Date(
            "August 15, 2026 00:00:00"
        ).getTime();
 
 
    function updateCountdown() {
 
        const now =
            new Date().getTime();
 
        const distance =
            launchDate - now;
 
 
        /*---------------------------------------------
                    LAUNCH DATE REACHED
        ---------------------------------------------*/
 
        if (distance <= 0) {
 
            if (countdownDays) {
                countdownDays.textContent = "00";
            }
 
            if (countdownHours) {
                countdownHours.textContent = "00";
            }
 
            if (countdownMinutes) {
                countdownMinutes.textContent = "00";
            }
 
            if (countdownSeconds) {
                countdownSeconds.textContent = "00";
            }
 
            return;
        }
 
 
        /*---------------------------------------------
                    CALCULATE TIME
        ---------------------------------------------*/
 
        const days =
            Math.floor(
                distance /
                (1000 * 60 * 60 * 24)
            );
 
        const hours =
            Math.floor(
                (distance %
                    (1000 * 60 * 60 * 24)) /
                (1000 * 60 * 60)
            );
 
        const minutes =
            Math.floor(
                (distance %
                    (1000 * 60 * 60)) /
                (1000 * 60)
            );
 
        const seconds =
            Math.floor(
                (distance %
                    (1000 * 60)) /
                1000
            );
 
 
        /*---------------------------------------------
                    DISPLAY COUNTDOWN
        ---------------------------------------------*/
 
        if (countdownDays) {
 
            countdownDays.textContent =
                String(days).padStart(2, "0");
        }
 
        if (countdownHours) {
 
            countdownHours.textContent =
                String(hours).padStart(2, "0");
        }
 
        if (countdownMinutes) {
 
            countdownMinutes.textContent =
                String(minutes).padStart(2, "0");
        }
 
        if (countdownSeconds) {
 
            countdownSeconds.textContent =
                String(seconds).padStart(2, "0");
        }
 
    }
 
 
    /*-----------------------------------------------------
                    START COUNTDOWN
    -----------------------------------------------------*/
 
    updateCountdown();
 
    setInterval(
        updateCountdown,
        1000
    );
 
 
    /*=====================================================
                        NOTIFY ME
    =====================================================*/
 
    if (notifyForm) {
 
        notifyForm.addEventListener(
            "submit",
            function (event) {
 
                event.preventDefault();
 
 
                const email =
                    emailInput
                        ? emailInput.value.trim()
                        : "";
 
 
                /*-----------------------------------------
                        EMPTY EMAIL
                -----------------------------------------*/
 
                if (email === "") {
 
                    if (notifyMessage) {
 
                        notifyMessage.textContent =
                            "Please enter your email address.";
                    }
 
                    return;
                }
 
 
                /*-----------------------------------------
                        EMAIL VALIDATION
                -----------------------------------------*/
 
                const emailPattern =
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 
 
                if (!emailPattern.test(email)) {
 
                    if (notifyMessage) {
 
                        notifyMessage.textContent =
                            "Please enter a valid email address.";
                    }
 
                    return;
                }
 
 
                /*-----------------------------------------
                        SUCCESS MESSAGE
                -----------------------------------------*/
 
                if (notifyMessage) {
 
                    notifyMessage.textContent =
                        "Thank you! We'll notify you when we launch.";
                }
 
 
                /*-----------------------------------------
                        CLEAR INPUT
                -----------------------------------------*/
 
                if (emailInput) {
                    emailInput.value = "";
                }
 
            }
        );
 
    }
 
});
