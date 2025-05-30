console.log("JavaScript is running!");

// --- MODAL LOGIC ---
// (openModal, closeModal, and window.onclick for modals remain largely the same)

/**
 * Opens a modal and fetches its content if it's dynamic.
 * @param {string} modalId The ID of the modal to open.
 */
function openModal(modalId) {
    console.log("openModal called with ID:", modalId);
    const modal = document.getElementById(modalId);
    console.log("Modal element found:", modal);

    if (!modal) {
        console.error(`Modal with ID "${modalId}" not found.`);
        return;
    }
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';

    const markdownSource = modal.getAttribute('data-markdown-source');
    const container = modal.querySelector('.project-details-container');
    console.log("Markdown container element:", container); // DEBUG

    if (markdownSource && container && (!container.dataset.loaded || container.innerHTML.includes('Loading'))) {
        console.log("Fetching markdown from:", markdownSource); // DEBUG
        fetch(markdownSource)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }
                return response.text();
            })
            .then(text => {
                console.log("Fetched raw markdown text:", text); // DEBUG: See the raw text
                console.log("Type of 'marked' object:", typeof marked); // DEBUG: Should be 'function' or 'object'
                
                if (typeof marked !== 'undefined' && typeof marked.parse === 'function') { // More robust check
                    const htmlContent = marked.parse(text);
                    console.log("Parsed HTML content by marked.js:", htmlContent); // DEBUG: See what marked.js produced
                    container.innerHTML = htmlContent;
                    container.dataset.loaded = 'true'; 
                } else {
                    console.error('marked.js library is not loaded or marked.parse is not a function.');
                    container.innerHTML = '<p>Error: Markdown parser not available or not working.</p>';
                    // As a fallback, display raw text but escape it to prevent HTML injection if 'text' contains HTML
                    // This will show the raw markdown safely if marked.js fails
                    const pre = document.createElement('pre');
                    pre.textContent = text;
                    container.innerHTML = ''; // Clear "Loading..."
                    container.appendChild(pre);
                }
            })
            .catch(error => {
                container.innerHTML = '<p><strong>Error:</strong> Could not load project details. Please try again later.</p>';
                console.error('Error fetching or parsing markdown:', error);
            });
    } else if (markdownSource && !container) {
        console.error("'.project-details-container' not found inside modal:", modalId); // DEBUG
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
