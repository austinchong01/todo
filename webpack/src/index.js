import "./styles.css";
import ProjectManager from "./project_manager.js";
import Project from "./project.js";
import Task from "./task.js";
import { openProjectDialog, closeProjectDialog, closeTaskDialog, closeEditDialog, renderDom } from "./dom.js";

loadProject();
export let Todo = new ProjectManager;
createProject("Default");
//saveProject();

const addProjBtn = document.querySelector("#addProjBtn");
addProjBtn.addEventListener("click", openProjectDialog);

const closeProjBtn = document.querySelector("#closeProjBtn");
closeProjBtn.addEventListener("click", closeProjectDialog);

export function createProject(name){
    const project = new Project(name);
    Todo.add(project);
    //saveProject();
    renderDom();
}

export function removeProject(event){
    const projectIndex = event.target.getAttribute("data-attribute-index");
    const project = Todo.projects[projectIndex];
    Todo.remove(project);
    //saveProject();
    renderDom();
}


const closeTaskBtn = document.querySelector("#closeTaskBtn");
closeTaskBtn.addEventListener("click", closeTaskDialog);

export function createTask(title, description, dueDate, priority, checkList, projIndex) {
    const task = new Task(title, description, dueDate, priority, checkList);
    Todo.projects[projIndex].add(task);
    saveProject()
    renderDom();
}

export function removeTask(event, project, task){
    project.remove(task);
    //saveProject();
    renderDom();
}

export function changeStatus(event, task){
    if(task.checkList){
        task.checkList = false;
    } else { //if task.checkList == "false"
        task.checkList = true;
    }
    //saveProject();
    renderDom();
}

const closeEditDialogBtn = document.querySelector("#closeEditDialog");
closeEditDialogBtn.addEventListener("click", closeEditDialog)

export function editTask(task, title, description, dueDate, priority, checkList){
    task.title = title;
    task.description = description;
    task.dueDate = dueDate;
    task.priority = priority;
    task.checkList = checkList;
    //saveProject();
    renderDom();
}

function saveProject(){
    console.log(JSON.stringify(Todo));
    localStorage.setItem("Todo", JSON.stringify(Todo));
}

function loadProject(){
    const storedTodoString = localStorage.getItem("Todo");
    const storedTodo = JSON.parse(storedTodoString);
    console.log(storedTodo.projects)
    return storedTodo.projects;
}