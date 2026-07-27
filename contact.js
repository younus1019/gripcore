/* =========================================================
   PREMIUM CONTACT FORM VALIDATION
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");

  if (!contactForm) return;

  const nameInput = document.getElementById("contactName");
  const emailInput = document.getElementById("contactEmail");
  const phoneInput = document.getElementById("contactPhone");
  const serviceInput = document.getElementById("contactService");
  const messageInput = document.getElementById("contactMessage");

  const successMessage = document.getElementById("contactFormSuccess");

  /* =======================================================
     VALIDATION FUNCTIONS
  ======================================================= */

  function showError(input, message) {
    const formGroup = input.closest(".contact-form-group");

    const error = formGroup.querySelector(".contact-error");

    formGroup.classList.add("error");

    error.textContent = message;
  }

  function clearError(input) {
    const formGroup = input.closest(".contact-form-group");

    const error = formGroup.querySelector(".contact-error");

    formGroup.classList.remove("error");

    error.textContent = "";
  }

  /* =======================================================
     NAME VALIDATION
  ======================================================= */

  function validateName() {
    const name = nameInput.value.trim();

    if (name === "") {
      showError(nameInput, "Please enter your full name.");

      return false;
    }

    if (name.length < 3) {
      showError(nameInput, "Name must be at least 3 characters.");

      return false;
    }

    clearError(nameInput);

    return true;
  }

  /* =======================================================
     EMAIL VALIDATION
  ======================================================= */

  function validateEmail() {
    const email = emailInput.value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
      showError(emailInput, "Please enter your email address.");

      return false;
    }

    if (!emailPattern.test(email)) {
      showError(emailInput, "Please enter a valid email address.");

      return false;
    }

    clearError(emailInput);

    return true;
  }

  /* =======================================================
     PHONE VALIDATION
  ======================================================= */

  function validatePhone() {
    const phone = phoneInput.value.trim();

    const phonePattern = /^[0-9+\-\s()]{7,20}$/;

    if (phone === "") {
      showError(phoneInput, "Please enter your phone number.");

      return false;
    }

    if (!phonePattern.test(phone)) {
      showError(phoneInput, "Please enter a valid phone number.");

      return false;
    }

    clearError(phoneInput);

    return true;
  }

  /* =======================================================
     SERVICE VALIDATION
  ======================================================= */

  function validateService() {
    if (serviceInput.value === "") {
      showError(serviceInput, "Please select a service.");

      return false;
    }

    clearError(serviceInput);

    return true;
  }

  /* =======================================================
     MESSAGE VALIDATION
  ======================================================= */

  function validateMessage() {
    const message = messageInput.value.trim();

    if (message === "") {
      showError(messageInput, "Please enter your message.");

      return false;
    }

    if (message.length < 10) {
      showError(messageInput, "Message must be at least 10 characters.");

      return false;
    }

    clearError(messageInput);

    return true;
  }

  /* =======================================================
     REAL-TIME VALIDATION
  ======================================================= */

  nameInput.addEventListener("blur", validateName);

  emailInput.addEventListener("blur", validateEmail);

  phoneInput.addEventListener("blur", validatePhone);

  serviceInput.addEventListener("change", validateService);

  messageInput.addEventListener("blur", validateMessage);

  /* =======================================================
     FORM SUBMIT
  ======================================================= */

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const isNameValid = validateName();

    const isEmailValid = validateEmail();

    const isPhoneValid = validatePhone();

    const isServiceValid = validateService();

    const isMessageValid = validateMessage();

    const isFormValid =
      isNameValid &&
      isEmailValid &&
      isPhoneValid &&
      isServiceValid &&
      isMessageValid;

    /* ================================================
         INVALID FORM
      ================================================= */

    if (!isFormValid) {
      const firstError = contactForm.querySelector(".contact-form-group.error");

      if (firstError) {
        firstError.querySelector("input, select, textarea").focus();
      }

      return;
    }

    /* ================================================
         SUCCESS
      ================================================= */

    successMessage.classList.add("show");

    /* Reset Form */

    contactForm.reset();

    /* Clear Any Previous Errors */

    contactForm.querySelectorAll(".contact-form-group").forEach((group) => {
      group.classList.remove("error");

      const error = group.querySelector(".contact-error");

      if (error) {
        error.textContent = "";
      }
    });

    /* ================================================
         HIDE SUCCESS MESSAGE
         AFTER 5 SECONDS
      ================================================= */

    setTimeout(() => {
      successMessage.classList.remove("show");
    }, 5000);
  });
});


document.addEventListener("DOMContentLoaded", () => {

  const faqItems = document.querySelectorAll(".contact-faq-item");

  faqItems.forEach((item) => {

    const question = item.querySelector(".contact-faq-question");

    question.addEventListener("click", () => {

      const isActive = item.classList.contains("active");

      // Close all FAQs
      faqItems.forEach((faq) => {
        faq.classList.remove("active");

        faq.querySelector(".contact-faq-question")
          .setAttribute("aria-expanded", "false");
      });

      // Open clicked FAQ
      if (!isActive) {

        item.classList.add("active");

        question.setAttribute(
          "aria-expanded",
          "true"
        );

      }

    });

  });

});