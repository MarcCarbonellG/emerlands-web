import { setupDropdownToggle, setupHeaderScroll } from './header.js';

document.addEventListener('DOMContentLoaded', () => {
  setupDropdownToggle();
  setupHeaderScroll();
});

const cards = document.querySelectorAll('.card');

// Handles cards fade in animation
const toggleCardsOnScroll = () => {
  cards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;
    const cardBottom = card.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;

    if (cardTop < windowHeight - 100 && cardBottom > 100) {
      card.classList.add('show');
    } else {
      card.classList.remove('show');
    }
  });
};

window.addEventListener('scroll', toggleCardsOnScroll);
window.addEventListener('load', toggleCardsOnScroll);
