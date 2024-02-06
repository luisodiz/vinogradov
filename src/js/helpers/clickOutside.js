/**
 * 
 * @param {HTMLElement} el
 * @param {MouseEvent} event
 */
export const clickOutside = (el, event) => !el.contains(event.target)
