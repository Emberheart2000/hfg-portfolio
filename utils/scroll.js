/**
 * Smooth scroll to element with offset
 * @param {string} elementId - Target element ID without the # symbol
 * @param {number} offset - Offset from the top in pixels
 */
export const scrollToElement = (elementId, offset = 80) => {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };
  
  /**
   * Set up smooth scrolling for all anchor links on the page
   * @param {number} offset - Offset from the top in pixels
   */
  export const setupSmoothScrolling = (offset = 80) => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetId = anchor.getAttribute('href')?.substring(1);
        if (targetId) {
          scrollToElement(targetId, offset);
        }
      });
    });
  };
  
  /**
   * Check if an element is in viewport
   * @param {HTMLElement} element - Element to check
   * @param {number} offset - Offset from the top
   * @returns {boolean} - Whether element is in viewport
   */
  export const isElementInViewport = (element, offset = 0) => {
    if (!element) return false;
    
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) - offset &&
      rect.bottom >= offset
    );
  };
  
  /**
   * Get the current section in viewport
   * @param {string[]} sectionIds - Array of section IDs to check
   * @param {number} offset - Offset from the top
   * @returns {string} - ID of the current section
   */
  export const getCurrentSection = (sectionIds, offset = 100) => {
    for (const id of sectionIds) {
      const element = document.getElementById(id);
      if (element && isElementInViewport(element, offset)) {
        return id;
      }
    }
    return '';
  };