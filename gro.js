const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let grocery = event.target;
    grocery = grocery.children[0].value;

    let groceries = window.localStorage.getItem('groceries');

    if (!groceries) {
        groceries =[];
    } else {
        groceries = JSON.parse(groceries);
    }
    groceries.push(grocery);
    window.localStorage.setItem('grocries', JSON.stringify(groceries));
});