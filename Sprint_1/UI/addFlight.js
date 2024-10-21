// Function to populate carrier options from localStorage
function populateCarrierOptions() {
    const carrierSelect = document.getElementById('carrierName');
    const carrierList = JSON.parse(localStorage.getItem('carrierList')) || [];
  
    // Clear existing options
    carrierSelect.innerHTML = '';
  
    // Add each carrier as an option
    carrierList.forEach((carrier) => {
        const option = document.createElement('option');
        option.value = carrier.carrierName;
        option.text = carrier.carrierName;
        carrierSelect.appendChild(option);
    });
  }
  
  // Call the function when the page loads
  window.onload = function() {
    populateCarrierOptions();
  };
  
  // Handle form submission to add flight details
  document.getElementById('flightForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const flightId = Math.floor(Math.random() * 1000); // Static ID generation for example
    const successMessage = `Flight Information Saved Successfully!!! - Flight Id generated is ${flightId}`;
  
    document.getElementById('flightSuccessMessage').innerText = successMessage;
    document.getElementById('flightSuccessMessage').style.display = 'block';
  
    // Save flight details to localStorage (you can modify this to save multiple flights)
    const flightDetails = {
        carrierName: document.getElementById('carrierName').value,
        origin: document.getElementById('origin').value,
        destination: document.getElementById('destination').value,
        airFare: document.getElementById('airFare').value,
        seatCapacityBusinessClass: document.getElementById('seatCapacityBusinessClass').value,
        seatCapacityEconomyClass: document.getElementById('seatCapacityEconomyClass').value,
        seatCapacityExecutiveClass: document.getElementById('seatCapacityExecutiveClass').value
    };
  
    // Retrieve current flight list or initialize an empty array
    let flightList = JSON.parse(localStorage.getItem('flightList')) || [];
    flightList.push(flightDetails);
  
    // Save the updated flight list back to localStorage
    localStorage.setItem('flightList', JSON.stringify(flightList));
  
    console.log('Flight added:', flightDetails);
  });
  