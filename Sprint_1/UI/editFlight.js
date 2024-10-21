const flightCarrier = document.getElementById('flightCarrier');
const flightDetails = document.getElementById('flightDetails');
const flightAckMessage = document.getElementById('flightAckMessage');
const carrierList = JSON.parse(localStorage.getItem('carrierList')) || [];

// Simulated flight data


// Function to populate select options from localStorage
function populateCarrierOptions() {
    const flightList = JSON.parse(localStorage.getItem('flightList')) || [];
    flightList.innerHTML = ''; // Clear any existing options

    flightList.forEach(flight => {
        const option = document.createElement('option');
        option.value = flight.carrierName; // Use carrier name as value
        option.textContent = flight.carrierName; // Use carrier name as display text
        carrierSelect.appendChild(option);
    });

    flightList.forEach(flight => {
        const option = document.createElement('option');
        option.value = flight.origin; // Use carrier name as value
        option.textContent = flight.origin; // Use carrier name as display text
        OriginSelect.appendChild(option);
    });

    flightList.forEach(flight => {
        const option = document.createElement('option');
        option.value = flight.destination; // Use carrier name as value
        option.textContent = flight.destination; // Use carrier name as display text
        DestinationSelect.appendChild(option);
    });
}

// Call the function to populate options when the page loads
window.onload = function() {
    populateCarrierOptions();
};

const flightList = JSON.parse(localStorage.getItem('flightList')) || [];


document.getElementById('searchFlight').addEventListener('click', function() {
    flightDetails.style.display = 'block';
    const selectedFlight = flightList.find(f => f.carrierName == carrierSelect.value && f.origin===OriginSelect.value  && f.destination===DestinationSelect.value);
    
    if (selectedFlight) {
        document.getElementById('flightAirFare').value = selectedFlight.airFare;
        document.getElementById('seatCapacityBusinessClass').value = selectedFlight.seatCapacityBusinessClass;
        document.getElementById('seatCapacityEconomyClass').value = selectedFlight.seatCapacityEconomyClass;
        document.getElementById('seatCapacityExecutiveClass').value = selectedFlight.seatCapacityExecutiveClass;

        flightDetails.style.display = 'block'; // Show flight details
    } else {
        flightAckMessage.innerText = "Flight not found!";
        flightAckMessage.style.display = 'block';
      }
  });
  
  document.getElementById('editFlight').addEventListener('click', function() {
      const selectedFlight = flightList.find(f => f.carrierName == carrierSelect.value);
      
      // Code to update the flight information can be added here
      // This is a simulation; in a real app, you would send this data to your server.
      if (selectedFlight) {
          selectedFlight.airFare = document.getElementById('flightAirFare').value;
          selectedFlight.seatCapacityBusinessClass = document.getElementById('seatCapacityBusinessClass').value;
          selectedFlight.seatCapacityEconomyClass = document.getElementById('seatCapacityEconomyClass').value;
          selectedFlight.seatCapacityExecutiveClass = document.getElementById('seatCapacityExecutiveClass').value;
  
          flightAckMessage.innerText = "Flight Information Updated Successfully!!!";
          flightAckMessage.style.display = 'block';
      }
  });
  
  document.getElementById('deleteFlight').addEventListener('click', function() {
      const flightIndex = flightList.findIndex(f => f.carrierName == carrierSelect.value);
      
      // Code to delete the flight information can be added here
      if (flightIndex > -1) {
          flightList.splice(flightIndex, 1);
          flightAckMessage.innerText = "Flight details are removed successfully!!!";
          flightAckMessage.style.display = 'block';
  
          // Clear the form fields
          flightDetails.style.display = 'none';
          carrierSelect.value = "";
          document.getElementById('flightAirFare').value = "";
          document.getElementById('seatCapacityBusinessClass').value = "";
          document.getElementById('seatCapacityEconomyClass').value = "";
          document.getElementById('seatCapacityExecutiveClass').value = "";
      }
      localStorage.setItem('flightList', JSON.stringify(flightList));
  });
  
