document.addEventListener("DOMContentLoaded", function () {
    // Retrieve the vote counts from local storage
    const voteCount1 = localStorage.getItem("voteCount1") || 0;
    const voteCount2 = localStorage.getItem("voteCount2") || 0;
    const voteCount3 = localStorage.getItem("voteCount3") || 0;
    const voteCount4 = localStorage.getItem("voteCount4") || 0;

    // Display the vote counts on the page
    document.getElementById("vote-count-1").textContent = voteCount1;
    document.getElementById("vote-count-2").textContent = voteCount2;
    document.getElementById("vote-count-3").textContent = voteCount3;
    document.getElementById("vote-count-4").textContent = voteCount4;

    // Logout button functionality
    const logoutButton = document.getElementById("logout-button");
    logoutButton.addEventListener("click", function () {
        // Clear admin data and logout
        localStorage.clear();
        window.location.href = "../index.html";
    });
});
