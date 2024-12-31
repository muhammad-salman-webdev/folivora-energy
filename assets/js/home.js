// Initializing Swiper.js for the Partner section
const partnerSwiper = new Swiper(".partner-swiper[data-partner-swiper]", {
  // Configure Swiper with 6 visible slides and infinite loop
  slidesPerView: 6,
  loop: true,
  speed: 3000, // Animation speed for slide transition
  autoplay: {
    delay: 1, // Delay between slides in milliseconds
    disableOnInteraction: false, // Continue autoplay after user interaction
  },
  breakpoints: {
    1280: { slidesPerView: 6 },
    1024: { slidesPerView: 5 },
    840: { slidesPerView: 4 },
    468: { slidesPerView: 3 },
    310: { slidesPerView: 2 },
    0: { slidesPerView: 1 },
  },
});

// Selecting all Industry tab buttons and their corresponding content descriptions
const industryTabButtons = document.querySelectorAll(
  "section.products-industry-section[data-change-industry-tabs] .products-industry-container > .industry-cards > .card"
);
const industryTabDescriptions = document.querySelectorAll(
  "section.products-industry-section[data-change-industry-tabs] .products-industry-container > .industry-cards-desc-container > .industry-desc"
);

// Adding click event listeners to each Industry tab button
industryTabButtons.forEach((tabButton, index) => {
  tabButton.addEventListener("click", () => {
    // Loop through all buttons and tabs to toggle active and visible states
    industryTabButtons.forEach((button, btnIndex) => {
      const tabDescription = industryTabDescriptions[btnIndex];
      if (index === btnIndex) {
        // Activate the clicked button and show the corresponding tab description
        button.classList.add("active");
        tabDescription.classList.add("show");

        // Add animation after a short delay for smooth transition
        setTimeout(() => {
          tabDescription.classList.add("anim");
        }, 10);
      } else {
        // Deactivate other buttons and hide their corresponding tab descriptions
        button.classList.remove("active");
        tabDescription.classList.remove("anim");
        setTimeout(() => {
          tabDescription.classList.remove("show");
        }, 500); // Delay ensures animations complete before hiding
      }
    });
  });
});
