// This function gets the task from input
function getTodos() {
    // Create array of tasks
    let todos = new Array;
    
    // Pull task saved in browser memory
    // todosData = todos_str :(
    const todosData = localStorage.getItem("todo");

    // If input is not null, JSON.parse will convert to object
    if (todosData !== null) {
        todos = JSON.parse(todosData);
    }
    return todos;
}

// This function adds the new task to the todos array
function add() {
    // This takes the new task and creates a variable for it
    const task = document.getElementById("task").value;
    const todos = getTodos();
    
    // Add new task to todos array
    todos.push(task);
    
    // Convert task to json string and store in localStorage
    localStorage.setItem("todo", JSON.stringify(todos));
    document.getElementById("task").value = "";
    show();
    document.getElementById("task").focus();
    return false;
}

// This function removes an item from the task list
function deleteItem(item) {
    // Remove html <li> element
    item.parentNode.removeChild(item);

    // Get current todos
    const curTodos = document.getElementsByTagName("li");
    console.log(curTodos);

    const todoData = new Array;
    for (let i = 0; i < curTodos.length; i++) {
        todoData.push(curTodos[i].innerText.split(" x")[0]);
    }

    // Store updated tasks in localStorage
    localStorage.setItem("todo", JSON.stringify(todoData));
    document.getElementById("task").focus();

}

// This function keeps the tasks permanently displayed
function show() {
    // Set retrieved task as a variable
    const todos = getTodos();

    // This sets up each task as an unordered list
    // let html = "<ul>";
    let ul = document.createElement("ul");

    // Add task to list in the order it was added
    for (let i=0; i < todos.length; i++) {
        // Add task to list + button to remove it
        // html += `<li> ${todos[i]} <button class="remove" id="${i}">x</button></li>`;

        let li = document.createElement("li");
        ul.appendChild(li);
        li.innerHTML = `${todos[i]} <button class="remove" id="${i}">x</button>`;
        li.addEventListener("click", function() {
            deleteItem(this);
        });
    }

    // html += "</ul>";
    // document.getElementById("todos").innerHTML = html;
    const todosDiv = document.getElementById("todos");
    // Remove old UL
    if (todosDiv.childElementCount > 0) {
        todosDiv.removeChild(todosDiv.firstChild);
    }
    document.getElementById("todos").appendChild(ul);
}

// Display the new task when the 'Add Item' button is clicked
document.getElementById("add").addEventListener("click", add);
show();