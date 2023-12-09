document.addEventListener('DOMContentLoaded', function () {
    const minusButton = document.querySelector('.MrpFs_minus_icon');
    const plusButton = document.querySelector('.MrpFs_plus_icon');
    const quantityInput = document.querySelector('.MrpFs_quantity_input');
    const priceElement = document.querySelector('.TotalPayment_price_');
    const priceElement2 = document.querySelector('.TicketQuantity_ticket_price_ .textvariant_alert2');

    // Set the initial quantity value to 0
    quantityInput.value = '0';

    // Function to format number with commas
    function formatNumberWithCommas(number) {
        return number.toLocaleString('en-ID');
    }

    // Function to update quantity and total payment
    function updateQuantity(change) {
        let currentValue = parseInt(quantityInput.value);

        // Ensure the new value is within the specified range [0, 4]
        let newValue = Math.max(0, Math.min(currentValue + change, 4));

        // Update the input value
        quantityInput.value = newValue;

        // Disable the minus button if the value is 0
        minusButton.disabled = newValue === 0;

        // Extract the base price from the active package
        const activePackage = document.querySelector('.packageselection_packageitem.active');
        const basePriceText = activePackage ? activePackage.querySelector('.textvariant_alert').textContent : '0';
        const basePrice = parseInt(basePriceText.replace(/[^\d]/g, '')); // Remove non-numeric characters

        // Update the total payment based on the input value with comma separators
        priceElement.textContent = newValue === 0 ? 'IDR 0' : `IDR ${formatNumberWithCommas(basePrice * newValue)}`;
    }

    // Function to handle mutations on the target node
    const mutationCallback = function (mutationsList) {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList' && mutation.target.className === 'textvariant_alert2') {
                // Reset quantity when the value of textvariant_alert2 changes
                quantityInput.value = '0';
                minusButton.disabled = true;
                updateQuantity(0); // Update total payment with the reset quantity
            }
        }
    };

    // Create a MutationObserver to observe changes in textvariant_alert2
    const observer = new MutationObserver(mutationCallback);

    // Define the node to be observed
    const targetNode = document.querySelector('.TicketQuantity_ticket_price_ .textvariant_alert2');

    // Configure the observer to watch for changes in child nodes
    const observerConfig = { childList: true };

    // Start observing the target node for configured mutations
    observer.observe(targetNode, observerConfig);

    // Event listeners
    minusButton.addEventListener('click', function () {
        updateQuantity(-1);
    });

    plusButton.addEventListener('click', function () {
        updateQuantity(1);
    });

    // Initial setup: Disable the minus button if the initial value is 0
    minusButton.disabled = quantityInput.value === '0';
});
