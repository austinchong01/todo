import { Todo, createProject } from "./console";
import Project from "./project.js";
import Task from "./task";

function addProjectDOM() {
    renderDom();

    // const addTaskBtn = document.querySelector(".addTaskBtn");
    // addTaskBtn.addEventListener("click", addTask());
}

export function openProjectDialog() {
    const dialog = document.querySelector("#projectDialog");
    dialog.showModal();

    const closeDialog = document.querySelector("#projCloseBtn");
    closeDialog.addEventListener("click", (event) => {
        event.preventDefault();
        const projectName = document.querySelector("#projectName");
        createProject(projectName.value);
        addProjectDOM();

        projectName.value = "";
        dialog.close();
    });
}

function addTaskDOM() {
    renderDom(); 
}

function openDialog() {
    const dialog = document.body.querySelector("dialog");
    const closeDialog = document.body.querySelector(".close");

    dialog.showModal();
    closeDialog.addEventListener("click", getTask(event));
}

function clearField(title, description, dueDate, priority, checkList){
    title.value = "";
    description.value = "";
    dueDate.value = "";
    priority.value = "";
    checkList.value = "";
}

function renderDom() {
    const newDOM = resetDOM();
    Todo.projects.forEach( (project, index) => {
        //add Project DOM
        const newProject = document.createElement("div");
        newProject.setAttribute("data-attribute-index", `${index}`);
        newProject.textContent = project.name;
        newDOM.appendChild(newProject);

        project.tasks.forEach( (task, index) => {
            //add Task DOM
            const newTask = document.createElement("div");
            newTask.setAttribute("data-attribute-index", `${index}`);
            newTask.textContent = task.title;
            newProject.appendChild(newTask);
        });

        //add Task Button DOM
        const addTaskBtn = document.createElement("button");
        addTaskBtn.textContent = "Add Task";
        addTaskBtn.setAttribute("class", "addTaskBtn");
        addTaskBtn.setAttribute("data-attribute-index", `${index}`);
        newProject.appendChild(addTaskBtn);
    });
}

function resetDOM() {
    const del = document.querySelector("#Todo");
    del.remove();
    const newDOM = document.createElement("div");
    newDOM.setAttribute("id", "Todo");
    document.body.appendChild(newDOM)
    return newDOM;
}