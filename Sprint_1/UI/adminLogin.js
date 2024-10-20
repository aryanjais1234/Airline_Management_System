document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  // Static credentials for admin login
  const validUsername = 'admin';
  const validPassword = 'admin';

  if (username === validUsername && password === validPassword) {
      // Redirect to home page if credentials match
      window.location.href = 'adminHome.html';
  } else {
      // Show error message
      document.getElementById('errorMessage').style.display = 'block';
  }
});
