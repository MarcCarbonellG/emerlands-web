import { setupDropdownToggle, setupHeaderScroll } from './header.js';
import { setUpToggleOnScroll } from './scroll.js';

document.addEventListener('DOMContentLoaded', () => {
  setupDropdownToggle();
  setupHeaderScroll();
  setUpToggleOnScroll('.card');
  setUpToggleOnScroll('.stat');
  setUpToggleOnScroll('.word');
});
