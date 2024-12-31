// Initializing AOS (Animate On Scroll Library) with default settings
AOS.init({
  once: true, // Ensures animations happen only once
});

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// Handling responsive menu toggle functionality
const navbarContainer = document.querySelector(
  ".navbar-container[data-navbar-container]"
);
const responsiveMenuToggle = document.querySelector(
  ".resp-menu-toggle-btn input[type='checkbox']"
);
const navigationBox = navbarContainer.querySelector("nav");

// Toggle menu visibility and animations on menu button state change
responsiveMenuToggle.addEventListener("change", () => {
  if (navbarContainer.classList.contains("show")) {
    // Close the menu with animations
    navbarContainer.classList.remove("anim");

    setTimeout(() => {
      navbarContainer.classList.remove("show");
      navigationBox.classList.remove("anim");
    }, 300); // Ensure animations complete before hiding
  } else {
    // Open the menu with animations
    navbarContainer.classList.add("show");

    setTimeout(() => {
      navbarContainer.classList.add("anim");
      navigationBox.classList.add("anim");
    }, 10); // Delay for smoother animation initialization
  }
});

// Close the responsive menu when clicking outside the navigation area
navbarContainer.addEventListener("click", (event) => {
  if (event.target === navbarContainer) {
    responsiveMenuToggle.checked = false;

    // Close the menu with animations
    navbarContainer.classList.remove("anim");

    setTimeout(() => {
      navbarContainer.classList.remove("show");
      navigationBox.classList.remove("anim");
    }, 300); // Ensure animations complete before hiding
  }
});

// Managing submenu toggling for navigation items with submenus
const navItemsWithSubmenus = document.querySelectorAll(
  "#header-nav-main > li:has(.submenu)"
);

navItemsWithSubmenus.forEach((navItem, currentIndex) => {
  const submenuTrigger = navItem.querySelector(".submenu-triger");

  submenuTrigger.addEventListener("click", () => {
    // Close all other open submenus and toggle the clicked submenu
    navItemsWithSubmenus.forEach((otherNavItem, otherIndex) => {
      if (currentIndex === otherIndex) {
        // Toggle active state for the clicked menu
        otherNavItem.classList.toggle("active");
      } else {
        // Remove active state from other menus
        otherNavItem.classList.remove("active");
      }
    });
  });
});

// Animating the header on scroll
const headerGlobal = document.querySelector(
  "section .header-section#header-global"
);

window.addEventListener("scroll", () => {
  const scrollThreshold = window.innerHeight * 0.5; // 50% of the viewport height
  if (window.scrollY > scrollThreshold) {
    // Add classes to show and animate the header
    headerGlobal.classList.add("show");
    setTimeout(() => {
      headerGlobal.classList.add("anim");
    }, 10);
  } else {
    if (headerGlobal.classList.contains("show")) {
      // Remove classes to hide and reset header animation
      headerGlobal.classList.remove("anim");
      setTimeout(() => {
        headerGlobal.classList.remove("show");
      }, 400);
    }
  }
});
