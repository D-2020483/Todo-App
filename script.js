const dinithi = {
    name: "Dinithi",
    age: 25,
};

const todoCreateButton = document.querySelector(".todo__create__button");
const todoInput = document.querySelector(".todo__input");
const todoContainer = document.querySelector(".todo__container");

const todoValues = [];
let todoElements = [];

// Event listener to add new todo
todoCreateButton.addEventListener("click", () => {
    const value = todoInput.value;
    if (value === "") {
        return;
    }

    todoValues.push(value);
    console.log(todoValues);
    todoInput.value = "";
    renderTodos();
});

// Function to delete a todo item
function deleteTodoItem(index) {
    todoValues.splice(index, 1);
    renderTodos();
}

//function to toggle the completed class(strikethrough)
function toggleCompleted(index){
    const todoItem = document.querySelector(`.todo__item[data-index="${index}"] .todo__text`);
    todoItem.classList.toggle("completed");
    renderTodos();
}

// Function to render the todos and attach delete functionality
function renderTodos() {
    // Create HTML for each todo item
    todoElements = todoValues.map((val, index) => {
        return `<div class="todo__item" data-index="${index}">
            <div class="todo__item_left">
                <input type="checkbox" id="completed" name="completed" />
                <span>${val}</span>
            </div>
            <div class="todo__item__right">
                <svg
                    class="todo__delete__button"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="red"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucid-trash"
                >
                    <path d="M3 6h18" />
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                    <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                </svg>
            </div>
        </div>`;
    });

    // Insert todo items into the container
    todoContainer.innerHTML = todoElements.join("");

    // Attach event listeners to all delete buttons
    const deleteButtons = document.querySelectorAll(".todo__delete__button");
    deleteButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            deleteTodoItem(index);
        });
    });
    
    //Attach event Listeners to all chexhboxes to apply strickethrough
    const chexhboxes = document.querySelectorAll("todo__checkbox");
    chexhboxes.forEach((checkbox, index) => {
        checkbox.addEventListener("change", () => {
            toggleCompleted(index);
        });
    });
};