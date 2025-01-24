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

// Adding New Cards

const addMoreBtn = document.getElementById("add-more-publications-btn");

addMoreBtn.addEventListener("click", () => {
  addMoreBtn.classList.add("animating");
  setTimeout(() => {
    addMoreBtn.classList.remove("animating");
  }, 2000);
});
