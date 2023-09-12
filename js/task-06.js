const input = document.querySelector("#validation-input");


input.addEventListener("blur", (event) => {
    if (input.value.length != input.dataset.length) {
         event.target.classList.add("invalid");
        event.target.classList.remove("valid");
    } else {
         event.target.classList.remove("invalid");
       event.target.classList.add("valid");
       
}
});



