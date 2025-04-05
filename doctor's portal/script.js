
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector("form");

    if (!loginForm) {
      console.error("Form not found!");
      return;
    }

    loginForm.addEventListener("submit", function (event) {
      event.preventDefault(); 
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
      }

      if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
      }

     
      alert("Login successful!");

      
      window.location.href = "doctor-detail.html"; 
    });

    function validateEmail(email) {
      const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return regex.test(email);
    }
  });


  
