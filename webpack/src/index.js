import "./styles.css"
import Project from "./project.js"
import Task from "./task.js"

const projects = [];

const projectListener = (function(){
    const addProject = document.querySelector(".project");
    addProject.addEventListener("click", () => {
        const newProject = document.createElement("div");
        createProject();
        document.body.appendChild(newProject);
    })
})();

const dialogListener = (function(){
    const dialog = document.body.querySelector("dialog");
    const addTask = document.body.querySelector(".task");
    const closeTask = document.body.querySelector(".close")
    addTask.addEventListener("click", () => {
        dialog.showModal();
    })
    closeTask.addEventListener("click", (event) => {
        event.preventDefault();
        createTask();
        dialog.close();
    })
})();

function createProject() {
    const project = new Project();
    projects.push(project)
}

function createTask() {
    const title = document.querySelector("#title");
    const description = document.querySelector("#description");
    const dueDate = document.querySelector("#dueDate");
    const priority = document.querySelector("#priority");
    const checkList = document.querySelector("#checkList");

    const task = new Task(title.value, description.value, dueDate.value, priority.value, checkList.value);


    clearField(title, description, dueDate, priority, checkList);
}

function clearField(title, description, dueDate, priority, checkList){
    title.value = "";
    description.value = "";
    dueDate.value = "";
    priority.value = "";
    checkList.value = "";
}