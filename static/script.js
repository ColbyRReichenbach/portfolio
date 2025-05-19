// script.js
console.log("JavaScript is running!");

// Function to open a modal by setting its display to block
function openModal(modalId) {
  document.getElementById(modalId).style.display = "block";
}

// Function to close a modal by setting its display to none
function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

// Close any modal if the user clicks outside the modal content
window.onclick = function(event) {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = "none";
  }
}
// Slider functionality for projects
var currentIndex = 0;
var totalProjects = 6; // Total number of projects
var visibleCount = 2;  // Number of projects visible at once
var maxIndex = totalProjects - visibleCount; // Maximum index to slide to

function updateSlider() {
  var slider = document.querySelector('.slider-container');
  // Since each card is 50% of container width, translate by currentIndex * 50%
  slider.style.transform = 'translateX(-' + (currentIndex * 50) + '%)';

  // Update arrow visibility
  document.getElementById('leftArrow').style.display = (currentIndex === 0) ? 'none' : 'block';
  document.getElementById('rightArrow').style.display = (currentIndex === maxIndex) ? 'none' : 'block';
}

function nextSlide() {
  if (currentIndex < maxIndex) {
    currentIndex++;
    updateSlider();
  }
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
}

// Initialize slider on page load
document.addEventListener('DOMContentLoaded', function() {
  updateSlider();
});
