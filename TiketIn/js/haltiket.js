document.addEventListener("DOMContentLoaded", function () {
  const spanElement = document.getElementById("spanElement");
  const buttonLeft = document.getElementById("buttonLeft");
  const buttonRight = document.getElementById("buttonRight");

  let currentPage = 1;
  const totalPages = 4; // Update total pages to 4

  function updateView() {
    spanElement.textContent = currentPage + "/" + totalPages;

    // Enable or disable the left button based on the current page
    buttonLeft.disabled = currentPage === 1;

    // Enable or disable the right button based on the current page
    buttonRight.disabled = currentPage === totalPages;
  }

  buttonRight.addEventListener("click", function () {
    if (currentPage < totalPages) {
      currentPage++;
      updateView();
    }
  });

  buttonLeft.addEventListener("click", function () {
    if (currentPage > 1) {
      currentPage--;
      updateView();
    }
  });

  // Constants for class names
  const packageItemBaseClass = "packageselection_packageitem";
  let currentIndex = 0;
  const priceTiers = document.querySelectorAll(`.${packageItemBaseClass}`);

  function showPackage(packageName) {
    for (let i = 0; i < priceTiers.length; i++) {
      const packageItem = priceTiers[i];
      if (packageName === packageItemBaseClass + (i + 1)) {
        packageItem.classList.add("active");
      } else {
        packageItem.classList.remove("active");
      }
    }
  }

  function showPrevious() {
    if (currentIndex > 0) {
      priceTiers[currentIndex].classList.remove("active");
      currentIndex--;
      priceTiers[currentIndex].classList.add("active");
    }
  }

  function showNext() {
    if (currentIndex < priceTiers.length - 1) {
      priceTiers[currentIndex].classList.remove("active");
      currentIndex++;
      priceTiers[currentIndex].classList.add("active");
    }
  }

  // Use a loop for event listeners
  const buttons = [buttonLeft, buttonRight];
  buttons.forEach((button) => {
    button.addEventListener("click", updateView);
  });

  updateView();
});
let subMenu = document.getElementById("subMenu");

function toggleMenu() {
  subMenu.classList.toggle("open-menu");
}
