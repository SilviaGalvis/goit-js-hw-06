

 const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
 ];

ingredients.forEach(element => {
   const test = document.querySelector('ul#ingredients');
  const item = document.createElement("li");
  item.textContent = element;
  document.body.appendChild(item);
  item.classList = "item";
});



 



