import "./styles.css";
import ProjectManager from "./project_manager.js";
import Project from "./project.js";
import Task from "./task";
import { openProjectDialog, closeProjectDialog, closeTaskDialog, renderDom } from "./dom.js";


export const Todo = new ProjectManager;

createProject("Default");

const addProjBtn = document.querySelector("#addProjBtn");
addProjBtn.addEventListener("click", openProjectDialog);

const closeProjBtn = document.querySelector("#closeProjBtn");
closeProjBtn.addEventListener("click", closeProjectDialog);

export function createProject(name){
    const project = new Project(name);
    Todo.add(project);
    renderDom();
}

export function createTask(title, description, dueDate, priority, checkList, projIndex) {
    const task = new Task(title, description, dueDate, priority, checkList);
    Todo.projects[projIndex].add(task);
    renderDom();
}

const closeTaskBtn = document.querySelector("#closeTaskBtn");
closeTaskBtn.addEventListener("click", closeTaskDialog);
