const button = document.querySelector("button.change-color");
const body = document.body;

function getRandomHexColor() {
  return body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
    
}

button.addEventListener("click", getRandomHexColor);