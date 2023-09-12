const listOne = document.querySelector('ul#categories').children.length;
console.log(`Number of categories:` +  listOne);


const taskOne = document.querySelectorAll('ul#categories li.item');
taskOne.forEach(element => {
    console.log(`Category:` + element.querySelector(`h2`).textContent)
    console.log(`Elements:` + element.querySelectorAll(`ul li`).length)
});







