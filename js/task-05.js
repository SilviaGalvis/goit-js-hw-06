
const input = document.querySelector("#name-input");
const result = document.querySelector("#name-output");


input.oninput = function () {
     
    result.innerHTML = input.value === '' ? 'Anonymous' : input.value;
  };