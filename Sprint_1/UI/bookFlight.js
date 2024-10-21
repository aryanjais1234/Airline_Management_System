const flightList = JSON.parse(localStorage.getItem('flightList')) || [];

document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const origin = document.getElementById('flightSearchOrigin').value;
    const destination = document.getElementById('flightSearchDestination').value;
    const travelDate = document.getElementById('travelDate').value;
  
    // Simulated flight data for the search
    
  
    // Filter flights based on criteria
    const filteredFlights = flightList.filter(flight => 
        flight.origin === origin && flight.destination === destination
    );
  
    const flightTableBody = document.querySelector('#flightTable tbody');
    flightTableBody.innerHTML = ""; // Clear previous results
  
    filteredFlights.forEach(flight => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${flight.carrierName}</td>
            <td>${flight.seatCapacityBusinessClass}</td>
            <td>${flight.seatCapacityEconomyClass}</td>
            <td>${flight.seatCapacityExecutiveClass}</td>
            <td><button class="bookButton" data-flight-id="${flight.carrierName}">Book</button></td>
        `;
        flightTableBody.appendChild(row);
    });
  
    if (filteredFlights.length > 0) {
        document.getElementById('flightTable').style.display = 'table'; // Show the table
    } else {
        alert("No flights found for the selected criteria.");
        document.getElementById('flightTable').style.display = 'none';
    }
  });
  
  // Book flight event delegation
  document.getElementById('flightTable').addEventListener('click', function(event) {
    if (event.target.classList.contains('bookButton')) {
        const flightId = event.target.getAttribute('data-flight-id');
        document.getElementById('bookingSuccessMessage').innerText = `${flightId} Flight is booked successfully!`;
        document.getElementById('bookingSuccessMessage').style.display = 'block';
    }
  });
  