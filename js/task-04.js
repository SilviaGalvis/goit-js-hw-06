let counterValue = 0;
const valueEl = document.querySelector("#value");
const incrementBtnEl = document.querySelector('#counter button[data-action="increment"]');

incrementBtnEl.addEventListener("click", () => {
  counterValue++;
  valueEl.textContent = counterValue;
});

const decrementBtnEl = document.querySelector('#counter button[data-action="decrement"]');
decrementBtnEl.addEventListener("click", () => {
  counterValue--;
  valueEl.textContent = counterValue;
});

