// Handles cards fade in animation
export function setUpToggleCardsOnScroll() {
  const cards = document.querySelectorAll('.card');
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
}
