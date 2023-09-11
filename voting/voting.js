document.addEventListener("DOMContentLoaded", function () {
    const votingForm = document.getElementById("voting-form");
    const logoutButton = document.getElementById("logout-button");

    votingForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Check if the user has already voted
        const hasVoted = localStorage.getItem("hasVoted");

        if (hasVoted) {
            alert("You have already voted.");
        } else {
            const selectedCandidate = document.querySelector('input[name="candidate"]:checked');

            if (selectedCandidate) {
                const candidateName = selectedCandidate.nextSibling.textContent.trim();
                alert(`You voted for ${candidateName}. Thank you for voting!`);
                
                // Mark the user as voted
                localStorage.setItem("hasVoted", "true");
                
                // Update vote count for the selected candidate
                const selectedCandidateId = selectedCandidate.id;
                const voteCountKey = `voteCount${selectedCandidateId.split("-")[1]}`;
                const voteCount = parseInt(localStorage.getItem(voteCountKey)) || 0;
                localStorage.setItem(voteCountKey, voteCount + 1);
                
            } else {
                alert("Please select a candidate before voting.");
            }
        }
    });

    logoutButton.addEventListener("click", function () {
        // Clear user data and logout
        localStorage.removeItem("hasVoted");
        window.location.href = "../index.html";
    });
});
