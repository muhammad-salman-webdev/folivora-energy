// Selecting all industry tab buttons and corresponding tab content descriptions
const industryTabsBtns = document.querySelectorAll(
  "section.products-industry-section[data-change-industry-tabs] .products-industry-container > .industry-cards > .card"
);
const industryTabs = document.querySelectorAll(
  "section.products-industry-section[data-change-industry-tabs] .products-industry-container > .industry-cards-desc-container > .industry-desc"
);

// Adding click event listeners to each industry tab button
industryTabsBtns.forEach((tabBtn, index) => {
  tabBtn.addEventListener("click", () => {
    // Loop through all buttons and tabs to toggle active and show states
    industryTabsBtns.forEach((_tabBtn, _index) => {
      const tab = industryTabs[_index];
      if (index === _index) {
        // Activate the clicked button and show the corresponding tab
        _tabBtn.classList.add("active");
        tab.classList.add("show");

        // Adding animation after a short delay for smooth transition
        setTimeout(() => {
          tab.classList.add("anim");
        }, 10);
      } else {
        // Deactivate other buttons and hide their corresponding tabs
        _tabBtn.classList.remove("active");
        tab.classList.remove("anim");
        setTimeout(() => {
          tab.classList.remove("show");
        }, 500); // Delay ensures animations are completed before hiding
      }
    });
  });
});
