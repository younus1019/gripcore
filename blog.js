/* =========================================================
   PREMIUM BLOG SEARCH + CATEGORY FILTER
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("blogSearch");

  const filterButtons = document.querySelectorAll(".blog-filter-btn");

  const articleCards = document.querySelectorAll(".blog-article-card");

  const resultsCount = document.getElementById("blogResultsCount");

  const noResults = document.getElementById("blogNoResults");

  let activeCategory = "all";

  /* =======================================================
     FILTER ARTICLES
  ======================================================= */

  function filterArticles() {
    const searchValue = searchInput.value.toLowerCase().trim();

    let visibleCount = 0;

    articleCards.forEach((article) => {
      const category = article.dataset.category.toLowerCase();

      const title = article.dataset.title.toLowerCase();

      const articleText = article.textContent.toLowerCase();

      /* CATEGORY CHECK */

      const categoryMatch =
        activeCategory === "all" || category === activeCategory;

      /* SEARCH CHECK */

      const searchMatch =
        title.includes(searchValue) || articleText.includes(searchValue);

      /* FINAL RESULT */

      if (categoryMatch && searchMatch) {
        article.classList.remove("hide");

        article.classList.add("show");

        visibleCount++;
      } else {
        article.classList.remove("show");

        article.classList.add("hide");
      }
    });

    /* =====================================================
       UPDATE RESULT COUNT
    ====================================================== */

    resultsCount.textContent = visibleCount;

    /* =====================================================
       SHOW / HIDE NO RESULTS
    ====================================================== */

    if (visibleCount === 0) {
      noResults.classList.add("show");
    } else {
      noResults.classList.remove("show");
    }
  }

  /* =======================================================
     CATEGORY BUTTONS
  ======================================================= */

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      /* REMOVE ACTIVE */

      filterButtons.forEach((btn) => {
        btn.classList.remove("active");
      });

      /* ADD ACTIVE */

      button.classList.add("active");

      /* GET CATEGORY */

      activeCategory = button.dataset.filter;

      /* FILTER */

      filterArticles();
    });
  });

  /* =======================================================
     SEARCH INPUT
  ======================================================= */

  if (searchInput) {
    searchInput.addEventListener("input", filterArticles);
  }

  /* =======================================================
     INITIAL LOAD
  ======================================================= */

  filterArticles();
});


/* =========================================================
   NEWSLETTER FORM
========================================================= */

const newsletterForm =
  document.getElementById("newsletterForm");

const newsletterEmail =
  document.getElementById("newsletterEmail");

const newsletterMessage =
  document.getElementById("newsletterMessage");


if (newsletterForm) {

  newsletterForm.addEventListener(
    "submit",
    function (event) {

      event.preventDefault();


      const email =
        newsletterEmail.value.trim();


      /* EMAIL VALIDATION */

      const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


      if (!emailPattern.test(email)) {

        newsletterEmail.focus();

        newsletterEmail.setCustomValidity(
          "Please enter a valid email address."
        );

        newsletterEmail.reportValidity();

        return;

      }


      newsletterEmail.setCustomValidity("");


      /* SHOW SUCCESS */

      newsletterMessage.classList.add("show");


      /* CLEAR INPUT */

      newsletterEmail.value = "";


      /* HIDE MESSAGE AFTER 5 SECONDS */

      setTimeout(() => {

        newsletterMessage.classList.remove("show");

      }, 5000);

    }
  );

}