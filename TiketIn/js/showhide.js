const loginForm = document.querySelector("form"),
  pwShowHide = document.querySelectorAll(".pw_hide"),
  formContainer = document.querySelector(".form_container"),
  signupLink = document.querySelector(".signup-link a");

pwShowHide.forEach((icon) => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if (getPwInput.type === "password") {
      getPwInput.type = "text";
      icon.classList.replace("uil-eye-slash", "uil-eye");
    } else {
      getPwInput.type = "password";
      icon.classList.replace("uil-eye", "uil-eye-slash");
    }
  });
});
