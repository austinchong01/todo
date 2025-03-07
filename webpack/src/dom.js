import { Todo, createProject, createTask } from "./console";
import Project from "./project.js";
import Task from "./task";

const projDialog = document.querySelector("#projectDialog");
const taskDialog = document.querySelector("#taskDialog");

export function openProjectDialog() {
    projDialog.showModal();
    //console.log("clicked");
}

export function closeProjectDialog() {
    const projectName = document.querySelector("#projectName");
    createProject(projectName.value);

    projectName.value = "";
    projDialog.close();
}

export function openTaskDialog() {
    taskDialog.showModal();
    console.log(event.target);
}

export function closeTaskDialog(event, project) {
    // const title = document.querySelector("#title");
    // const description = document.querySelector("#description");
    // const dueDate = document.querySelector("#dueDate");
    // const priority = document.querySelector("#priority");
    // const checkList = document.querySelector("#checkList");
    // const index = Todo.projects.indexOf(project);
    // createTask(title, description, dueDate, priority, checkList, index)

    // clearField(title, description, dueDate, priority, checkList);
    taskDialog.close();
}

export function renderDom() {
    const newDOM = resetDOM();
    console.log(Todo.projects)
    for(let i = 0; i < Todo.projects.length; i++){
        const currProject = Todo.projects[i];
        //add Project DOM
        const newProject = document.createElement("div");
        newProject.setAttribute("data-attribute-index", `${i}`);
        newProject.textContent = currProject.name;
        newDOM.appendChild(newProject);

        for(let j = 0; j < currProject.length; j++){
            //add Task DOM
            const newTask = document.createElement("div");
            newTask.setAttribute("data-attribute-index", `${j}`);
            newTask.textContent = currProject.tasks[j].title;
            newProject.appendChild(newTask);
        }

        //add Task Button DOM
        const addTaskBtn = document.createElement("button");
        addTaskBtn.textContent = "Add Task";
        addTaskBtn.setAttribute("class", "addTaskBtn");
        addTaskBtn.setAttribute("data-attribute-index", `${i}`);
        addTaskBtn.addEventListener("click", openTaskDialog);
        newProject.appendChild(addTaskBtn);
    }
}

function resetDOM() {
    const del = document.querySelector("#Todo");
    del.remove();
    const newDOM = document.createElement("div");
    newDOM.setAttribute("id", "Todo");
    document.body.appendChild(newDOM)
    return newDOM;
}

function clearField(title, description, dueDate, priority, checkList){
    title.value = "";
    description.value = "";
    dueDate.value = "";
    priority.value = "";
    checkList.value = "";
}