let input = document.getElementById("add");
let btn = document.getElementById("btn");
let tasks = document.getElementById("tasks");


// This function creates a task by adding a checkbox, a delete button, and so on.
function createNewTask(text){
    let li = document.createElement("li");
    let checkBox = document.createElement("input");
    let deleteBtn = document.createElement("btn");
    let label = document.createElement("label");
    label.innerText = text;
    checkBox.type = "checkbox";
    deleteBtn.className = "fa fa-trash-o";
    deleteBtn.id = "delete";
    li.appendChild(checkBox);
    li.appendChild(label);
    li.appendChild(deleteBtn);

    return li;
}

// This function links the task to each other.
function linkTasks(task, t){
    let checkBox = task.querySelector("input[type=checkbox]");
    let deleteBtn = task.querySelector("btn#delete");
    deleteBtn.onclick = deleteTask;
    checkBox.onchange = t;
}

// We determine whether the task was completed.
let taskCompleted = function(){
    let li = this.parentNode;
    li.className = "complete";
    linkTasks(li, taskIncompleted);
}

// A function that adds a task.
function addNewTask(){
    let li = createNewTask(input.value);
    tasks.appendChild(li);
    linkTasks(li, taskCompleted);
    input.value = "";
}

// The function that deletes the task.
let deleteTask = function(){
    let li = this.parentNode;
    let ul = li.parentNode;
    ul.removeChild(li);
}

// We determine whether the task was incompleted.
let taskIncompleted = function(){
    let li = this.parentNode;
    li.className = "not-complete";
    linkTasks(li, taskCompleted);
}

btn.onclick = addNewTask();
btn.addEventListener("click", addNewTask);

