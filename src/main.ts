import "./style.css";

// Todo type definition
interface Todo {
    id: string;
    text: string;
    completed: boolean;
}

// Selecting DOM elements with type casting
const todoForm = document.getElementById("todo-form") as HTMLFormElement;
const todoInput = document.getElementById("todo-input") as HTMLInputElement;
const todoList = document.getElementById("todo-list") as HTMLUListElement;
const todoStats = document.getElementById("todo-stats") as HTMLSpanElement;
const clearCompletedBtn = document.getElementById(
    "clear-completed",
) as HTMLButtonElement;

// loading data from localstorage
let todos: Todo[] = JSON.parse(localStorage.getItem("todos") || "[]");

// save data to localstorage
const saveTodos = (): void => {
    localStorage.setItem("todos", JSON.stringify(todos));
};

// function to clear stats and update clear button
const updateStats = (): void => {
    const totalTodos = todos.length;
    const completedTodos = todos.filter(
        (todo) => todo.completed === true,
    ).length;

    todoStats.textContent = `Total: ${totalTodos} || Completed: ${completedTodos} `;

    // showing or hiding clear button
    if (completedTodos > 0) {
        clearCompletedBtn.classList.remove("hidden");
    } else {
        clearCompletedBtn.classList.add("hidden");
    }
};

// Function to render todo list
const renderTodos = (): void => {
    todoList.innerHTML = ""; // clearing previous list

    if (todos.length === 0) {
        todoList.innerHTML = `<li>No tasks created yet. Want to create some tasks? </li>`;
        updateStats();
        return;
    }

    todos.forEach((todo) => {
        const li = document.createElement("li");
        li.className = `flex items-center justify-between p-3`;

        // dynamic html to show todo lists
        li.innerHTML = `
      <div class="flex items-center gap-3 flex-1 min-w-0 cursor-pointer" id="toggle-${todo.id}">
        <input 
          type="checkbox" 
          ${todo.completed ? "checked" : ""} 
          class="w-4 h-4 rounded text-cyan-500 bg-slate-800 border-slate-600 focus:ring-cyan-400 focus:ring-offset-slate-800"
        />
        <span class="truncate wrap-break-words w-full pr-2">${todo.text}</span>
      </div>
      <button 
        id="delete-${todo.id}" 
        class="text-slate-400 hover:text-red-400 p-1 rounded-lg hover:bg-slate-700 transition-colors cursor-pointer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
    `;
        // Toggle Completed event
        const toggleDiv = li.querySelector(`#toggle-${todo.id}`);
        toggleDiv?.addEventListener("click", () => toggleTodo(todo.id));

        // Delete Event
        const deleteBtn = li.querySelector(`#delete-${todo.id}`);
        deleteBtn?.addEventListener("click", (e) => {
            e.stopPropagation();
            deleteTodo(todo.id);
        });

        todoList.appendChild(li);
    });
    updateStats();
};

const addTodo = (e: Event): void => {
    e.preventDefault();
    const todoText = todoInput.value.trim();

    if (!todoText) return;

    const newTodo: Todo = {
        id: crypto.randomUUID(),
        text: todoText,
        completed: false,
    };

    todos.push(newTodo);
    saveTodos();
    renderTodos();

    todoInput.value = ""; // reset input field;
};

// task complete/ incomplete button
const toggleTodo = (id: string): void => {
    todos = todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    );
    saveTodos();
    renderTodos();
};

// task deletion function
const deleteTodo = (id: string): void => {
    todos = todos.filter((todo) => todo.id !== id);
    saveTodos();
    renderTodos();
};

// function to remove all completed task
clearCompletedBtn.addEventListener("click", (): void => {
    todos = todos.filter((todo) => !todo.completed);
    saveTodos();
    renderTodos();
});

todoForm.addEventListener("submit", addTodo);

document.addEventListener("DOMContentLoaded", renderTodos);
