// Handles elements fade in animation
export function setUpToggleOnScroll() {
  const elements = document.querySelectorAll('.fadeIn');
  const toggleOnScroll = () => {
    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;
      const windowHeight = window.innerHeight;

      if (elementTop < windowHeight - 100 && elementBottom > 100) {
        element.classList.add('show');
      } else if (elementTop > windowHeight) {
        element.classList.remove('show');
      }
    });
  };
  window.addEventListener('scroll', toggleOnScroll);
  window.addEventListener('load', toggleOnScroll);
}
