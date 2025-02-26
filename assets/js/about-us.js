// Toggle functionality for the Publications section

// Get the toggle button and publications cards container elements
const publicationsToggleButton = document.getElementById(
  "publicationsCardsToggleButton"
);
const publicationsCardsContainer = document.getElementById("publicationsCards");

// Add a click event listener to the toggle button
publicationsToggleButton.addEventListener("click", () => {
  // Toggle the '_hide' class for the button and the publications cards container
  publicationsToggleButton.classList.toggle("_hide");
  publicationsCardsContainer.classList.toggle("_hide");
});

// Adding New Card 1-by-1

const addMoreBtn = document.getElementById("add-more-publications-btn");
const pubCards = publicationsCardsContainer.querySelectorAll(".article-card");

let visibleCount = 2; // Initially show 2 cards

// Initially hide all cards except the first two
pubCards.forEach((card, index) => {
  if (index >= visibleCount) {
    card.style.display = "none";
  }
});

addMoreBtn.addEventListener("click", () => {
  addMoreBtn.classList.add("animating");

  setTimeout(() => {
    addMoreBtn.classList.remove("animating");

    if (visibleCount < pubCards.length) {
      pubCards[visibleCount].style.display = "block"; // Show next card
      visibleCount++; // Increment visible count
    }

    // Hide button if all cards are visible
    if (visibleCount >= pubCards.length) {
      addMoreBtn.style.display = "none";
    }
  }, 1000); // 1 sec animation
});
