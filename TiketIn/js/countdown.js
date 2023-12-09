document.addEventListener("DOMContentLoaded", function () {
  // Set the target date and time to 1 minute from now
  var targetDate = new Date();
  targetDate.setMinutes(targetDate.getMinutes() + 1);
  targetDate = targetDate.getTime();

  // Initialize a flag to track whether the countdown has started
  var countdownStarted = false;

  // Update the countdown every second
  var countdownInterval = setInterval(function () {
    // Get the current date and time
    var currentDate = new Date().getTime();

    // Calculate the remaining time
    var remainingTime = targetDate - currentDate;

    // Calculate hours, minutes, and seconds
    var hours = Math.floor(remainingTime / (1000 * 60 * 60));
    var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    // Update the countdown display
    document
      .querySelectorAll(".countdown-item")
      .forEach(function (element, index) {
        var value =
          index === 0
            ? padNumber(hours)
            : index === 1
            ? padNumber(minutes)
            : padNumber(seconds);
        element.textContent = value;
      });

    // Check if the countdown has started and reached 00:00:00
    if (countdownStarted && hours === 0 && minutes === 0 && seconds === 0) {
      clearInterval(countdownInterval);
      showTimeIsUpModal();
    } else {
      // Mark countdown as started once it progresses beyond 00:00:00
      countdownStarted = true;
      hideTimeIsUpModal();
    }
  }, 1000);

  // Function to pad single-digit numbers with a leading zero
  function padNumber(number) {
    return number < 10 ? "0" + number : number;
  }

  // Function to show the modal when time is up
  function showTimeIsUpModal() {
    var modal = new bootstrap.Modal(document.getElementById("staticBackdrop"));
    modal.show();
  }

  // Function to hide the modal when there is still time remaining
  function hideTimeIsUpModal() {
    // You can add additional logic here if needed
  }
});
let subMenu = document.getElementById("subMenu");

function toggleMenu() {
  subMenu.classList.toggle("open-menu");
}
