const input = document.getElementById('documento');

const check = () => {
  if (!input.validity.valid) input.value = 1;
  if (+input.value < 0) input.value = 0;
};

input.addEventListener('input', check);
input.addEventListener('blur', check);