import { setUpToggleCardsOnScroll } from './card.js';
import { setupDropdownToggle, setupHeaderScroll } from './header.js';

document.addEventListener('DOMContentLoaded', () => {
  setupDropdownToggle();
  setupHeaderScroll();
  setUpToggleCardsOnScroll();
});
