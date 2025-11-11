// --- MODAL LOGIC ---

/**
 * Opens a modal, sends a GA event, and fetches its dynamic content.
 * @param {string} modalId The ID of the modal to open.
 */
function openModal(modalId) {
    const modal = document.getElementById(modalId);

    if (!modal) {
        console.error(`Modal with ID "${modalId}" not found.`);
        return;
    }
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';

    // --- GA4 Custom Event for Modal View ---
    const projectTitleElement = modal.querySelector('.modal-right h3');
    const projectTitle = projectTitleElement ? projectTitleElement.textContent.trim() : modalId;
    
    if (typeof gtag === 'function') { // Check if Google Analytics function is available
        gtag('event', 'view_project_modal', {
          'event_category': 'Portfolio Interaction',
          'event_label': projectTitle, // e.g., "Ad Performance Analysis and AB - Testing"
          'project_id': modalId      // e.g., "modal_ad"
        });
    }
    // --- End GA4 Custom Event ---

    const markdownSource = modal.getAttribute('data-markdown-source');
    const container = modal.querySelector('.project-details-container');

    const shouldFetch = markdownSource && container && container.dataset.prefilled !== 'true';

    if (shouldFetch && (!container.dataset.loaded || container.innerHTML.includes('Loading'))) {
        fetch(markdownSource)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }
                return response.text();
            })
            .then(text => {
                if (typeof marked !== 'undefined' && typeof marked.parse === 'function') { // Check if marked.js is loaded
                    const htmlContent = marked.parse(text);
                    container.innerHTML = htmlContent;
                    container.dataset.loaded = 'true'; 
                } else {
                    console.error('marked.js library is not loaded or marked.parse is not a function.');
                    container.innerHTML = '<p>Error: Markdown parser not available or not working.</p>';
                }
            })
            .catch(error => {
                container.innerHTML = `<p><strong>Error:</strong> Could not load project details. Please try again later.</p>`;
                console.error('Error fetching or parsing markdown:', error);
            });
    } else if (markdownSource && !container) {
        console.error("'.project-details-container' not found inside modal:", modalId);
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

// --- ON PAGE LOAD ---
document.addEventListener('DOMContentLoaded', function() {

    // --- HEADER NAVIGATION TOGGLE ---
    const menuToggle = document.querySelector('.menu-toggle');
    const siteNav = document.querySelector('.site-nav');
    const navLinks = document.querySelectorAll('.site-nav a');

    if (menuToggle && siteNav) {
        menuToggle.addEventListener('click', () => {
            const isOpen = siteNav.classList.toggle('is-open');
            menuToggle.classList.toggle('is-active', isOpen);
            menuToggle.setAttribute('aria-expanded', String(isOpen));
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (siteNav.classList.contains('is-open')) {
                    siteNav.classList.remove('is-open');
                    menuToggle.classList.remove('is-active');
                    menuToggle.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }

    // --- FOOTER YEAR ---
    const footerYear = document.getElementById('footer-year');
    if (footerYear) {
        footerYear.textContent = new Date().getFullYear();
    }

    // --- GIF HOVER FUNCTIONALITY ---
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        const img = card.querySelector('img');
        const staticSrc = img ? img.getAttribute('data-static-src') : null;
        const gifSrc = img ? img.getAttribute('data-gif-src') : null;
        const modalTarget = card.getAttribute('onclick');

        if (img && staticSrc && gifSrc && staticSrc !== gifSrc) { // Only add if sources are defined and different
            card.addEventListener('mouseenter', () => {
                img.src = gifSrc;
            });
            card.addEventListener('mouseleave', () => {
                img.src = staticSrc;
            });
        }

        card.addEventListener('keydown', event => {
            const key = event.key;
            const isActivation = key === 'Enter' || key === ' ';
            if (isActivation && typeof card.onclick === 'function') {
                event.preventDefault();
                card.click();
            } else if (isActivation && modalTarget && typeof window !== 'undefined') {
                event.preventDefault();
                // Fallback for inline onclick handler
                card.click();
            }
        });
    });

    // --- GA4 Custom Event Tracking for Outbound Links in Modals ---
    const outboundLinks = document.querySelectorAll('.modal .btn-project');
    outboundLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Find the parent modal and its title
            const modal = event.target.closest('.modal');
            const projectTitleElement = modal ? modal.querySelector('.modal-right h3') : null;
            const projectTitle = projectTitleElement ? projectTitleElement.textContent.trim() : 'Unknown Project';
            
            const linkUrl = event.target.href;
            let linkType = 'Unknown Link'; // Default link type
            
            // Determine a more descriptive link type from the button's text content
            const buttonText = event.target.textContent.toLowerCase();
            if (buttonText.includes('github')) {
                linkType = 'GitHub';
            } else if (buttonText.includes('live app')) {
                linkType = 'Live App';
            } else if (buttonText.includes('report')) {
                linkType = 'Report';
            } else if (buttonText.includes('tableau')) {
                linkType = 'Tableau';
            }

            if (typeof gtag === 'function') { // Check if Google Analytics function is available
                gtag('event', 'click_outbound_link', {
                    'event_category': 'Portfolio Outbound',
                    'event_label': `${projectTitle} - ${linkType}`,
                    'link_url': linkUrl,
                    'project_title': projectTitle
                });
            }
        });
    });
});
