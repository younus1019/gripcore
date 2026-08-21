

const heroSlides = document.querySelectorAll(".hero-slide");

const nextHeroBtn = document.querySelector(".hero-next");

const prevHeroBtn = document.querySelector(".hero-prev");

const currentSlideNumber = document.querySelector(".current-slide");

const progressBar = document.querySelector(".hero-progress span");

let currentHeroSlide = 0;

let heroTimer;

const totalHeroSlides = heroSlides.length;



function showHeroSlide(index) {


  heroSlides.forEach((slide) => {
    slide.classList.remove("active");
  });

  

  heroSlides[index].classList.add("active");

  

  currentSlideNumber.textContent = String(index + 1).padStart(2, "0");

  

  progressBar.style.animation = "none";

  progressBar.offsetHeight;

  progressBar.style.animation = "progressAnimation 5s linear";
}



function nextHeroSlide() {
  currentHeroSlide++;

  if (currentHeroSlide >= totalHeroSlides) {
    currentHeroSlide = 0;
  }

  showHeroSlide(currentHeroSlide);

  restartHeroTimer();
}



function previousHeroSlide() {
  currentHeroSlide--;

  if (currentHeroSlide < 0) {
    currentHeroSlide = totalHeroSlides - 1;
  }

  showHeroSlide(currentHeroSlide);

  restartHeroTimer();
}



function startHeroTimer() {
  heroTimer = setInterval(() => {
    currentHeroSlide++;

    if (currentHeroSlide >= totalHeroSlides) {
      currentHeroSlide = 0;
    }

    showHeroSlide(currentHeroSlide);
  }, 5000);
}



function restartHeroTimer() {
  clearInterval(heroTimer);

  startHeroTimer();
}



nextHeroBtn.addEventListener("click", nextHeroSlide);

prevHeroBtn.addEventListener("click", previousHeroSlide);



showHeroSlide(0);

startHeroTimer();



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



document.addEventListener("DOMContentLoaded", function () {
  const rtlBtn = document.getElementById("rtlBtn");

  if (!rtlBtn) {
    console.warn("rtlBtn not found");
    return;
  }

  rtlBtn.addEventListener("click", function () {
  
    document.documentElement.classList.toggle("rtl-mode");

  
    const isRTL = document.documentElement.classList.contains("rtl-mode");

    
    if (isRTL) {
      document.documentElement.setAttribute("dir", "rtl");
      rtlBtn.title = "LTR Mode";
    } else {
      document.documentElement.setAttribute("dir", "ltr");
      rtlBtn.title = "RTL Mode";
    }
  });
});



document.addEventListener("DOMContentLoaded", () => {
  const findTyreBtn = document.getElementById("findTyreBtn");

  const vehicleType = document.getElementById("vehicleType");

  const tyreBrand = document.getElementById("tyreBrand");

  const tyreSize = document.getElementById("tyreSize");

  const resultBox = document.getElementById("tyreFinderResult");

  const resultTitle = document.getElementById("resultTitle");

  const resultText = document.getElementById("resultText");

 

  if (!findTyreBtn || !vehicleType || !tyreBrand || !tyreSize || !resultBox) {
    return;
  }

 

  findTyreBtn.addEventListener("click", () => {
    const selectedVehicle = vehicleType.value;

    const selectedBrand = tyreBrand.value;

    const selectedSize = tyreSize.value;

    

    if (selectedVehicle === "" || selectedBrand === "" || selectedSize === "") {
      resultBox.classList.add("show");

      resultTitle.textContent = "Please complete your tyre search.";

      resultText.textContent =
        "Select your vehicle type, preferred brand, and tyre size to continue.";

      return;
    }

   

    const brandName =
      selectedBrand.charAt(0).toUpperCase() + selectedBrand.slice(1);

   

    const vehicleName =
      selectedVehicle.charAt(0).toUpperCase() + selectedVehicle.slice(1);


    resultTitle.textContent = `${brandName} Tyres — ${selectedSize}`;

    resultText.textContent = `Recommended for your ${vehicleName}. Our GripCore experts can help you confirm compatibility, availability, and professional fitment.`;

    resultBox.classList.add("show");


    setTimeout(() => {
      resultBox.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }, 100);
  });
});



document.addEventListener("DOMContentLoaded", () => {
  const galleryButtons = document.querySelectorAll(".gallery-view");

  const lightbox = document.getElementById("galleryLightbox");

  const lightboxImage = document.getElementById("lightboxImage");

  const lightboxTitle = document.getElementById("lightboxTitle");

  const lightboxClose = document.getElementById("lightboxClose");



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

 

  function closeLightbox() {
    lightbox.classList.remove("active");

    document.body.style.overflow = "";
  }

  lightboxClose.addEventListener("click", closeLightbox);



  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

 

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox.classList.contains("active")) {
      closeLightbox();
    }
  });
});
