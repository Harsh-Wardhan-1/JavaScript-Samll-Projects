const form = document.getElementById("form");
const input = document.getElementById("input");
const todos = document.getElementById("todos");


console.log(input.value)
form.addEventListener("sumbit", (e) => {
    console.log("jj")
    e.preventDefault();
    const todoText = input.value;
    if (todoText) {
        const todoEl = document.createElement('li');
        todoEl.innerText = todoText;
        todos.appendChild(todoEl);
    }
});