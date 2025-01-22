// Initializing AOS (Animate On Scroll Library) with default settings
AOS.init({
  once: true, // Ensures animations happen only once
});

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
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

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// Selecting all navigation items that have a submenu within the main header navigation
const navItemsWithSubmenus = document.querySelectorAll(
  "#header-nav-main > li:has(.submenu)"
);

// Function to check if the screen width is less than 1240 pixels (responsive breakpoint)
function checkScreenSize() {
  return window.innerWidth < 1240;
}

// Initial check to determine if the screen is small
let isSmallScreen = checkScreenSize();

// Update the screen size check when the window is resized
window.addEventListener("resize", () => {
  isSmallScreen = checkScreenSize();
});

// Loop through each navigation item that contains a submenu
navItemsWithSubmenus.forEach((navItem, currentIndex) => {
  // Select the submenu trigger element inside the current navigation item
  const submenuTrigger = navItem.querySelector(".submenu-triger");

  // Find the first anchor link inside the submenu trigger
  const link = submenuTrigger.querySelector("a[href]");

  // Prevent default link behavior if screen size is small (e.g., mobile view)
  if (link) {
    link.addEventListener("click", (_link) => {
      if (isSmallScreen) _link.preventDefault();
    });
  }

  // Add click event to the submenu trigger to handle toggling the submenu
  submenuTrigger.addEventListener("click", () => {
    // Loop through all navigation items with submenus
    navItemsWithSubmenus.forEach((otherNavItem, otherIndex) => {
      if (currentIndex === otherIndex) {
        // Toggle the 'active' class for the clicked menu item
        otherNavItem.classList.toggle("active");
      } else {
        // Remove the 'active' class from all other menu items
        otherNavItem.classList.remove("active");
      }
    });
  });
});

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

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

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

//
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".container .divider-line");

  function checkVisibility() {
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.9 && rect.bottom >= 0) {
        el.classList.add("_anim");
      }
    });
  }

  window.addEventListener("scroll", checkVisibility);
  checkVisibility(); // Initial check in case elements are already in view
});

//

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

function changeLang() {
  // Changing the Lang Selector Btn
  const en_par = document.querySelector("li.lang-selector > .submenu-triger"),
    en_btn = en_par.querySelector("a"),
    en_btn_icon = en_btn.querySelector("i"),
    de_par = document.querySelector("li.lang-selector > div.submenu > ul > li"),
    de_btn = de_par.querySelector("a");
  en_par.appendChild(de_btn);
  de_par.appendChild(en_btn);
  de_btn.appendChild(en_btn_icon);
  // Select all elements with the custom "de-lang" attribute
  const languageElements = document.querySelectorAll("[de-lang]");

  languageElements.forEach((element) => {
    // Retrieve the value of the "de-lang" attribute (German language text)
    const germanText = element.getAttribute("de-lang");

    // Iterate through the child nodes of the element
    element.childNodes.forEach((node) => {
      // Check if the node is a text node and has non-empty content
      if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== "") {
        // Store the current text content (English language text)
        const englishText = node.textContent;

        // Swap the text content with the German text
        node.textContent = germanText;

        // Update the "de-lang" attribute with the English text
        element.setAttribute("de-lang", englishText);
      }
    });
  });
}

// ^^^^^^^^^^^^^^^^^^^^
// ^^^^^^^^^^^^^^^^^^^^
// ^^^^^^^^^^^^^^^^^^^^
//    IMPROTANT NOTE
// ^^^^^^^^^^^^^^^^^^^^
// ^^^^^^^^^^^^^^^^^^^^
// ^^^^^^^^^^^^^^^^^^^^

// FOR BACKEND PRODUCTION

// const urlPath = window.location.pathname;
// if (urlPath.includes("/de/"))  changeLang();

// JUST FOR TESTING, WILL BE REMOVED AFTER BACKEND DEVELOPEMENT

const langParam = new URLSearchParams(window.location.search).get("lang");

if (langParam) {
  if (langParam === "de") {
    changeLang();

    const de_par = document.querySelector(
        "li.lang-selector > div.submenu > ul > li"
      ),
      de_btn = de_par.querySelector("a");

    de_btn.setAttribute("href", window.location.pathname + "?lang=en");

    document.querySelectorAll("a").forEach((anchor) => {
      if (anchor.hasAttribute("href")) {
        const url = new URL(anchor.href);
        if (!url.searchParams.has("lang")) {
          url.searchParams.append("lang", "de");
          anchor.href = url.toString();
        }
      }
    });
  } else {
    const de_par = document.querySelector(
        "li.lang-selector > div.submenu > ul > li"
      ),
      de_btn = de_par.querySelector("a");

    de_btn.setAttribute("href", window.location.pathname + "?lang=de");

    const url = new URL(window.location.href);
    url.searchParams.delete("lang");
    history.replaceState({}, "", url.toString());
  }
} else {
  const de_par = document.querySelector(
      "li.lang-selector > div.submenu > ul > li"
    ),
    de_btn = de_par.querySelector("a");

  de_btn.setAttribute("href", window.location.pathname + "?lang=de");
}
