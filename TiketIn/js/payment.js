const radioButtons = document.querySelectorAll('input[name="paymentMethod"]');
const paymentButton = document.getElementById("paymentButton");

// Function to update the anchor tag and button based on the radio button's state
function updateUI() {
  const selectedRadioButton = document.querySelector(
    'input[name="paymentMethod"]:checked'
  );

  if (selectedRadioButton) {
    // Enable the button and set the href when a radio button is selected
    paymentButton.href = "countdown.html"; // Change the URL to your desired page
    paymentButton.classList.add("selected");
    paymentButton.textContent = "Payment Method Selected";
    paymentButton.disabled = false;
    paymentButton.style.cursor = "pointer";
  } else {
    // Disable the button when no radio button is selected
    paymentButton.removeAttribute("href"); // Remove the href attribute to hide the link
    paymentButton.classList.remove("selected");
    paymentButton.textContent = "No Payment Method Selected";
    paymentButton.disabled = true;
    paymentButton.style.cursor = "not-allowed";
  }
}

// Initial setup
updateUI();

// Event listeners for radio buttons
radioButtons.forEach((button) => {
  button.addEventListener("change", updateUI);
});

let subMenu = document.getElementById("subMenu");

function toggleMenu() {
  subMenu.classList.toggle("open-menu");
}
