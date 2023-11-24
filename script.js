const navBar = document.querySelector("nav"),
       menuBtns = document.querySelectorAll(".menu-icon"),
       overlay = document.querySelector(".overlay");

     menuBtns.forEach((menuBtn) => {
       menuBtn.addEventListener("click", () => {
         navBar.classList.toggle("open");
       });
     });

     overlay.addEventListener("click", () => {
       navBar.classList.remove("open");
     });

     document.addEventListener("DOMContentLoaded", function () {
      const loginButton = document.getElementById("loginButton");
      const loginForm = document.getElementById("loginForm");
      const closeButton = document.getElementById("closeButton");
    
      function toggleLoginForm() {
        loginForm.style.display = (loginForm.style.display === "none" || loginForm.style.display === "") ? "block" : "none";
      }
    
      loginButton.addEventListener("click", toggleLoginForm);
      closeButton.addEventListener("click", toggleLoginForm);
    });
    function toggleRegistrationBox() {
      var registrationBox = document.getElementById("registrationBox");
      registrationBox.style.display = (registrationBox.style.display === "none" || registrationBox.style.display === "") ? "block" : "none";
    }
    
    function toggleRegistrationAndLoginForm() {
      var registrationBox = document.getElementById("registrationBox");
      var loginForm = document.getElementById("loginForm");

      // Toggle the visibility of the registration box
      registrationBox.style.display = (registrationBox.style.display === "none" || registrationBox.style.display === "") ? "block" : "none";

      // Toggle the visibility of the login form
      loginForm.style.display = (loginForm.style.display === "none" || loginForm.style.display === "") ? "block" : "none";
    }
    function closeRegistrationBox() {
      var registrationBox = document.getElementById("registrationBox");

      // Hide the registration box
      registrationBox.style.display = "none";
    }

    var isRegistrationBoxOpen = false;

  function toggleRegistrationAndLoginForm() {
    var registrationBox = document.getElementById("registrationBox");
    var loginForm = document.getElementById("loginForm");

    // Hide the login form
    loginForm.style.display = "none";

    // Toggle the visibility of the registration box
    if (isRegistrationBoxOpen) {
      closeRegistrationBox();
    } else {
      registrationBox.style.display = "block";
      isRegistrationBoxOpen = true;

      // Disable the login button
      document.getElementById("loginButton").disabled = true;
    }
  }

  function closeRegistrationBox() {
    var registrationBox = document.getElementById("registrationBox");
    var loginForm = document.getElementById("loginForm");

    // Hide the registration box
    registrationBox.style.display = "none";
    isRegistrationBoxOpen = false;

    // Show the login form only when the login button is clicked
    document.getElementById("loginButton").disabled = false;
  }