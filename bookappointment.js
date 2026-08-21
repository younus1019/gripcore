


document.addEventListener("DOMContentLoaded", () => {

  lucide.createIcons();

  
  loadTheme();

 
  loadRTL();
});



const themeToggle = document.getElementById("themeToggle");

const rtlToggle = document.getElementById("rtlToggle");

const pageLogo = document.getElementById("pageLogo");



function updateTheme() {
  const isDark = document.body.classList.contains("dark-mode");

 

  if (pageLogo) {
    pageLogo.src = isDark
      ? "../images/logo-dark.png"
      : "../images/logo-light.png";
  }

  

  if (themeToggle) {
    themeToggle.innerHTML = isDark
      ? '<i data-lucide="sun"></i>'
      : '<i data-lucide="moon"></i>';
  }

  lucide.createIcons();
}



function loadTheme() {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-mode");
  } else {
    document.body.classList.add("light-mode");
    document.body.classList.remove("dark-mode");
  }

  updateTheme();
}



if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");

    const isDark = document.body.classList.contains("dark-mode");

    localStorage.setItem("theme", isDark ? "dark" : "light");

    updateTheme();
  });
}



function loadRTL() {
  const savedRTL = localStorage.getItem("rtlMode");

  if (savedRTL === "true") {
    document.body.classList.add("rtl");

    document.documentElement.setAttribute("dir", "rtl");
  } else {
    document.body.classList.remove("rtl");

    document.documentElement.setAttribute("dir", "ltr");
  }
}



if (rtlToggle) {
  rtlToggle.addEventListener("click", () => {
    document.body.classList.toggle("rtl");

    const isRTL = document.body.classList.contains("rtl");

    document.documentElement.setAttribute("dir", isRTL ? "rtl" : "ltr");

    localStorage.setItem("rtlMode", isRTL);
  });
} 

const appointmentForm = document.getElementById("appointmentForm");

if (appointmentForm) {
  appointmentForm.addEventListener("submit", (event) => {
    event.preventDefault();

   

    const fullName = document.getElementById("fullName")?.value.trim();

    const phone = document.getElementById("phone")?.value.trim();

    const email = document.getElementById("email")?.value.trim();

    const vehicle = document.getElementById("vehicle")?.value.trim();

    const service = document.getElementById("service")?.value;

    const appointmentDate = document.getElementById("appointmentDate")?.value;

    const appointmentTime = document.getElementById("appointmentTime")?.value;

    

    if (
      !fullName ||
      !phone ||
      !email ||
      !vehicle ||
      !service ||
      !appointmentDate ||
      !appointmentTime
    ) {
      alert("Please fill in all required fields.");

      return;
    }



    alert("Your appointment has been booked successfully!");

    appointmentForm.reset();
  });
}



window.addEventListener("load", () => {
  updateTheme();

  loadRTL();

  lucide.createIcons();
});



window.addEventListener("resize", () => {
  if (window.innerWidth > 1024) {
    document.body.classList.remove("menu-open");
  }
});



window.addEventListener("pageshow", () => {
  loadTheme();

  loadRTL();
});


