document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const userId = document.getElementById('userId').value;
  const password = document.getElementById('password').value;
  const errorMsg = document.getElementById('error-msg');

  // Retrieve user from localStorage
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find(u => u.userId === userId);

  if (!user) {
      errorMsg.textContent = 'ID not valid';
  } else if (user.password !== password) {
      errorMsg.textContent = 'Password not valid';
  } else {
      errorMsg.textContent = '';
      window.location.href = 'home.html';
  }
});
