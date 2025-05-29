

 document.getElementById('login-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:3000/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, email, password }),
  });

  const message = await response.text();
  alert(message); // Or redirect to next page
  });


     document.getElementById("login-form").addEventListener("submit", function(event){
      event.preventDefault(); // Prevent actual form submission
      // Simulate login success
      window.location.href = "tricks.html"; // Your next page
    });
