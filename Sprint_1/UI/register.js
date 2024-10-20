document.getElementById('registrationForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const dob = new Date(document.getElementById('dob').value);
  const email = document.getElementById('email').value;
  const address = document.getElementById('address').value;
  const contactNumber = document.getElementById('contactNumber').value;
  const acknowledgment = document.getElementById('acknowledgment');

  // Validate input fields
  if (dob.getFullYear() < 1924) {
      acknowledgment.textContent = 'Choose a date greater than 1/1/1924';
      acknowledgment.style.color = 'red';
      return;
  }

  if (contactNumber.length !== 10 || isNaN(contactNumber)) {
      acknowledgment.textContent = 'Enter a valid contact number';
      acknowledgment.style.color = 'red';
      return;
  }

  if (!email.includes('@')) {
      acknowledgment.textContent = 'Enter a valid email id';
      acknowledgment.style.color = 'red';
      return;
  }

  // Generate random Passenger ID and Password
  const passengerId = Math.floor(10000 + Math.random() * 90000);
  const password = firstName.slice(0, 4) + '@123';

  // Save user details to localStorage
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const newUser = {
      userId: passengerId.toString(),
      firstName,
      lastName,
      dob: dob.toLocaleDateString(),
      email,
      address,
      contactNumber,
      password
  };
  users.push(newUser);
  localStorage.setItem('users', JSON.stringify(users));

  // Acknowledge successful registration
  acknowledgment.textContent = `Passenger Registration successful. Passenger ID: ${passengerId}, Password: ${password}`;
  acknowledgment.style.color = 'green';
});

document.getElementById('resetButton').addEventListener('click', function () {
  if (!confirm('Is it okay to reset the fields?')) {
      event.preventDefault();
  }
});
