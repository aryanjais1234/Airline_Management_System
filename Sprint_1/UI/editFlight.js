const flightCarrier = document.getElementById('flightCarrier');
const flightDetails = document.getElementById('flightDetails');
const flightAckMessage = document.getElementById('flightAckMessage');

// Simulated flight data
const flights = [
    { id: 1, carrier: "Carrier A", origin: "City A", destination: "City B", airFare: 200, business: 50, economy: 100, executive: 30 },
    { id: 2, carrier: "Carrier B", origin: "City B", destination: "City A", airFare: 150, business: 40, economy: 90, executive: 20 },
];

// Populate select options for carriers
flights.forEach(flight => {
    const option = document.createElement('option');
    option.value = flight.id;
    option.textContent = flight.carrier;
    flightCarrier.appendChild(option);
});

document.getElementById('searchFlight').addEventListener('click', function() {
    const selectedFlight = flights.find(f => f.id == flightCarrier.value);
    
    if (selectedFlight) {
        document.getElementById('flightAirFare').value = selectedFlight.airFare;
        document.getElementById('seatCapacityBusinessClass').value = selectedFlight.business;
        document.getElementById('seatCapacityEconomyClass').value = selectedFlight.economy;
        document.getElementById('seatCapacityExecutiveClass').value = selectedFlight.executive;

        flightDetails.style.display = 'block'; // Show flight details
    } else {
        flightAckMessage.innerText = "Flight not found!";
        flightAckMessage.style.display = 'block';
      }
  });
  
  document.getElementById('editFlight').addEventListener('click', function() {
      const selectedFlight = flights.find(f => f.id == flightCarrier.value);
      
      // Code to update the flight information can be added here
      // This is a simulation; in a real app, you would send this data to your server.
      if (selectedFlight) {
          selectedFlight.airFare = document.getElementById('flightAirFare').value;
          selectedFlight.business = document.getElementById('seatCapacityBusinessClass').value;
          selectedFlight.economy = document.getElementById('seatCapacityEconomyClass').value;
          selectedFlight.executive = document.getElementById('seatCapacityExecutiveClass').value;
  
          flightAckMessage.innerText = "Flight Information Updated Successfully!!!";
          flightAckMessage.style.display = 'block';
      }
  });
  
  document.getElementById('deleteFlight').addEventListener('click', function() {
      const flightIndex = flights.findIndex(f => f.id == flightCarrier.value);
      
      // Code to delete the flight information can be added here
      if (flightIndex > -1) {
          flights.splice(flightIndex, 1);
          flightAckMessage.innerText = "Flight details are removed successfully!!!";
          flightAckMessage.style.display = 'block';
  
          // Clear the form fields
          flightDetails.style.display = 'none';
          flightCarrier.value = "";
          document.getElementById('flightAirFare').value = "";
          document.getElementById('seatCapacityBusinessClass').value = "";
          document.getElementById('seatCapacityEconomyClass').value = "";
          document.getElementById('seatCapacityExecutiveClass').value = "";
      }
  });
  
