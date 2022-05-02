import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LOCALSTORAGE = 'feedback-form-state';
let data = {};

const onInputForm = e => {
  data[e.target.name] = e.target.value;
  const localStorageKey = JSON.parse(localStorage.getItem(LOCALSTORAGE));
  localStorage.setItem(LOCALSTORAGE, JSON.stringify({ ...localStorageKey, ...data }));
};

const onSubmitForm = e => {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE)));
  e.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE);
  data = {};
};

const savedData = () => {
  const savedDataText = JSON.parse(localStorage.getItem(LOCALSTORAGE));
  if (savedDataText?.email) {
    form.email.value = savedDataText.email;
  }
  if (savedDataText?.message) {
    form.message.value = savedDataText.message;
  }
};

savedData();

form.addEventListener('input', throttle(onInputForm, 500));
form.addEventListener('submit', onSubmitForm);
