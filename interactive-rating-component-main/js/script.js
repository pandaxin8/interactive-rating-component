document.addEventListener('DOMContentLoaded', function() {
    // Cache DOM elements
    var ratingState = document.querySelector('.rating-state');
    var thankYouState = document.querySelector('.thank-you-state');
    var ratingOptions = document.querySelectorAll('.rating-option');
    var submitBtn = document.querySelector('.submit-button');
    var selectedRatingNumber = document.querySelector('.rating-number');
    
    // Variable to store the selected rating
    var selectedRating;

    // Add click event to rating options
    ratingOptions.forEach(function(option) {
        option.addEventListener('click', function() {
            // Remove active class from all rating options
            ratingOptions.forEach(function(opt) {
                opt.classList.remove('active');
            });
            // Add active class to clicked rating option
            this.classList.add('active');
            // Store the selected rating value
            selectedRating = this.getAttribute('data-rating');
        });
    });

    // Listen for submit button click
    submitBtn.addEventListener('click', function() {

        // Check if a rating was selected
        if (selectedRating) {
            // Update the displayed rating in the thank you state
            selectedRatingNumber.textContent = selectedRating;

            // Switch to the thank you state
            ratingState.style.display = 'none';
            thankYouState.classList.add('show-thank-you');
            thankYouState.style.display = 'block';
        } else {
            alert("Please select a rating before submitting.");
        }
    });
});
