
const input = document.querySelector("#font-size-control");
const result = document.querySelector("#text");


input.addEventListener("input", (e) => {
  let value = e.target.value;
  result.style.fontSize = `${value}px`;
});
  



