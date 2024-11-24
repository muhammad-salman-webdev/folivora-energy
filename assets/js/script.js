const industryTabsBtns = document.querySelectorAll(
  "section.industry-section[data-change-industry-tabs] .industry-container > .industry-cards > .card"
);
const industryTabs = document.querySelectorAll(
  "section.industry-section[data-change-industry-tabs] .industry-container > .industry-cards-desc-container > .industry-desc"
);
industryTabsBtns.forEach((tabBtn, index) => {
  tabBtn.addEventListener("click", () => {
    industryTabsBtns.forEach((_tabBtn, _index) => {
      const tab = industryTabs[_index];
      if (index === _index) {
        _tabBtn.classList.add("active");

        tab.classList.add("show");
        setTimeout(() => {
          tab.classList.add("anim");
        }, 10);
      } else {
        _tabBtn.classList.remove("active");
        tab.classList.remove("anim");
        setTimeout(() => {
          tab.classList.remove("show");
        }, 500);
      }
    });
  });
});

// %%%%%%%%%%%%
const swiper = new Swiper(".partner-swiper[data-partner-swiper]", {
  // Optional parameters
  slidesPerView: 6,
  loop: true,
});
