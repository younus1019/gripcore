// =========================================
// PREMIUM HERO SLIDER
// =========================================

const heroSlides = document.querySelectorAll(".hero-slide");

const nextHeroBtn = document.querySelector(".hero-next");

const prevHeroBtn = document.querySelector(".hero-prev");

const currentSlideNumber = document.querySelector(".current-slide");

const progressBar = document.querySelector(".hero-progress span");

let currentHeroSlide = 0;

let heroTimer;

const totalHeroSlides = heroSlides.length;

// =========================================
// SHOW SLIDE
// =========================================

function showHeroSlide(index) {
  // Remove active from all slides

  heroSlides.forEach((slide) => {
    slide.classList.remove("active");
  });

  // Add active to current slide

  heroSlides[index].classList.add("active");

  // Update counter

  currentSlideNumber.textContent = String(index + 1).padStart(2, "0");

  // Restart progress animation

  progressBar.style.animation = "none";

  progressBar.offsetHeight;

  progressBar.style.animation = "progressAnimation 5s linear";
}

// =========================================
// NEXT SLIDE
// =========================================

function nextHeroSlide() {
  currentHeroSlide++;

  if (currentHeroSlide >= totalHeroSlides) {
    currentHeroSlide = 0;
  }

  showHeroSlide(currentHeroSlide);

  restartHeroTimer();
}

// =========================================
// PREVIOUS SLIDE
// =========================================

function previousHeroSlide() {
  currentHeroSlide--;

  if (currentHeroSlide < 0) {
    currentHeroSlide = totalHeroSlides - 1;
  }

  showHeroSlide(currentHeroSlide);

  restartHeroTimer();
}

// =========================================
// AUTO SLIDER
// =========================================

function startHeroTimer() {
  heroTimer = setInterval(() => {
    currentHeroSlide++;

    if (currentHeroSlide >= totalHeroSlides) {
      currentHeroSlide = 0;
    }

    showHeroSlide(currentHeroSlide);
  }, 5000);
}

// =========================================
// RESTART TIMER
// =========================================

function restartHeroTimer() {
  clearInterval(heroTimer);

  startHeroTimer();
}

// =========================================
// BUTTON EVENTS
// =========================================

nextHeroBtn.addEventListener("click", nextHeroSlide);

prevHeroBtn.addEventListener("click", previousHeroSlide);

// =========================================
// START SLIDER
// =========================================

showHeroSlide(0);

startHeroTimer();

// =========================================
// ANIMATED STATISTICS
// =========================================

const statNumbers = document.querySelectorAll(".stat-item strong");

let statsStarted = false;

function animateStats() {
  if (statsStarted) return;

  statsStarted = true;

  statNumbers.forEach((counter) => {
    const target = Number(counter.getAttribute("data-target"));

    let current = 0;

    const increment = target / 80;

    function updateCounter() {
      current += increment;

      if (current < target) {
        counter.textContent = Math.floor(current).toLocaleString();

        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target.toLocaleString();
      }
    }

    updateCounter();
  });
}

// =========================================
// INTERSECTION OBSERVER
// =========================================

const statsSection = document.querySelector(".about-stats");

const statsObserver = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      animateStats();

      statsObserver.disconnect();
    }
  },

  {
    threshold: 0.4,
  },
);

if (statsSection) {
  statsObserver.observe(statsSection);
}

// =========================================
// RTL MODE TOGGLE
// =========================================

document.addEventListener("DOMContentLoaded", function () {
  const rtlBtn = document.getElementById("rtlBtn");

  if (!rtlBtn) {
    console.warn("rtlBtn not found");
    return;
  }

  rtlBtn.addEventListener("click", function () {
    // Toggle RTL direction
    document.documentElement.classList.toggle("rtl-mode");

    // Check if RTL is active
    const isRTL = document.documentElement.classList.contains("rtl-mode");

    // Change HTML direction
    if (isRTL) {
      document.documentElement.setAttribute("dir", "rtl");
      rtlBtn.title = "LTR Mode";
    } else {
      document.documentElement.setAttribute("dir", "ltr");
      rtlBtn.title = "RTL Mode";
    }
  });
});

/* =========================================
   TYRE FINDER
========================================= */

document.addEventListener("DOMContentLoaded", () => {
  const findTyreBtn = document.getElementById("findTyreBtn");

  const vehicleType = document.getElementById("vehicleType");

  const tyreBrand = document.getElementById("tyreBrand");

  const tyreSize = document.getElementById("tyreSize");

  const resultBox = document.getElementById("tyreFinderResult");

  const resultTitle = document.getElementById("resultTitle");

  const resultText = document.getElementById("resultText");

  /* Stop if Tyre Finder is not on this page */

  if (!findTyreBtn || !vehicleType || !tyreBrand || !tyreSize || !resultBox) {
    return;
  }

  /* =========================================
     FIND TYRE BUTTON
  ========================================= */

  findTyreBtn.addEventListener("click", () => {
    const selectedVehicle = vehicleType.value;

    const selectedBrand = tyreBrand.value;

    const selectedSize = tyreSize.value;

    /* =========================================
       VALIDATION
    ========================================= */

    if (selectedVehicle === "" || selectedBrand === "" || selectedSize === "") {
      resultBox.classList.add("show");

      resultTitle.textContent = "Please complete your tyre search.";

      resultText.textContent =
        "Select your vehicle type, preferred brand, and tyre size to continue.";

      return;
    }

    /* =========================================
       FORMAT BRAND NAME
    ========================================= */

    const brandName =
      selectedBrand.charAt(0).toUpperCase() + selectedBrand.slice(1);

    /* =========================================
       FORMAT VEHICLE NAME
    ========================================= */

    const vehicleName =
      selectedVehicle.charAt(0).toUpperCase() + selectedVehicle.slice(1);

    /* =========================================
       DISPLAY RESULT
    ========================================= */

    resultTitle.textContent = `${brandName} Tyres — ${selectedSize}`;

    resultText.textContent = `Recommended for your ${vehicleName}. Our GripCore experts can help you confirm compatibility, availability, and professional fitment.`;

    resultBox.classList.add("show");

    /* =========================================
       SCROLL RESULT INTO VIEW
    ========================================= */

    setTimeout(() => {
      resultBox.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }, 100);
  });
});

/* =========================================
   SERVICE CENTER GALLERY LIGHTBOX
========================================= */

document.addEventListener("DOMContentLoaded", () => {
  const galleryButtons = document.querySelectorAll(".gallery-view");

  const lightbox = document.getElementById("galleryLightbox");

  const lightboxImage = document.getElementById("lightboxImage");

  const lightboxTitle = document.getElementById("lightboxTitle");

  const lightboxClose = document.getElementById("lightboxClose");

  /* =====================================
     OPEN LIGHTBOX
  ====================================== */

  galleryButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();

      const image = button.getAttribute("data-image");

      const title = button.getAttribute("data-title");

      lightboxImage.src = image;

      lightboxImage.alt = title;

      lightboxTitle.textContent = title;

      lightbox.classList.add("active");

      document.body.style.overflow = "hidden";
    });
  });

  /* =====================================
     CLOSE LIGHTBOX
  ====================================== */

  function closeLightbox() {
    lightbox.classList.remove("active");

    document.body.style.overflow = "";
  }

  lightboxClose.addEventListener("click", closeLightbox);

  /* =====================================
     CLOSE WHEN CLICKING OUTSIDE IMAGE
  ====================================== */

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  /* =====================================
     ESC KEY
  ====================================== */

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox.classList.contains("active")) {
      closeLightbox();
    }
  });
});
