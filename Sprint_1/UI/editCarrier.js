// Get elements
const carrierSelect = document.getElementById('carrierSelect');
const carrierDetails = document.getElementById('carrierDetails');
const acknowledgmentMessage = document.getElementById('acknowledgmentMessage');



// Function to populate select options from localStorage
function populateCarrierOptions() {
    const carriers = JSON.parse(localStorage.getItem('carrierList')) || [];
    carrierSelect.innerHTML = ''; // Clear any existing options

    carriers.forEach(carrier => {
        const option = document.createElement('option');
        option.value = carrier.carrierName; // Use carrier name as value
        option.textContent = carrier.carrierName; // Use carrier name as display text
        carrierSelect.appendChild(option);
    });
}

// Call the function to populate options when the page loads
window.onload = function() {
    populateCarrierOptions();
};

// Search for the selected carrier by name
document.getElementById('searchCarrier').addEventListener('click', function() {
    const carriers = JSON.parse(localStorage.getItem('carrierList')) || [];
    const selectedCarrier = carriers.find(c => c.carrierName === carrierSelect.value); // Find by carrier name

    if (selectedCarrier) {
        // Populate the form with the carrier's details
        document.getElementById('carrierName').value = selectedCarrier.carrierName;
        document.getElementById('60DaysAdvanceBooking').value = selectedCarrier._30DaysAdvanceBooking;
        document.getElementById('90DaysAdvanceBooking').value = selectedCarrier._30DaysAdvanceBooking;
        document.getElementById('bulkBooking').value = selectedCarrier.bulkBooking;
        document.getElementById('silverUser').value = selectedCarrier.silverUser;
        document.getElementById('goldUser').value = selectedCarrier.goldUser;
        document.getElementById('platinumUser').value = selectedCarrier.platinumUser;

        document.getElementById('2DaysBeforeTravelDate').value = selectedCarrier._2DaysBeforeTravelDate;
        document.getElementById('10DaysBeforeTravelDate').value = selectedCarrier._10DaysBeforeTravelDate;
        document.getElementById('20DaysOrMoreBeforeTravelDate').value = selectedCarrier._20DaysBeforeTravelDate;

        carrierDetails.style.display = 'block'; // Show the carrier details section
    } else {
        acknowledgmentMessage.innerText = "Carrier not found!";
        acknowledgmentMessage.style.display = 'block';
    }
});

// Edit carrier details
document.getElementById('editCarrier').addEventListener('click', function() {
    const carriers = JSON.parse(localStorage.getItem('carrierList')) || [];
    const selectedCarrier = carriers.find(c => c.carrierName === carrierSelect.value);

    if (selectedCarrier) {
        // Update the carrier's details
        selectedCarrier._30DaysAdvanceBooking = document.getElementById('30DaysAdvanceBooking').value;
        selectedCarrier._60DaysAdvanceBooking = document.getElementById('60DaysAdvanceBooking').value;
        selectedCarrier._90DaysAdvanceBooking = document.getElementById('90DaysAdvanceBooking').value;
        selectedCarrier.bulkBooking = document.getElementById('bulkBooking').value;
        selectedCarrier.silverUser = document.getElementById('silverUser').value;
        selectedCarrier.goldUser = document.getElementById('goldUser').value;
        selectedCarrier.platinumUser = document.getElementById('platinumUser').value;
        selectedCarrier._2DaysBeforeTravelDate = document.getElementById('2DaysBeforeTravelDate').value;
        selectedCarrier._10DaysBeforeTravelDate = document.getElementById('10DaysBeforeTravelDate').value;
        selectedCarrier._20DaysOrMoreBeforeTravelDate = document.getElementById('20DaysOrMoreBeforeTravelDate').value;
        // Save the updated carrier details to local storage
        carriers[carriers.findIndex(c => c.carrierName === carrierSelect.value)] = selectedCarrier;
        localStorage.setItem('carrierList', JSON.stringify(carriers));

        // Save the updated carrier list back to localStorage
        // localStorage.setItem('carrierList', JSON.stringify(carriers));

        acknowledgmentMessage.innerText = `${selectedCarrier.carrierName} details are updated successfully!`;
        acknowledgmentMessage.style.display = 'block';
    }
});

// Delete carrier details
document.getElementById('deleteCarrier').addEventListener('click', function() {
    let carriers = JSON.parse(localStorage.getItem('carrierList')) || [];
    let flightList = JSON.parse(localStorage.getItem('flightList')) || [];
    
    const selectedCarrierIndex = carriers.findIndex(c => c.carrierName === carrierSelect.value); // Find by carrier name

    if (selectedCarrierIndex !== -1) {
        // Remove the carrier from the list
        const deletedCarrierName = carriers[selectedCarrierIndex].carrierName;
        carriers.splice(selectedCarrierIndex, 1);

        for(var f in flightList){
            const index = flightList.findIndex(f => f.carrierName == carrierSelect.value);
            flightList.splice(index,1);
        }

        // Save the updated carrier list back to localStorage
        localStorage.setItem('carrierList', JSON.stringify(carriers));
        localStorage.setItem('flightList', JSON.stringify(flightList));

        acknowledgmentMessage.innerText = `${deletedCarrierName} has been removed from the system.`;
        acknowledgmentMessage.style.display = 'block';

        // Clear the form fields and repopulate carrier options
        carrierDetails.style.display = 'none';
        carrierSelect.value = "";
        document.getElementById('carrierName').value = "";

        populateCarrierOptions(); // Refresh the select options
    }
});
