const toDoInput = document.querySelector("#todoInput");
const addToDoBtn = document.querySelector("#addTodoBtn");
const toDoList = document.querySelector("#todoList");
const APIurl = "https://crudcrud.com/api/12d942fdcc8c488f8a232b98617bcfac";

window.onload = fetchTodos;

addToDoBtn.addEventListener("click", async () => {
  console.log(toDoInput.value);
  const toDoText = toDoInput.value.trim();
  if (toDoText) {
    const todo = {
      text: toDoText,
      completed: false,
    };
    try {
      await fetch(APIurl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
      });
      toDoInput.value = "";
      fetchTodos();
    } catch (error) {
      console.error("Failed adding todos: " + error);
    }
  }
});

async function fetchTodos() {
  console.log("Fetching todos");
  try {
    const response = await fetch(APIurl);
    const todos = await response.json();
    toDoList.innerHTML = "";
    todos.forEach((todo) => {
      displayTodo(todo);
    });
  } catch (error) {
    console.error("Failed fetching todos: " + error);
  }
}
function displayTodo(todo) {
  const li = document.createElement("li");
  li.className = "todo-item";
  li.innerHTML = `
  ${todo.text}
  <div>
    <button class="edit-btn" onclick="editTodo('${todo.id}', '${todo.text}')">Endre</button>
    <button class="delete-btn" onclick="deleteTodo('${todo.id}')">Slett</button>
  </div>
  `;
  todoList.appendChild(li);
}
async function deleteTodo(todoId) {
  try {
    await fetch(`${APIurl} / ${todoId}`, {
      method: "DELETE",
    });
    fetchTodos();
  } catch (error) {
    console.error("Failed deleting todo: " + error);
  }
}
async function editTodo(todoId, todoText) {
  const newTodoText = prompt("Skriv inn ny tekst: ", todoText);
  if (newTodoText) {
    const updateTodo = { text: newTodoText };
    try {
      await fetch(`${APIurl} / ${todoId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateTodo),
      });
      fetchTodos();
    } catch (error) {
      console.error("Failed editing todo: " + error);
    }
  }
}
