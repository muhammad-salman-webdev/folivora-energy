// Selecting all industry tab buttons and corresponding tab content descriptions
const industryTabsBtns = document.querySelectorAll(
  "section.industry-section[data-change-industry-tabs] .industry-container > .industry-cards > .card"
);
const industryTabs = document.querySelectorAll(
  "section.industry-section[data-change-industry-tabs] .industry-container > .industry-cards-desc-container > .industry-desc"
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

// Initializing Swiper.js for the partner section
const swiper = new Swiper(".partner-swiper[data-partner-swiper]", {
  // Configuring Swiper with 6 visible slides and enabling infinite loop
  slidesPerView: 2,
  loop: true,
  breakpoints: {
    // When the screen width is 600px or more
    600: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 5,
    },
    1024: {
      slidesPerView: 6,
    },
  },
});

// Managing submenu toggling for navigation items with submenus
const navMenus = document.querySelectorAll(
  "#header-nav-main > li:has(.submenu)"
);
navMenus.forEach((navMenu, index) => {
  const triger = navMenu.querySelector(".submenu-triger");

  triger.addEventListener("click", () => {
    // Close all other open submenus while toggling the clicked submenu
    navMenus.forEach((_navMenu, _index) => {
      if (index === _index) {
        // Toggle active state for the clicked menu
        _navMenu.classList.toggle("active");
      } else {
        // Remove active state from other menus
        _navMenu.classList.remove("active");
      }
    });
  });
});

// Handling responsive menu toggle functionality
const navElem = document.querySelector(
  ".navbar-container[data-navbar-container]"
);
const respMenuBtn = document.querySelector(
  ".resp-menu-toggle-btn input[type='checkbox']"
);
const navBox = navElem.querySelector("nav");

respMenuBtn.addEventListener("change", () => {
  // Prevent body scrolling when the menu is active
  // document.body.classList.toggle("paused");

  if (navElem.classList.contains("show")) {
    // Close the menu with animations
    navElem.classList.remove("anim");

    setTimeout(() => {
      navElem.classList.remove("show");
      navBox.classList.remove("anim");
    }, 300); // Delay ensures animations are completed before hiding
  } else {
    // Open the menu with animations
    navElem.classList.add("show");

    setTimeout(() => {
      navElem.classList.add("anim");
      navBox.classList.add("anim");
    }, 10); // Small delay for initiating animation smoothly
  }
});

navElem.addEventListener("click", (e) => {
  if (e.target === navElem) {
    respMenuBtn.checked = false;
    // Close the menu with animations
    navElem.classList.remove("anim");

    setTimeout(() => {
      navElem.classList.remove("show");
      navBox.classList.remove("anim");
    }, 300); // Delay ensures animations are completed before hiding
  }
});

// Animating the header on scrolls
const header = document.querySelector("section .header-section#header-global");

window.addEventListener("scroll", () => {
  const threshold = window.innerHeight * 0.5; // 50% of the viewport height
  if (window.scrollY > threshold) {
    // Add class to animate the header in
    header.classList.add("show");
    setTimeout(() => {
      header.classList.add("anim");
    }, 10);
  } else {
    if (header.classList.contains("show")) {
      // Remove class to hide the header
      header.classList.remove("anim");
      setTimeout(() => {
        header.classList.remove("show");
      }, 400);
    }
  }
});
