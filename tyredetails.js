

document.addEventListener("DOMContentLoaded", function () {



  if (typeof lucide !== "undefined") {

    lucide.createIcons();

  }





  const tyreFinderForm =
    document.getElementById("tyreFinderForm");

  const tyreBrand =
    document.getElementById("tyreBrand");

  const tyreSize =
    document.getElementById("tyreSize");

  const vehicleType =
    document.getElementById("vehicleType");

  const tyreFinderResult =
    document.getElementById("tyreFinderResult");





  if (tyreFinderForm) {

    tyreFinderForm.addEventListener(
      "submit",
      function (event) {

        event.preventDefault();


        const brand =
          tyreBrand.value;

        const size =
          tyreSize.value;

        const vehicle =
          vehicleType.value;



       

        if (
          !brand ||
          !size ||
          !vehicle
        ) {

          tyreFinderResult.innerHTML = `

            <i data-lucide="alert-circle"></i>

            <span>
              Please select your tyre brand, tyre size,
              and vehicle type to continue.
            </span>

          `;


          tyreFinderResult.classList.add(
            "finder-error"
          );


          if (typeof lucide !== "undefined") {

            lucide.createIcons();

          }


          return;

        }



        

        const brandName =
          tyreBrand.options[
            tyreBrand.selectedIndex
          ].text;


        const vehicleName =
          vehicleType.options[
            vehicleType.selectedIndex
          ].text;



        tyreFinderResult.innerHTML = `

          <i data-lucide="circle-check"></i>

          <span>
            Great choice! We found suitable
            ${brandName} tyres in
            ${size} for your
            ${vehicleName}.
            Our team can help you check availability
            and arrange installation.
          </span>

        `;


        tyreFinderResult.classList.remove(
          "finder-error"
        );


        tyreFinderResult.classList.add(
          "finder-success"
        );


        if (typeof lucide !== "undefined") {

          lucide.createIcons();

        }

      }
    );

  }

});