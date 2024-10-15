// Smooth Scrolling for Navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - 50, // Adjust offset for header height
            behavior: 'smooth'
        });
    });
});

// Dynamic Pricing for Order Form
const cuisineSelect = document.getElementById('cuisine');
const quantityInput = document.getElementById('quantity');
const totalPriceDisplay = document.getElementById('total-price');

cuisineSelect.addEventListener('change', updateTotalPrice);
quantityInput.addEventListener('input', updateTotalPrice);

function updateTotalPrice() {
    const pricePerItem = parseInt(cuisineSelect.selectedOptions[0].getAttribute('data-price'));
    const quantity = parseInt(quantityInput.value);
    totalPriceDisplay.textContent = pricePerItem * quantity;
}

// Reservation Form Submission
const reservationForm = document.getElementById('reservation-form');
reservationForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Reservation made successfully!');
    reservationForm.reset();
});

// Review Submission & Display
const reviewForm = document.getElementById('review-form');
const reviewList = document.getElementById('review-list');

reviewForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('review-name').value;
    const rating = document.getElementById('rating').value;
    const reviewText = document.getElementById('review-text').value;

    const reviewItem = document.createElement('div');
    reviewItem.className = 'review-item';
    reviewItem.innerHTML = `
        <h3>${name}</h3>
        <p>Rating: ${rating}/5</p>
        <p>${reviewText}</p>
    `;
    reviewList.appendChild(reviewItem);

    reviewForm.reset();
});
