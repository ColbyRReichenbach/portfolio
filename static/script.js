console.log("JavaScript is running!");

// --- MODAL LOGIC ---
// (openModal, closeModal, and window.onclick for modals remain largely the same)

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
    document.body.style.overflow = 'hidden'; // Prevent background scroll when modal is open

    const markdownSource = modal.getAttribute('data-markdown-source');
    const container = modal.querySelector('.project-details-container');

    if (markdownSource && container && (!container.dataset.loaded || container.innerHTML.includes('Loading'))) {
        fetch(markdownSource)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }
                return response.text();
            })
            .then(text => {
                if (typeof marked !== 'undefined') {
                    container.innerHTML = marked.parse(text);
                    container.dataset.loaded = 'true'; // Mark as loaded
                } else {
                    console.error('marked.js library is not loaded.');
                    container.innerHTML = '<p>Error: Markdown parser not available.</p>';
                }
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
        document.body.style.overflow = 'auto'; // Restore background scroll
    }
}

// Close modal if background is clicked
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        if (event.target.id) {
            closeModal(event.target.id);
        }
    }
}

// --- REMOVED SLIDER FUNCTIONALITY ---

// --- NEW GIF HOVER FUNCTIONALITY ---
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        const img = card.querySelector('img');
        // Ensure these attributes exist to prevent errors if a card is missing them
        const staticSrc = img ? img.getAttribute('data-static-src') : null;
        const gifSrc = img ? img.getAttribute('data-gif-src') : null;

        if (img && staticSrc && gifSrc) { // Only add listeners if all parts are present
            card.addEventListener('mouseenter', () => {
                img.src = gifSrc;
            });

            card.addEventListener('mouseleave', () => {
                img.src = staticSrc;
            });
        }
    });
});
