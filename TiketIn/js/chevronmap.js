const chevronDown = document.querySelector(".chevron-down");
const chevronUp = document.querySelector(".chevron-up");
const image1 = document.getElementById("image1");
let isChevronDown = true; // Initial state

chevronDown.addEventListener("click", () => {
  if (isChevronDown) {
    chevronDown.style.display = "none";
    chevronUp.style.display = "inline";
    image1.style.display = "block";
  } else {
    chevronDown.style.display = "inline";
    chevronUp.style.display = "none";
    image1.style.display = "none";
  }
  isChevronDown = !isChevronDown;
});

chevronUp.addEventListener("click", () => {
  if (!isChevronDown) {
    chevronDown.style.display = "inline";
    chevronUp.style.display = "none";
    image1.style.display = "none";
    isChevronDown = true;
  }
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Get the clickable image
var clickableImage = document.getElementById("image1");

// When the user clicks on the clickable image
clickableImage.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  document.body.style.overflow = "hidden"; // Menonaktifkan scrolling di latar belakang
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
  document.body.style.overflow = "auto"; // Mengaktifkan scrolling kembali
};

// Menambahkan event listener ke elemen modal untuk menutup modal saat di luar gambar
modal.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Mengaktifkan scrolling kembali
  }
});
let subMenu = document.getElementById("subMenu");

function toggleMenu() {
  subMenu.classList.toggle("open-menu");
}
