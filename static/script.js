// script.js
console.log("JavaScript is running!");

// --- NEW MODAL LOGIC ---
// This section is upgraded to handle dynamic content loading.

/**
 * Opens a modal and fetches its content if it's dynamic.
 * @param {string} modalId The ID of the modal to open.
 */
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) {
        console.error(`Modal with ID "${modalId}" not found.`);
        return;
    }
    
    modal.style.display = 'block';

    const markdownSource = modal.getAttribute('data-markdown-source');
    const container = modal.querySelector('.project-details-container');

    // If the modal has a markdown source and we haven't loaded it yet.
    // The check for "Loading" prevents re-fetching if you close and re-open the modal.
    if (markdownSource && container && container.innerHTML.includes('Loading')) {
        fetch(markdownSource)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }
                return response.text();
            })
            .then(text => {
                // Use the marked.js library to parse the Markdown text to HTML
                container.innerHTML = marked.parse(text);
            })
            .catch(error => {
                container.innerHTML = '<p><strong>Error:</strong> Could not load project details. Please try again later.</p>';
                console.error('Error fetching markdown:', error);
            });
    }
}

/**
 * Closes a modal.
 * @param {string} modalId The ID of the modal to close.
 */
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none";
    }
}

// This allows closing the modal by clicking on the background. This is kept from your original file.
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        if (event.target.id) {
            closeModal(event.target.id);
        }
    }
}


// --- SLIDER FUNCTIONALITY (UNCHANGED) ---
// Your existing slider logic is preserved below.

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
