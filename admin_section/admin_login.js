document.addEventListener("DOMContentLoaded", function () {
    const adminLoginForm = document.getElementById("admin-login-form");

    adminLoginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const enteredAdminUsername = document.getElementById("admin-username").value;
        const enteredAdminPassword = document.getElementById("admin-password").value;

        // Retrieve admin data from local storage
        const adminData = JSON.parse(localStorage.getItem("adminData")) || {};

        if (adminData[enteredAdminUsername]) {
            const storedAdminPassword = adminData[enteredAdminUsername].password;

            if (enteredAdminPassword === storedAdminPassword) {
                alert("Admin login successful!");

                // Redirect to the adminHomePage.html page
                window.location.href = "./adminHomePage.html";
            } else {
                alert("Incorrect admin password. Please try again.");
            }
        } else {
            alert("Admin with this username does not exist. Please register first.");
        }
    });
});
