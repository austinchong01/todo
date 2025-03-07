import { Todo, createProject } from "./console";
import Project from "./project.js";
import Task from "./task";

function addProjectDOM() {
    renderDom();

    // const addTaskBtn = document.querySelector(".addTaskBtn");
    // addTaskBtn.addEventListener("click", addTask());
}

const dialog = document.querySelector("#projectDialog");

export function openProjectDialog() {
    dialog.showModal();
    console.log("clicked")
}

export function closeProjectDialog() {
    event.preventDefault();
    console.log("reached")
    const projectName = document.querySelector("#projectName");
    createProject(projectName.value);
    addProjectDOM();

    projectName.value = "";
    dialog.close();
}


// function clearField(title, description, dueDate, priority, checkList){
//     title.value = "";
//     description.value = "";
//     dueDate.value = "";
//     priority.value = "";
//     checkList.value = "";
// }

function renderDom() {
    const newDOM = resetDOM();
    console.log(Todo.projects)
    Todo.projects.forEach( (project, index) => {
        //console.log(project)
        //add Project DOM
        const newProject = document.createElement("div");
        newProject.setAttribute("data-attribute-index", `${index}`);
        newProject.textContent = project.name;
        newDOM.appendChild(newProject);

        // project.tasks.forEach( (task, index) => {
        //     //add Task DOM
        //     const newTask = document.createElement("div");
        //     newTask.setAttribute("data-attribute-index", `${index}`);
        //     newTask.textContent = task.title;
        //     newProject.appendChild(newTask);
        // });

        // //add Task Button DOM
        // const addTaskBtn = document.createElement("button");
        // addTaskBtn.textContent = "Add Task";
        // addTaskBtn.setAttribute("class", "addTaskBtn");
        // addTaskBtn.setAttribute("data-attribute-index", `${index}`);
        // newProject.appendChild(addTaskBtn);
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