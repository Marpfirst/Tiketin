document.addEventListener("DOMContentLoaded", function () {
  const searchBar = document.getElementById("searchBar");
  const cards = document.querySelectorAll(".hovered-card");
  const dropdown = document.querySelector(".dropdown");
  const dropdownItems = dropdown.querySelectorAll(".dropdown-item");
  const eventCountElement = document.getElementById("event-count");
  const dateInput = document.getElementById("dateInput");
  const selectElement = document.getElementById("select");
  const noEventsMessage = document.getElementById("no-events-message");
  const cardDateElements = document.querySelectorAll(".card-text[data-date]");
  const resetFilterButton = document.querySelector(".errorbutton");

  function updateCardDisplayByDropdownAndDate(selectedLocation, selectedDate) {
    cards.forEach((card) => {
      const cardText2 = card.querySelector(".card-text2").textContent;
      const cardDate = card
        .querySelector(".card-text[data-date]")
        .getAttribute("data-date");

      const isLocationMatch =
        selectedLocation === "Semua lokasi" || cardText2 === selectedLocation;
      const isDateMatch = selectedDate === "" || selectedDate === cardDate;

      if (isLocationMatch && isDateMatch) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });

    const visibleCards = Array.from(cards).filter(function (card) {
      return card.style.display !== "none";
    });

    eventCountElement.textContent = `${visibleCards.length} Event terlihat`;

    if (visibleCards.length === 0) {
      noEventsMessage.style.display = "block";
    } else {
      noEventsMessage.style.display = "none";
    }
  }

  function updateCardDisplayBySearch(searchTerm) {
    const visibleCards = Array.from(cards).filter(function (card) {
      const cardTitle = card
        .querySelector(".card-title")
        .textContent.toLowerCase();
      return cardTitle.includes(searchTerm);
    });

    cards.forEach(function (card) {
      if (visibleCards.includes(card)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });

    const visibleCount = visibleCards.length;
    eventCountElement.textContent = `${visibleCount} Event terlihat`;

    if (visibleCount === 0) {
      noEventsMessage.style.display = "block";
    } else {
      noEventsMessage.style.display = "none";
    }
  }

  function updateCardDisplayByDropdown(targetText) {
    cards.forEach((card) => {
      const cardText2 = card.querySelector(".card-text2").textContent;
      if (targetText === "Semua lokasi" || cardText2 === targetText) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });

    const visibleCards = Array.from(cards).filter(function (card) {
      return card.style.display !== "none";
    });

    const visibleCount = visibleCards.length;
    eventCountElement.textContent = `${visibleCount} Event terlihat`;

    if (visibleCount === 0) {
      noEventsMessage.style.display = "block";
    } else {
      noEventsMessage.style.display = "none";
    }
  }

  function updateCardDisplayByDate(selectedDate) {
    const today = new Date();
    const formattedToday = today.toISOString().split("T")[0];
    dateInput.setAttribute("min", formattedToday);

    cards.forEach((card) => {
      const cardDate = card
        .querySelector(".card-text[data-date]")
        .getAttribute("data-date");
      if (selectedDate === "" || selectedDate === cardDate) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });

    const visibleCards = Array.from(cards).filter(function (card) {
      return card.style.display !== "none";
    });

    const visibleCount = visibleCards.length;
    eventCountElement.textContent = `${visibleCount} Event terlihat`;

    if (visibleCount === 0) {
      noEventsMessage.style.display = "block";
    } else {
      noEventsMessage.style.display = "none";
    }
  }
  // Membuat fungsi untuk mengurutkan kartu berdasarkan harga
  function sortCardsByPrice(order) {
    // Mengambil data harga dari atribut "data-price" di setiap kartu
    const cardData = Array.from(cards).map((card) => ({
      card: card,
      price: parseFloat(
        card.querySelector(".text-center").getAttribute("data-price")
      ),
    }));

    // Mengurutkan kartu berdasarkan harga sesuai urutan (order) yang dipilih
    const sortedCards = cardData.sort((a, b) => (a.price - b.price) * order);

    // Menyusun ulang tampilan kartu sesuai urutan yang telah diurutkan
    sortedCards.forEach((item, index) => {
      item.card.style.order = index;
    });

    // Menghitung dan menampilkan jumlah kartu yang terlihat
    const visibleCards = sortedCards.filter(
      (item) => item.card.style.display !== "none"
    );
    eventCountElement.textContent = `${visibleCards.length} Event terlihat`;
  }

  dateInput.addEventListener("input", function () {
    const selectedDate = dateInput.value;
    const selectedLocation =
      dropdown.querySelector(".dropdown-toggle").textContent;
    updateCardDisplayByDropdownAndDate(selectedLocation, selectedDate);
  });

  searchBar.addEventListener("input", function () {
    const searchTerm = searchBar.value.toLowerCase();
    updateCardDisplayBySearch(searchTerm);
  });

  dropdownItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      const targetText = this.getAttribute("data-target");
      const dropdownToggle = dropdown.querySelector(".dropdown-toggle");
      dropdownToggle.textContent = targetText;
      const selectedDate = dateInput.value;
      updateCardDisplayByDropdownAndDate(targetText, selectedDate);
    });
  });

  dateInput.addEventListener("input", function () {
    const selectedDate = dateInput.value;
    updateCardDisplayByDate(selectedDate);
  });

  selectElement.addEventListener("change", function () {
    const selectedValue = selectElement.value;
    if (selectedValue === "Default") {
      cards.forEach((card) => {
        card.style.order = null;
      });
    } else if (selectedValue === "LowToHigh") {
      sortCardsByPrice(1);
    } else if (selectedValue === "HighToLow") {
      sortCardsByPrice(-1);
    }
  });

  cardDateElements.forEach(function (element) {
    const rawDate = element.getAttribute("data-date");
    const date = new Date(rawDate);
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = date.toLocaleDateString("id-ID", options);
    element.textContent = formattedDate;
  });

  function updateCardDisplayByDropdownAndDate(selectedLocation, selectedDate) {
    const searchValue = searchBar.value.toLowerCase();

    cards.forEach((card) => {
      const cardText2 = card.querySelector(".card-text2").textContent;
      const cardTitle = card
        .querySelector(".card-title")
        .textContent.toLowerCase();
      const cardDate = card
        .querySelector(".card-text[data-date]")
        .getAttribute("data-date");

      const isLocationMatch =
        selectedLocation === "Semua lokasi" || cardText2 === selectedLocation;
      const isDateMatch = selectedDate === "" || selectedDate === cardDate;
      const isSearchMatch =
        searchValue === "" || cardTitle.includes(searchValue);

      if (isLocationMatch && isDateMatch && isSearchMatch) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });

    updateVisibleCardCount();
  }

  function updateCardDisplayByDate(selectedDate) {
    const searchValue = searchBar.value.toLowerCase();

    cards.forEach((card) => {
      const cardTitle = card
        .querySelector(".card-title")
        .textContent.toLowerCase();
      const cardDate = card
        .querySelector(".card-text[data-date]")
        .getAttribute("data-date");

      const isDateMatch = selectedDate === "" || selectedDate === cardDate;
      const isSearchMatch =
        searchValue === "" || cardTitle.includes(searchValue);

      if (isDateMatch && isSearchMatch) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });

    updateVisibleCardCount();
  }

  function updateVisibleCardCount() {
    const visibleCards = Array.from(cards).filter(function (card) {
      return card.style.display !== "none";
    });

    eventCountElement.textContent = `${visibleCards.length} Event terlihat`;

    if (visibleCards.length === 0) {
      noEventsMessage.style.display = "block";
    } else {
      noEventsMessage.style.display = "none";
    }
  }

  resetFilterButton.addEventListener("click", function () {
    // Kode untuk mengatur ulang filter disini
    // Contoh: Mengatur ulang nilai search dan dropdown ke default
    searchBar.value = "";
    const dropdownToggle = dropdown.querySelector(".dropdown-toggle");
    dropdownToggle.textContent = "Lokasi";
    // Kemudian, panggil fungsi yang memperbarui tampilan kartu
    updateCardDisplayBySearch("");
  });
  // Pemanggilan pertama saat halaman dimuat
  updateCardDisplayByDropdownAndDate("Semua lokasi", "");
});

let subMenu = document.getElementById("subMenu");

function toggleMenu() {
  subMenu.classList.toggle("open-menu");
}
