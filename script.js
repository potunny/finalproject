// Select the add-to-cart buttons and the badge element
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartBadge = document.getElementById('cart-badge');

// Retrieve the cart count from localStorage or default to 0 if not set
let cartCount = parseInt(localStorage.getItem('cartCount')) || 0;

// Function to update the cart badge
function updateCartBadge() {
    cartBadge.textContent = cartCount; // Update the badge with the current count
    if (cartCount > 0) {
        cartBadge.classList.add('visible'); // Show the badge if items are in the cart
    } else {
        cartBadge.classList.remove('visible'); // Hide the badge if the cart is empty
    }
}

// Add event listener to each "Add to Cart" button
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartCount++; // Increment cart count
        localStorage.setItem('cartCount', cartCount); // Save the updated count to localStorage
        updateCartBadge(); // Update the badge whenever an item is added
    });
});

// Initialize the badge on page load
updateCartBadge();
