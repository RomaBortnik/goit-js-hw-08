import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const feedbackFormInput = document.querySelector('.feedback-form input');
const feedbackFormTextarea = document.querySelector('.feedback-form textarea');

const LOCALSTORAGE_KEY = 'feedback-form-state';
const formData = {};

feedbackForm.addEventListener('submit', onFormSubmit);
feedbackForm.addEventListener('input', throttle(onInputChange, 500));

updateForm();

function onFormSubmit(event) {
  event.preventDefault();
  if (feedbackFormTextarea.value === '' || feedbackFormInput.value === '') {
    return;
  }

  console.log(updateForm());
  event.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

function onInputChange(event) {
  formData.email = feedbackFormInput.value.trim();
  formData.message = feedbackFormTextarea.value.trim();
  return localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
  // formData[event.target.name] = event.target.value;
  // return localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function updateForm() {
  const parsedData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  if (parsedData) {
    (feedbackFormInput.value = parsedData.email || ''),
      (feedbackFormTextarea.value = parsedData.message || '');
  }
  return parsedData;
}
