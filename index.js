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

const roles = ["AI Developer", "Full Stack Developer", "Graphic Designer"];

let i = 0, j = 0;
let isDeleting = false;

function typeEffect() {
  let current = roles[i];

  if (isDeleting) {
    j--;
  } else {
    j++;
  }

  document.getElementById("typing").innerText = current.substring(0, j);

  if (!isDeleting && j === current.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1200);
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % roles.length;
  }

  setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();