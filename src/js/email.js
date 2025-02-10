import emailjs from '@emailjs/browser';
import { showModal } from './modal';

// Handles contact form submission
export function setUpSendEmail() {
  const form = document.getElementById('contact-form');
  const submitBtn = document.querySelector('#contact-form button');

  emailjs.init({
    publicKey: 'FWiJSXSevF9k84XeO',
  });

  form.addEventListener('submit', (event) => {
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    const params = {
      firstname,
      lastname,
      email,
      subject,
      message,
    };
    event.preventDefault();
    emailjs.send('service_vtwgpaf', 'template_oxffb1t', params).then(
      (response) => {
        showModal(true);
      },
      (error) => {
        showModal();
      }
    );
    form.reset();
  });

  submitBtn.addEventListener(
    'click',
    () => {
      form.classList.add('submitted');
    },
    { once: true }
  );
}
