// Handles elements fade in animation
export function setUpToggleOnScroll(className) {
  const elements = document.querySelectorAll(className);
  const toggleOnScroll = () => {
    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;
      const windowHeight = window.innerHeight;

      if (elementTop < windowHeight - 100 && elementBottom > 100) {
        element.classList.add('show');
      } else {
        element.classList.remove('show');
      }
    });
  };
  window.addEventListener('scroll', toggleOnScroll);
  window.addEventListener('load', toggleOnScroll);
}
