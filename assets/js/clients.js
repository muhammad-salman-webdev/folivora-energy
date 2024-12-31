// Initialize Swiper for the Services section case study slider

const servicesCaseStudySwiper = new Swiper(
  ".casestudy-swiper-main[data-services-casestudy-swiper] #casestudy-swiper",
  {
    slidesPerView: 1, // Display one slide at a time
    spaceBetween: 0, // No space between slides
    centeredSlides: true, // Center the active slide
    grabCursor: true, // Change the cursor to a grab icon for better UX

    pagination: {
      el: ".caseStudy-swiper-pagination[data-pagination]", // Pagination element selector
      clickable: true, // Enable click functionality on pagination bullets
    },
  }
);
