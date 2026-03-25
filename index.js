// Example: Scroll container with arrow buttons
const container = document.querySelector('.video-container');

// Scroll right 300px
function scrollRight() {
  container.scrollBy({ left: 300, behavior: 'smooth' });
}

// Scroll left 300px
function scrollLeft() {
  container.scrollBy({ left: -300, behavior: 'smooth' });
}

