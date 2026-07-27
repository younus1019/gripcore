// =========================================
// HOME 2 CINEMATIC HERO PARALLAX
// =========================================

const cinematicHero = document.querySelector(".cinematic-hero");

const heroImage = document.querySelector(".hero-image");

const heroContent = document.querySelector(".hero2-content");

if (cinematicHero) {
  cinematicHero.addEventListener("mousemove", function (event) {
    const x = (event.clientX / window.innerWidth - 0.5) * 2;

    const y = (event.clientY / window.innerHeight - 0.5) * 2;

    // Move background image

    heroImage.style.transform = `scale(1.08)
         translate(${x * -10}px,
                   ${y * -10}px)`;

    // Move content slightly

    heroContent.style.transform = `translate(${x * 5}px,
                   ${y * 5}px)`;
  });

  // Reset when mouse leaves

  cinematicHero.addEventListener("mouseleave", function () {
    heroImage.style.transform = "scale(1.08)";

    heroContent.style.transform = "translate(0, 0)";
  });
}

// =========================================
// THE PHILOSOPHY — SCROLL ANIMATION
// =========================================

const philosophySection = document.querySelector(".philosophy-section");

if (philosophySection) {
  const philosophyObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          philosophySection.classList.add("active");
        }
      });
    },

    {
      threshold: 0.25,
    },
  );

  philosophyObserver.observe(philosophySection);
}

// =========================================
// PHILOSOPHY — MOUSE PARALLAX
// =========================================

const philosophyVisual = document.querySelector(".philosophy-visual");

const philosophyImage = document.querySelector(".philosophy-image-wrapper");

if (philosophyVisual && philosophyImage) {
  philosophyVisual.addEventListener("mousemove", (event) => {
    const rect = philosophyVisual.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width - 0.5;

    const y = (event.clientY - rect.top) / rect.height - 0.5;

    philosophyImage.style.transform = `translate(
          ${x * 12}px,
          ${y * 12}px
        )`;
  });

  philosophyVisual.addEventListener("mouseleave", () => {
    philosophyImage.style.transform = "translate(0, 0)";
  });
}

// =========================================
// PRECISION LAB — SCROLL REVEAL
// =========================================

const precisionLab = document.querySelector(".precision-lab");

if (precisionLab) {
  const precisionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          precisionLab.classList.add("active");
        }
      });
    },

    {
      threshold: 0.2,
    },
  );

  precisionObserver.observe(precisionLab);
}

// =========================================
// PRECISION LAB — HOTSPOTS
// =========================================

const hotspots = document.querySelectorAll(".precision-hotspot");

const panels = document.querySelectorAll(".precision-panel");

hotspots.forEach((hotspot) => {
  hotspot.addEventListener("click", () => {
    const target = hotspot.dataset.target;

    // Remove active

    panels.forEach((panel) => {
      panel.classList.remove("active");
    });

    // Activate selected panel

    const selectedPanel = document.getElementById(target);

    if (selectedPanel) {
      selectedPanel.classList.add("active");

      selectedPanel.scrollIntoView({
        behavior: "smooth",

        block: "nearest",
      });
    }
  });
});

// =========================================
// PRECISION LAB — IMAGE PARALLAX
// =========================================

const precisionStage = document.querySelector(".precision-stage");

const precisionImage = document.querySelector(".precision-main-image");

if (precisionStage && precisionImage) {
  precisionStage.addEventListener("mousemove", (event) => {
    const rect = precisionStage.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width - 0.5;

    const y = (event.clientY - rect.top) / rect.height - 0.5;

    precisionImage.style.transform = `scale(1.05)
         translate(
           ${x * -12}px,
           ${y * -12}px
         )`;
  });

  precisionStage.addEventListener("mouseleave", () => {
    precisionImage.style.transform = "scale(1.05)";
  });
}

// =========================================
// GRIPCORE EXPERIENCE
// =========================================

// Initialize Lucide Icons

if (typeof lucide !== "undefined") {
  lucide.createIcons();
}

// =========================================
// SCROLL REVEAL
// =========================================

const experienceSection = document.querySelector(".experience-section");

if (experienceSection) {
  const experienceObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          experienceSection.classList.add("active");
        }
      });
    },

    {
      threshold: 0.2,
    },
  );

  experienceObserver.observe(experienceSection);
}

// =========================================
// EXPERIENCE STEPS
// =========================================

const experienceSteps = document.querySelectorAll(".experience-step");

const experienceProgress = document.querySelector(".experience-progress span");

