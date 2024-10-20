document.getElementById('bookingForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const origin = document.getElementById('flightSearchOrigin').value;
  const destination = document.getElementById('flightSearchDestination').value;
  const travelDate = document.getElementById('travelDate').value;

  // Simulated flight data for the search
  const availableFlights = [
      { id: 1, seats: 50, category: "Business", origin: "City A", destination: "City B", date: "2024-10-20" },
      { id: 2, seats: 30, category: "Economy", origin: "City B", destination: "City A", date: "2024-10-21" },
      // Add more flights as needed
  ];

  // Filter flights based on criteria
  const filteredFlights = availableFlights.filter(flight => 
      flight.origin === origin && flight.destination === destination && flight.date === travelDate
  );

  const flightTableBody = document.querySelector('#flightTable tbody');
  flightTableBody.innerHTML = ""; // Clear previous results

  filteredFlights.forEach(flight => {
      const row = document.createElement('tr');
      row.innerHTML = `
          <td>${flight.id}</td>
          <td>${flight.seats}</td>
          <td>${flight.category}</td>
          <td><button class="bookButton" data-flight-id="${flight.id}">Book</button></td>
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
      document.getElementById('bookingSuccessMessage').innerText = `Flight Id - ${flightId} is booked successfully!`;
      document.getElementById('bookingSuccessMessage').style.display = 'block';
  }
});
