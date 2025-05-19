// script.js
console.log("JavaScript is running!");

// Modal Functions (Keep existing openModal, closeModal, window.onclick)
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = "block";
  } else {
    console.error("Modal with ID: " + modalId + " not found.");
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = "none";
  } else {
    console.error("Modal with ID: " + modalId + " not found.");
  }
}

window.onclick = function(event) {
  if (event.target.classList.contains('modal')) {
    if (event.target.id) {
        closeModal(event.target.id);
    }
  }
}

// --- NEW SLIDER FUNCTIONALITY for 2x2 Grid Slides ---
document.addEventListener('DOMContentLoaded', function() {
  const sliderContainer = document.querySelector('.slider-container');
  const slideGroups = document.querySelectorAll('.slide-group');
  const leftArrow = document.getElementById('leftArrow');
  const rightArrow = document.getElementById('rightArrow');

  if (!sliderContainer || slideGroups.length === 0 || !leftArrow || !rightArrow) {
    console.warn("Slider elements not found. Slider functionality disabled.");
    if(leftArrow) leftArrow.style.display = 'none';
    if(rightArrow) rightArrow.style.display = 'none';
    return; // Exit if essential elements are missing
  }

  let currentIndex = 0; // Index of the current .slide-group
  const totalSlides = slideGroups.length;

  // Set the width of the slider-container to hold all slide-groups horizontally
  // sliderContainer.style.width = `${totalSlides * 100}%`; // Not strictly necessary if .slide-group is flex: 0 0 100%

  function updateSlider() {
    sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Update arrow visibility
    if (currentIndex === 0) {
      leftArrow.classList.add('hidden');
    } else {
      leftArrow.classList.remove('hidden');
    }

    if (currentIndex === totalSlides - 1) {
      rightArrow.classList.add('hidden');
    } else {
      rightArrow.classList.remove('hidden');
    }
  }

  window.nextSlide = function() { // Make functions globally accessible from HTML onclick
    if (currentIndex < totalSlides - 1) {
      currentIndex++;
      updateSlider();
    }
  }

  window.prevSlide = function() { // Make functions globally accessible from HTML onclick
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  }

  // Initial setup
  if (totalSlides <= 1) { // Hide arrows if only one slide or no slides
    leftArrow.style.display = 'none';
    rightArrow.style.display = 'none';
  } else {
    updateSlider(); // Set initial state of arrows and slide position
  }
});
