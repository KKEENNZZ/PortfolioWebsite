let count = 0; // Initialize the visitor count

// Check if there's a stored count in localStorage
if (localStorage.getItem("visitorCount")) {
  count = parseInt(localStorage.getItem("visitorCount"));
}

// Display the count
document.getElementById("visitor-count").textContent = count;

// Increment the count
count++;

// Update the displayed count
document.getElementById("visitor-count").textContent = count;

// Store the updated count in localStorage
localStorage.setItem("visitorCount", count);
