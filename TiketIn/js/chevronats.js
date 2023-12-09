// DOM elements
const priceElement = document.querySelector('.textvariant_alert');
const priceElement2 = document.querySelector('.TicketQuantity_ticket_price_ .textvariant_alert2');
const priceTiers = document.querySelectorAll('.packageselection_packageitem');
let currentIndex = 0;
const quantityInput = document.querySelector('.MrpFs_quantity_input');

// Initialize the page with the value from the active package
function initializePage() {
    updatePrice();
    document.getElementById('buttonRight').addEventListener('click', function() {
        inputQuantity.value = 0;
    });
    document.getElementById('buttonLeft').addEventListener('click', function() {
        inputQuantity.value = 0;
    });
}

// Rest of the code remains the same

// Initialize the page with the value from the active package
function initializePage() {
    updatePrice();
}

// Function to format number with commas
function formatNumberWithCommas(number) {
    return number.toLocaleString('en-ID');
}

// Event listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', initializePage);

// Function to update the displayed price
function updatePrice() {
    const activePackage = document.querySelector('.packageselection_packageitem.active');
    
    if (activePackage) {
        const dataPrice = activePackage.getAttribute('data-price');
        const numericPrice = parseFloat(dataPrice);

        // Use toLocaleString to format the numeric price with commas
        const formattedPrice = numericPrice.toLocaleString('en-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        });

        // Update the priceElement2 with the desired format
        priceElement2.innerHTML = formattedPrice;
    }
}

// Function to handle navigation to the previous package
function showPrevious() {
    if (currentIndex > 0) {
        updateActivePackage(-1);
    }
}

// Function to handle navigation to the next package
function showNext() {
    if (currentIndex < priceTiers.length - 1) {
        updateActivePackage(1);
    }
}

// Function to update the active package and trigger price update
function updateActivePackage(delta) {
    priceTiers[currentIndex].classList.remove('active');
    currentIndex += delta;
    priceTiers[currentIndex].classList.add('active');
    updatePrice();
}
