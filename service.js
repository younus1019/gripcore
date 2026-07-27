// =========================================================
//              GRIPCORE PREMIUM SERVICES JS
// =========================================================

// =========================================================
//              SCROLL REVEAL ANIMATION
// =========================================================

const revealElements = document.querySelectorAll(
  ".services-intro-container, " +
    ".service-card, " +
    ".featured-service-container, " +
    ".services-cta-content",
);

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");

        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  },
);

revealElements.forEach((element) => {
  element.classList.add("reveal");

  revealObserver.observe(element);
});

// =========================================================
//              SERVICE CARD STAGGER
// =========================================================

const serviceCards = document.querySelectorAll(".service-card");

serviceCards.forEach((card, index) => {
  card.style.transitionDelay = `${index * 0.08}s`;
});

// =========================================================
//              SERVICE CARD MOUSE EFFECT
// =========================================================

serviceCards.forEach((card) => {
  card.addEventListener("mousemove", (event) => {
    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;

    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;

    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 2;

    const rotateY = ((x - centerX) / centerX) * -2;

    card.style.transform = `translateY(-12px)
       perspective(1000px)
       rotateX(${rotateX}deg)
       rotateY(${rotateY}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });
});

// =========================================================
//              FEATURED IMAGE PARALLAX
// =========================================================

const featuredImage = document.querySelector(".featured-image img");

if (featuredImage) {
  window.addEventListener("scroll", () => {
    const section = document.querySelector(".featured-service");

    if (!section) return;

    const rect = section.getBoundingClientRect();

    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight && rect.bottom > 0) {
      const progress = (windowHeight - rect.top) / (windowHeight + rect.height);

      const movement = (progress - 0.5) * 20;

      featuredImage.style.transform = `scale(1.05)
         translateY(${movement}px)`;
    }
  });
}

// =========================================================
//              HERO MOUSE MOVEMENT
// =========================================================

const hero = document.querySelector(".services-hero");

if (hero) {
  const heroGlow = document.createElement("div");

  heroGlow.className = "services-hero-mouse-glow";

  hero.appendChild(heroGlow);

  hero.addEventListener("mousemove", (event) => {
    const x = event.clientX;

    const y = event.clientY;

    heroGlow.style.left = `${x}px`;

    heroGlow.style.top = `${y}px`;
  });

  hero.addEventListener("mouseleave", () => {
    heroGlow.style.opacity = "0";
  });

  hero.addEventListener("mouseenter", () => {
    heroGlow.style.opacity = "1";
  });
}

// =========================================================
//              CTA BUTTON RIPPLE EFFECT
// =========================================================

const serviceButtons = document.querySelectorAll(".service-btn");

serviceButtons.forEach((button) => {
  button.addEventListener("click", function (event) {
    const ripple = document.createElement("span");

    const rect = button.getBoundingClientRect();

    const size = Math.max(rect.width, rect.height);

    ripple.style.width = `${size}px`;

    ripple.style.height = `${size}px`;

    ripple.style.left = `${event.clientX - rect.left - size / 2}px`;

    ripple.style.top = `${event.clientY - rect.top - size / 2}px`;

    ripple.classList.add("service-ripple");

    button.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 700);
  });
});

// =========================================================
//              SMOOTH SCROLL
// =========================================================

const scrollLinks = document.querySelectorAll('a[href^="#"]');

scrollLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");

    if (!targetId || targetId === "#") {
      return;
    }

    const target = document.querySelector(targetId);

    if (target) {
      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// =========================================================
//              DYNAMIC STYLE
// =========================================================

const servicesDynamicStyle = document.createElement("style");

servicesDynamicStyle.textContent = `

/* ===============================
   SCROLL REVEAL
=============================== */

.reveal {

  opacity: 0;

  transform:
    translateY(50px);

  transition:
    opacity 0.8s ease,
    transform 0.8s ease;

}


.reveal.show {

  opacity: 1;

  transform:
    translateY(0);

}


/* ===============================
   HERO MOUSE GLOW
=============================== */

.services-hero-mouse-glow {

  position: absolute;

  width: 250px;

  height: 250px;

  border-radius: 50%;

  pointer-events: none;

  transform:
    translate(-50%, -50%);

  background:
    radial-gradient(
      circle,
      rgba(212,175,55,0.16),
      transparent 70%
    );

  filter:
    blur(20px);

  z-index: 1;

  opacity: 0;

  transition:
    opacity 0.4s ease;

}


/* ===============================
   RIPPLE
=============================== */

.service-ripple {

  position: absolute;

  border-radius: 50%;

  background:
    rgba(255,255,255,0.35);

  transform:
    scale(0);

  animation:
    serviceRippleAnimation
    0.7s ease-out;

  pointer-events: none;

}


@keyframes serviceRippleAnimation {

  to {

    transform:
      scale(2);

    opacity: 0;

  }

}


/* ===============================
   BUTTON POSITION
=============================== */

.service-btn {

  position: relative;

  overflow: hidden;

}


/* ===============================
   REDUCE MOTION
=============================== */

@media
(prefers-reduced-motion: reduce) {

  .reveal {

    opacity: 1;

    transform: none;

    transition: none;

  }

  .service-card {

    transition: none;

  }

}

`;

document.head.appendChild(servicesDynamicStyle);

// =========================================================
//              PAGE LOADED
// =========================================================

console.log("GripCore Services Page Loaded Successfully");

// =========================================================
// PREMIUM APPOINTMENT BOOKING
// =========================================================

function initializeAppointmentForm() {
  const appointmentForm = document.querySelector(".appointment-form");

  const appointmentDate = document.getElementById("appointmentDate");

  // =========================================
  // SET MINIMUM DATE TO TODAY
  // =========================================

  if (appointmentDate) {
    const today = new Date();

    const year = today.getFullYear();

    const month = String(today.getMonth() + 1).padStart(2, "0");

    const day = String(today.getDate()).padStart(2, "0");

    appointmentDate.min = `${year}-${month}-${day}`;
  }

  // =========================================
  // FORM SUBMISSION
  // =========================================

  if (appointmentForm) {
    appointmentForm.addEventListener("submit", function (event) {
      event.preventDefault();

      // =====================================
      // GET FORM VALUES
      // =====================================

      const name = document.getElementById("appointmentName").value.trim();

      const phone = document.getElementById("appointmentPhone").value.trim();

      const service = document.getElementById("appointmentService").value;

      const vehicle = document.getElementById("vehicleType").value;

      const date = document.getElementById("appointmentDate").value;

      const time = document.getElementById("appointmentTime").value;

      // =====================================
      // VALIDATION
      // =====================================

      if (!name || !phone || !service || !vehicle || !date || !time) {
        alert("Please fill in all required fields.");

        return;
      }

      // =====================================
      // SUCCESS MESSAGE
      // =====================================

      alert(
        `Thank you, ${name}!\n\n` +
          `Your appointment request has been received.\n\n` +
          `Our GripCore team will contact you shortly to confirm your booking.`,
      );

      // =====================================
      // RESET FORM
      // =====================================

      appointmentForm.reset();
    });
  }
}

// =========================================================
// INITIALIZE
// =========================================================

initializeAppointmentForm();
