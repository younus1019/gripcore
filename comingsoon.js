

document.addEventListener("DOMContentLoaded", function () {
  

  const darkModeToggle = document.getElementById("darkModeToggle");

  const rtlToggle = document.getElementById("rtlToggle");

  const comingLogo = document.getElementById("comingLogo");

  const countdownDays = document.getElementById("days");

  const countdownHours = document.getElementById("hours");

  const countdownMinutes = document.getElementById("minutes");

  const countdownSeconds = document.getElementById("seconds");

  const notifyForm = document.getElementById("notifyForm");

  const emailInput = document.getElementById("email");

  const notifyMessage = document.getElementById("notifyMessage");


  const savedTheme = localStorage.getItem("theme");



  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");

    if (comingLogo) {
      comingLogo.src = "images/logo-dark.png";
    }

    if (darkModeToggle) {
      darkModeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';

      darkModeToggle.title = "Light Mode";
    }
  } else {
    document.body.classList.remove("dark-mode");

    if (comingLogo) {
      comingLogo.src = "images/logo-light.png";
    }

    if (darkModeToggle) {
      darkModeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';

      darkModeToggle.title = "Dark Mode";
    }
  }



  if (darkModeToggle) {
    darkModeToggle.addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");

      const isDark = document.body.classList.contains("dark-mode");

    

      if (isDark) {
        localStorage.setItem("theme", "dark");

        if (comingLogo) {
          comingLogo.src = "images/logo-dark.png";
        }

        darkModeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';

        darkModeToggle.title = "Light Mode";
      } else {
       

        localStorage.setItem("theme", "light");

        if (comingLogo) {
          comingLogo.src = "images/logo-light.png";
        }

        darkModeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';

        darkModeToggle.title = "Dark Mode";
      }
    });
  }

 

  const savedRTL = localStorage.getItem("rtlMode");



  if (savedRTL === "true") {
    document.documentElement.classList.add("rtl-mode");

    document.documentElement.setAttribute("dir", "rtl");

    if (rtlToggle) {
      rtlToggle.innerHTML = '<i class="fa-solid fa-right-left"></i>';

      rtlToggle.title = "Switch to LTR";
    }
  } else {
    document.documentElement.classList.remove("rtl-mode");

    document.documentElement.setAttribute("dir", "ltr");

    if (rtlToggle) {
      rtlToggle.innerHTML = '<i class="fa-solid fa-right-left"></i>';

      rtlToggle.title = "Switch to RTL";
    }
  }

 

  if (rtlToggle) {
    rtlToggle.addEventListener("click", function () {
      document.documentElement.classList.toggle("rtl-mode");

      const isRTL = document.documentElement.classList.contains("rtl-mode");

      

      if (isRTL) {
        document.documentElement.setAttribute("dir", "rtl");

        rtlToggle.innerHTML = '<i class="fa-solid fa-right-left"></i>';

        rtlToggle.title = "Switch to LTR";

        localStorage.setItem("rtlMode", "true");
      } else {
        

        document.documentElement.setAttribute("dir", "ltr");

        rtlToggle.innerHTML = '<i class="fa-solid fa-right-left"></i>';

        rtlToggle.title = "Switch to RTL";

        localStorage.setItem("rtlMode", "false");
      }
    });
  }

 

  const launchDate = new Date("August 15, 2026 00:00:00").getTime();

  function updateCountdown() {
    const now = new Date().getTime();

    const distance = launchDate - now;

   

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



    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((distance % (1000 * 60)) / 1000);



    if (countdownDays) {
      countdownDays.textContent = String(days).padStart(2, "0");
    }

    if (countdownHours) {
      countdownHours.textContent = String(hours).padStart(2, "0");
    }

    if (countdownMinutes) {
      countdownMinutes.textContent = String(minutes).padStart(2, "0");
    }

    if (countdownSeconds) {
      countdownSeconds.textContent = String(seconds).padStart(2, "0");
    }
  }

 

  updateCountdown();

  setInterval(updateCountdown, 1000);

 

  if (notifyForm) {
    notifyForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const email = emailInput ? emailInput.value.trim() : "";

     

      if (email === "") {
        if (notifyMessage) {
          notifyMessage.textContent = "Please enter your email address.";
        }

        return;
      }

     

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailPattern.test(email)) {
        if (notifyMessage) {
          notifyMessage.textContent = "Please enter a valid email address.";
        }

        return;
      }

   

      if (notifyMessage) {
        notifyMessage.textContent =
          "Thank you! We'll notify you when we launch.";
      }

    

      if (emailInput) {
        emailInput.value = "";
      }
    });
  }
});
