document.addEventListener("DOMContentLoaded", function() {
    let selectedRating = null;

    const ratingDivs = document.querySelectorAll("div.numbersOne, div.numbers, div.numbersFive");

    ratingDivs.forEach(function (div) {
        div.addEventListener("click", function () {
            ratingDivs.forEach(function (el) {
                el.classList.remove("active");
            });

            div.classList.add("active");

            selectedRating = div.textContent;
            console.log("You selected rating: " + selectedRating);
        });
    });

    const submitBtn = document.querySelector("button");
    const thankYouPage = document.querySelector(".thankYouContainer");
    const ratingDisplay = document.getElementById("ratingDisplay");

    submitBtn.addEventListener("click", function() {
        if (selectedRating !== null) {
            ratingDisplay.textContent = selectedRating; 
            document.querySelector(".ratingContainer").style.display = "none";  
            thankYouPage.style.display = "block";  
        } else {
            alert("Please select a rating before submitting.");
        }
    });
});
