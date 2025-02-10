import { setUpSendEmail } from './email.js';
import { setupDropdownToggle, setupHeaderScroll } from './header.js';
import { setUpToggleOnScroll } from './scroll.js';

document.addEventListener('DOMContentLoaded', () => {
  setUpSendEmail();
  setupDropdownToggle();
  setupHeaderScroll();
  setUpToggleOnScroll();
});
