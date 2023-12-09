document.addEventListener("DOMContentLoaded", function () {
  var radioButtons = document.querySelectorAll(".form-check-input");
  var selectMessage = document.getElementById("selectMessage");

  radioButtons.forEach(function (radioButton) {
    radioButton.addEventListener("change", function () {
      // Check if any radio button is selected
      var isAnyChecked = Array.from(radioButtons).some(function (rb) {
        return rb.checked;
      });

      // Hide the select message if any radio button is selected
      selectMessage.style.display = isAnyChecked ? "none" : "block";

      // Reset the border color of all radio buttons
      radioButtons.forEach(function (rb) {
        rb.style.borderColor = isAnyChecked ? "black" : "transparent"; // Set to transparent by default
      });

      // Set the border color of the clicked radio button to blue
      this.style.borderColor = "blue";
    });
  });
});

let subMenu = document.getElementById("subMenu");

function toggleMenu() {
  subMenu.classList.toggle("open-menu");
}