experienceSteps.forEach((step, index) => {
  step.addEventListener("click", () => {
    // Remove active state

    experienceSteps.forEach((item) => {
      item.classList.remove("active");
    });

    // Add active state

    step.classList.add("active");

    // Update progress

    if (experienceProgress) {
      const progress = ((index + 1) / experienceSteps.length) * 100;

      experienceProgress.style.height = progress + "%";
    }
  });
});

// =========================================
// IMAGE MOUSE PARALLAX
// =========================================

const experienceVisual = document.querySelector(".experience-visual");

const experienceImage = document.querySelector(".experience-image");

if (experienceVisual && experienceImage) {
  experienceVisual.addEventListener("mousemove", (event) => {
    // Disable on touch devices

    if (window.innerWidth <= 768) {
      return;
    }

    const rect = experienceVisual.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width - 0.5;

    const y = (event.clientY - rect.top) / rect.height - 0.5;

    experienceImage.style.transform = `scale(1.05)
         translate(
           ${x * -10}px,
           ${y * -10}px
         )`;
  });

  experienceVisual.addEventListener("mouseleave", () => {
    experienceImage.style.transform = "scale(1)";
  });
}

// =========================================
// GRIPCORE DIFFERENCE
// =========================================

// Initialize Lucide Icons

if (typeof lucide !== "undefined") {
  lucide.createIcons();
}

// =========================================
// FEATURE INTERACTION
// =========================================

const differenceFeatures = document.querySelectorAll(".difference-feature");

differenceFeatures.forEach((feature) => {
  feature.addEventListener("click", () => {
    differenceFeatures.forEach((item) => {
      item.classList.remove("active");
    });

    feature.classList.add("active");
  });
});

// =========================================
// PERFORMANCE BAR ANIMATION
// =========================================

const differenceSection = document.querySelector(".difference-section");

const metricBars = document.querySelectorAll(".metric-bar span");

if (differenceSection && metricBars.length) {
  const differenceObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          metricBars.forEach((bar) => {
            const targetWidth = bar.dataset.width;

            bar.style.width = targetWidth;
          });

          differenceSection.classList.add("visible");
        }
      });
    },

    {
      threshold: 0.3,
    },
  );

  differenceObserver.observe(differenceSection);
}

// =========================================
// MOUSE SPOTLIGHT EFFECT
// =========================================

differenceFeatures.forEach((feature) => {
  feature.addEventListener("mousemove", (event) => {
    if (window.innerWidth <= 768) {
      return;
    }

    const rect = feature.getBoundingClientRect();

    const x = event.clientX - rect.left;

    const y = event.clientY - rect.top;

    feature.style.background = `radial-gradient(
            circle at
            ${x}px ${y}px,
            rgba(212,175,55,.08),
            transparent 45%
          )`;
  });

  feature.addEventListener("mouseleave", () => {
    feature.style.background = "";
  });
});

// =========================================================
// THE ART OF PRECISION — SCROLL ANIMATION
// =========================================================

const precisionShowcase = document.querySelector(".precision-showcase");

if (precisionShowcase) {
  const precisionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          precisionShowcase.classList.add("visible");
        }
      });
    },

    {
      threshold: 0.2,
    },
  );

  precisionObserver.observe(precisionShowcase);
}

// =========================================================
// LUCIDE ICONS
// =========================================================

if (typeof lucide !== "undefined") {
  lucide.createIcons();
}

// ======================================================
// BEFORE / AFTER COMPARISON SLIDER
// ======================================================

const compareWrapper = document.querySelector(".compare-wrapper");
const beforeWrapper = document.querySelector(".compare-before-wrapper");
const slider = document.querySelector(".compare-slider");

if (compareWrapper && beforeWrapper && slider) {
  let isDragging = false;

  function moveSlider(x) {
    const rect = compareWrapper.getBoundingClientRect();

    let position = x - rect.left;

    if (position < 0) position = 0;

    if (position > rect.width) position = rect.width;

    beforeWrapper.style.width = position + "px";

    slider.style.left = position + "px";
  }

  // Mouse Down
  slider.addEventListener("mousedown", () => {
    isDragging = true;
  });

  // Mouse Up
  window.addEventListener("mouseup", () => {
    isDragging = false;
  });

  // Mouse Move
  window.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    moveSlider(e.clientX);
  });

  // Touch Start
  slider.addEventListener("touchstart", () => {
    isDragging = true;
  });

  // Touch End
  window.addEventListener("touchend", () => {
    isDragging = false;
  });

  // Touch Move
  window.addEventListener("touchmove", (e) => {
    if (!isDragging) return;

    moveSlider(e.touches[0].clientX);
  });
}

// ======================================================
// AUTO DEMO
// ======================================================

