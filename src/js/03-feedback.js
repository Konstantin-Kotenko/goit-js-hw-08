import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LOCALSTORAGE = 'feedback-form-state';
const data = JSON.parse(localStorage.getItem(LOCALSTORAGE)) ?? {};

form.elements.email.value = data.email ?? '';
form.elements.message.value = data.message ?? '';

const onInputForm = e => {
  data[e.target.name] = e.target.value;
  localStorage.setItem(LOCALSTORAGE, JSON.stringify(data));
};

const onSubmitForm = e => {
  e.preventDefault();

  const formElements = e.currentTarget.elements;
  const email = formElements.email.value;
  const message = formElements.message.value;

  console.log({ email, message });

  localStorage.removeItem(LOCALSTORAGE);
  e.currentTarget.reset();
};

form.addEventListener('input', throttle(onInputForm, 500));
form.addEventListener('submit', onSubmitForm);

//safasfasfasfas
