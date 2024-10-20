window.onload = function() {
  const welcomeMessage = document.getElementById('welcomeMessage');
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const loggedInUser = users[0]; // For now, assuming the first user is logged in

  if (loggedInUser) {
      welcomeMessage.textContent = `Welcome, ${loggedInUser.firstName} ${loggedInUser.lastName}!!!`;
  }

  // Profile Link
  document.getElementById('profileLink').addEventListener('click', function () {
      displayUserProfile(loggedInUser);
  });

  // My Trips Link
  document.getElementById('myTripsLink').addEventListener('click', function () {
      displayUserTrips();
  });

  // Flight Search
  document.getElementById('searchForm').addEventListener('submit', function (e) {
      e.preventDefault();
      searchFlights();
  });
};

function displayUserProfile(user) {
  const profileHtml = `
      <h3>My Profile</h3>
      <p><strong>Name:</strong> ${user.firstName} ${user.lastName}</p>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Address:</strong> ${user.address}</p>
      <p><strong>Contact:</strong> ${user.contactNumber}</p>
      <button class="editBtn" onclick="editProfile()">Edit Profile</button>
  `;
  document.getElementById('flightResults').innerHTML = profileHtml;
}

function displayUserTrips() {
  const tripsHtml = `
      <h3>My Trips</h3>
      <p><a href="#" onclick="showUpcomingTrips()">Upcoming</a></p>
      <p><a href="#" onclick="showCancelledTrips()">Cancelled</a></p>
      <p><a href="#" onclick="showCompletedTrips()">Completed</a></p>
  `;
  document.getElementById('flightResults').innerHTML = tripsHtml;
}

function searchFlights() {
  const origin = document.getElementById('origin').value;
  const destination = document.getElementById('destination').value;
  const departureDate = document.getElementById('departureDate').value;
  const travellers = document.getElementById('travellers').value;
  const classType = document.getElementById('classType').value;

  // Static data for available flights (can be replaced with dynamic data)
  const flights = [
      { flightID: 101, seats: 50, seatCategory: 'Economy', travelDate: '2024-10-30' },
      { flightID: 102, seats: 30, seatCategory: 'Business', travelDate: '2024-11-05' },
      { flightID: 103, seats: 20, seatCategory: 'Executive', travelDate: '2024-12-12' },
  ];

  const resultHtml = flights.map(flight => `
      <p>Flight ID: ${flight.flightID}, Seats: ${flight.seats}, Seat Category: ${flight.seatCategory}, Travel Date: ${flight.travelDate}
      <button onclick="bookFlight(${flight.flightID})">Book</button></p>
  `).join('');

  document.getElementById('flightResults').innerHTML = resultHtml;
}

function bookFlight(flightID) {
  alert(`Flight ID - ${flightID} is booked successfully!`);
}

function showUpcomingTrips() {
  const upcomingTripsHtml = `
      <h4>Upcoming Trips</h4>
      <table>
          <tr><th>Flight Name</th><th>Origin</th><th>Destination</th><th>Travel Date</th><th>Price</th></tr>
          <tr><td>Flight 101</td><td>Delhi</td><td>New York</td><td>2024-10-30</td><td>$500</td></tr>
      </table>
  `;
  document.getElementById('flightResults').innerHTML = upcomingTripsHtml;
}

function showCancelledTrips() {
  const cancelledTripsHtml = `
      <h4>Cancelled Trips</h4>
      <table>
          <tr><th>Flight Name</th><th>Origin</th><th>Destination</th><th>Travel Date</th><th>Price</th></tr>
          <tr><td>Flight 102</td><td>Mumbai</td><td>London</td><td>2024-11-05</td><td>$700</td></tr>
      </table>
  `;
  document.getElementById('flightResults').innerHTML = cancelledTripsHtml;
}

function showCompletedTrips() {
  const completedTripsHtml = `
      <h4>Completed Trips</h4>
      <table>
          <tr><th>Flight Name</th><th>Origin</th><th>Destination</th><th>Travel Date</th><th>Price</th></tr>
          <tr><td>Flight 103</td><td>Bangalore</td><td>Sydney</td><td>2024-12-12</td><td>$900</td></tr>
      </table>
  `;
  document.getElementById('flightResults').innerHTML = completedTripsHtml;
}
