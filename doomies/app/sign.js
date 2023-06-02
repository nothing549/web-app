// script.js
document.getElementById("auth-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    var name = document.getElementById("auth-name").value;
    var surname = document.getElementById("auth-surname").value;
    var email = document.getElementById("auth-email").value;
    var password = document.getElementById("auth-password").value;
  
    // Check if the user already has an account
    var userData = getUserData(email);
    if (userData) {
      // User exists, sign in
      if (password !== userData.password) {
        alert("Invalid password");
        return;
      }
    } else {
      // User doesn't exist, sign up
      userData = {
        name: name,
        surname: surname,
        email: email,
        password: password
      };
      saveUserData(userData);
    }
  
    // Clear the form fields
    document.getElementById("auth-name").value = "";
    document.getElementById("auth-surname").value = "";
    document.getElementById("auth-email").value = "";
    document.getElementById("auth-password").value = "";
  
    // Hide the sign-up form
    document.getElementById("auth-form").style.display = "none";
    document.getElementById("rar").style.display = "none";
  
    // Redirect to the home page
    showHomePage(userData);
  });
  
  
  
  function getUserData(email) {
    // Retrieve the user data from storage (e.g., localStorage)
    var userData = localStorage.getItem(email);
    if (userData) {
      return JSON.parse(userData);
    } else {
      return null;
    }
  }
  
  function saveUserData(userData) {
    // Save the user data to storage (e.g., localStorage)
    localStorage.setItem(userData.email, JSON.stringify(userData));
  }
  
  function showHomePage(userData) {
    // Hide the auth form
    document.getElementById("auth-container").style.display = "none";
  
    // Show the home page
    document.getElementById("home-name").textContent = "Name: " + userData.name;
    document.getElementById("home-surname").textContent = "Surname: " + userData.surname;
    document.getElementById("home-email").textContent = "Email: " + userData.email;
    document.getElementById("home-container").style.display = "block";
  }
  
  function add() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var result = num1 + num2;
    document.getElementById("result").textContent = "Result: " + result;
  }
  
  function subtract() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var result = num1 - num2;
    document.getElementById("result").textContent = "Result: " + result;
  }
  
  function multiply() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var result = num1 * num2;
    document.getElementById("result").textContent = "Result: " + result;
  }
  
  function divide() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var result = num1 / num2;
    document.getElementById("result").textContent = "Result: " + result;
  }
  