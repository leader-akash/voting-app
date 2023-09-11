document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const enteredUsername = document.getElementById("username").value;
        const enteredPassword = document.getElementById("password").value;

        // Retrieve user data from local storage
        const storedUserData = JSON.parse(localStorage.getItem("userData"));

        if (storedUserData) {
            const storedUsername = storedUserData.username;
            const storedPassword = storedUserData.password;
            const hasVoted = storedUserData.hasVoted; // Add this line

            // Check if entered username and password match stored data
            if (enteredUsername === storedUsername && enteredPassword === storedPassword) {
                if (hasVoted) {
                    alert("You have already voted.");
                } else {
                    alert("Login successful!");
                    // Redirect to the voting.html page
                    window.location.href = "./voting/voting.html";
                }
            } else {
                alert("Incorrect username or password. Please try again.");
            }
        } else {
            alert("No user data found. Please register first.");
        }
    });
});
