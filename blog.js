

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("blogSearch");

  const filterButtons = document.querySelectorAll(".blog-filter-btn");

  const articleCards = document.querySelectorAll(".blog-article-card");

  const resultsCount = document.getElementById("blogResultsCount");

  const noResults = document.getElementById("blogNoResults");

  let activeCategory = "all";



  function filterArticles() {
    const searchValue = searchInput.value.toLowerCase().trim();

    let visibleCount = 0;

    articleCards.forEach((article) => {
      const category = article.dataset.category.toLowerCase();

      const title = article.dataset.title.toLowerCase();

      const articleText = article.textContent.toLowerCase();

   

      const categoryMatch =
        activeCategory === "all" || category === activeCategory;


      const searchMatch =
        title.includes(searchValue) || articleText.includes(searchValue);

   

      if (categoryMatch && searchMatch) {
        article.classList.remove("hide");

        article.classList.add("show");

        visibleCount++;
      } else {
        article.classList.remove("show");

        article.classList.add("hide");
      }
    });

    

    resultsCount.textContent = visibleCount;

  

    if (visibleCount === 0) {
      noResults.classList.add("show");
    } else {
      noResults.classList.remove("show");
    }
  }



  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      

      filterButtons.forEach((btn) => {
        btn.classList.remove("active");
      });

  

      button.classList.add("active");

     

      activeCategory = button.dataset.filter;

   

      filterArticles();
    });
  });

 

  if (searchInput) {
    searchInput.addEventListener("input", filterArticles);
  }

  

  filterArticles();
});



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


     

      newsletterMessage.classList.add("show");


   

      newsletterEmail.value = "";


     

      setTimeout(() => {

        newsletterMessage.classList.remove("show");

      }, 5000);

    }
  );

}