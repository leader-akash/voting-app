document.addEventListener("DOMContentLoaded", function () {
    const adminRegistrationForm = document.getElementById("admin-registration-form");

    adminRegistrationForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const adminUsername = document.getElementById("admin-username").value;
        const adminPassword = document.getElementById("admin-password").value;
        const adminEmail = document.getElementById("admin-email").value;
        const adminPhone = document.getElementById("admin-phone").value;

        // Check if admin data already exists in local storage
        const adminData = JSON.parse(localStorage.getItem("adminData")) || {};

        if (adminData[adminUsername]) {
            alert("Admin with this username already exists. Please choose a different username.");
        } else {
            // Create an object to store admin data
            const adminUserData = {
                password: adminPassword,
                email: adminEmail,
                phone: adminPhone,
            };

            // Store admin data in local storage
            adminData[adminUsername] = adminUserData;
            localStorage.setItem("adminData", JSON.stringify(adminData));

            alert("Admin registration successful!");

            // Redirect to a different page or perform other actions as needed
            window.location.href = "adminHomePage.html";
        }
    });
});
