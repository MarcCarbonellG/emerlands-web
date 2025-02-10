const openModal = document.getElementById('openModal');
let closeModal = document.querySelectorAll('#closeModal');
const modal = document.getElementById('contactModal');
const overlay = document.getElementById('overlay');
const modalMessage = document.getElementById('modalMessage');
const modalIcon = document.getElementById('modalIcon');

// Shows contact form modal
export function showModal(success) {
  modalIcon.classList.add(success ? 'fa-circle-check' : 'fa-circle-xmark');
  modalIcon.style.color = success ? '#87c549' : '#ea4d67';
  modalMessage.textContent = success
    ? 'Thank you! Your message has been successfully sent. We will get back to you as soon as possible.'
    : 'Oops! Something went wrong while sending your message. Please try again later or contact us directly at info@emerlands.com.';
  overlay.style.display = 'block';
  modal.showModal();
  modal.classList.replace('hidden', 'show');
}

closeModal.forEach((element) => {
  element.addEventListener('click', () => {
    modal.classList.replace('show', 'hidden');
    setTimeout(() => {
      modal.close();
      overlay.style.display = 'none';
    }, 200);
  });
});

modal.addEventListener('close', () => {
  modal.classList.replace('show', 'hidden');
  setTimeout(() => {
    modal.close();
    overlay.style.display = 'none';
  }, 200);
});