window.addEventListener("load", () => {
  if (!compareWrapper) return;

  const width = compareWrapper.offsetWidth;

  beforeWrapper.style.transition = "1.4s ease";
  slider.style.transition = "1.4s ease";

  beforeWrapper.style.width = "20%";
  slider.style.left = "20%";

  setTimeout(() => {
    beforeWrapper.style.width = "80%";
    slider.style.left = "80%";
  }, 1500);

  setTimeout(() => {
    beforeWrapper.style.width = "50%";
    slider.style.left = "50%";

    beforeWrapper.style.transition = "";
    slider.style.transition = "";
  }, 3200);
});

if (typeof lucide !== "undefined") {
  lucide.createIcons();
}

// =========================================================
// PREMIUM PROCESS EXPERIENCE
// =========================================================

const processItems = document.querySelectorAll(".process-item");

const processImage = document.getElementById("processImage");

const processTitle = document.getElementById("processTitle");

const processData = [
  {
    image: "images/alo wheels 1.jpg",
    title: "BOOK APPOINTMENT",
  },

  {
    image: "images/alo wheels 2.jpg",
    title: "VEHICLE INSPECTION",
  },

  {
    image: "images/alo wheels 3.jpg",
    title: "PRECISION SERVICE",
  },

  {
    image: "images/alo wheels 4.jpg",
    title: "QUALITY TESTING",
  },

  {
    image: "images/alo wheels 5.jpg",
    title: "READY TO DRIVE",
  },
];

let currentProcess = 0;

// ==========================================
// CHANGE STEP
// ==========================================

function changeProcess(index) {
  currentProcess = index;

  processItems.forEach((item) => {
    item.classList.remove("active");
  });

  processItems[index].classList.add("active");

  processImage.style.opacity = "0";

  processImage.style.transform = "scale(1.08)";

  setTimeout(() => {
    processImage.src = processData[index].image;

    processTitle.textContent = processData[index].title;

    processImage.style.opacity = "1";

    processImage.style.transform = "scale(1)";
  }, 250);
}

// ==========================================
// CLICK EVENT
// ==========================================

processItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    changeProcess(index);
  });
});

// ==========================================
// AUTO SLIDER
// ==========================================

setInterval(() => {
  currentProcess++;

  if (currentProcess >= processData.length) {
    currentProcess = 0;
  }

  changeProcess(currentProcess);
}, 4000);

// ==========================================
// LUCIDE
// ==========================================

if (typeof lucide !== "undefined") {
  lucide.createIcons();
}

/*=========================================================
            PREMIUM CTA COUNTER
=========================================================*/

const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counter = entry.target;

        const target = +counter.dataset.target;

        let current = 0;

        const increment = target / 120;

        function updateCounter() {
          current += increment;

          if (current < target) {
            counter.innerText = Math.ceil(current);

            requestAnimationFrame(updateCounter);
          } else {
            if (target === 10000) {
              counter.innerText = "10K+";
            } else if (target === 15) {
              counter.innerText = "15+";
            } else if (target === 100) {
              counter.innerText = "100%";
            } else if (target === 24) {
              counter.innerText = "24/7";
            }
          }
        }

        updateCounter();

        observer.unobserve(counter);
      }
    });
  },
  { threshold: 0.5 },
);

counters.forEach((counter) => observer.observe(counter));

/*=========================================================
            FLOATING GLOW
=========================================================*/

const glows = document.querySelectorAll(".cta-glow");

window.addEventListener("mousemove",(e)=>{

    const x = e.clientX / window.innerWidth;

    const y = e.clientY / window.innerHeight;

    glows.forEach((glow,index)=>{

        const speed = (index+1)*20;

        glow.style.transform =
        `translate(${x*speed}px,${y*speed}px)`;

    });

});

/*=========================================================
            BUTTON RIPPLE
=========================================================*/

const buttons=document.querySelectorAll(".cta-btn");

buttons.forEach(button=>{

    button.addEventListener("mouseenter",()=>{

        button.style.transform="translateY(-8px) scale(1.03)";

    });

    button.addEventListener("mouseleave",()=>{

        button.style.transform="translateY(0) scale(1)";

    });

});

/*=========================================================
                DARK MODE
=========================================================*/

const darkModeBtn = document.getElementById("darkModeBtn");
const headerLogo = document.getElementById("headerLogo");

darkModeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){

        headerLogo.src = "images/logo-dark.png";

        darkModeBtn.innerHTML =
        '<i class="fa-regular fa-sun"></i>';

    }

    else{

        headerLogo.src = "images/logo-light.png";

        darkModeBtn.innerHTML =
        '<i class="fa-regular fa-moon"></i>';

    }

});
