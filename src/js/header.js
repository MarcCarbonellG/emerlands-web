export function setupDropdownToggle() {
  const links = document.querySelectorAll('.dropdown a');
  const hamburger = document.querySelector('.hamburger');
  const checkbox = document.querySelector('.hamburger input');
  const sidebar = document.querySelector('.dropdown');

  // Changes hamburger class list when opening or closing dropdown menu for styling purposes
  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      hamburger.classList.add('open');
    } else {
      hamburger.classList.remove('open');
      hamburger.classList.add('closing');
      setTimeout(() => {
        hamburger.classList.remove('closing');
      }, 500);
    }
  });

  // Closes dropdown menu when clicking on a link
  links.forEach((link) => {
    link.addEventListener('click', () => {
      checkbox.checked = false;
      hamburger.classList.remove('open');
      hamburger.classList.add('closing');
      setTimeout(() => {
        hamburger.classList.remove('closing');
      }, 500);
    });
  });
}

// Changes header class list when scrolling for styling purposes
export function setupHeaderScroll() {
  window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}
