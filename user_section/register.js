document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registration-form");

    registrationForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;

        // Create an object to store user data
        const userData = {
            username: username,
            password: password,
            email: email,
            phone: phone,
        };

        // Store user data in local storage
        localStorage.setItem("userData", JSON.stringify(userData));

        alert("Registration successful!");

        // Redirect to the voting.html page
        window.location.href = "../voting/voting.html";
    });
});
