import "./styles.css";
import ProjectManager from "./project_manager.js";
import Project from "./project.js";
import Task from "./task.js";
import { openProjectDialog, closeProjectDialog, closeTaskDialog, closeEditDialog, renderDom } from "./dom.js";

export const Todo = loadProject();
saveProject();
renderDom();

const clearLocalBtn = document.querySelector("#clearLocal");
clearLocalBtn.addEventListener("click", () => {
    localStorage.clear();
});


const addProjBtn = document.querySelector("#addProjBtn");
addProjBtn.addEventListener("click", openProjectDialog);

const closeProjBtn = document.querySelector("#closeProjBtn");
closeProjBtn.addEventListener("click", closeProjectDialog);

export function createProject(name){
    const project = new Project(name);
    Todo.add(project);
    saveProject();
    renderDom();
}

export function removeProject(event){
    const projectIndex = event.target.getAttribute("data-attribute-index");
    const project = Todo.projects[projectIndex];
    Todo.remove(project);
    saveProject();
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
    saveProject();
    renderDom();
}

export function changeStatus(event, task){
    if(task.checkList){
        task.checkList = false;
    } else { //if task.checkList == "false"
        task.checkList = true;
    }
    saveProject();
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
    saveProject();
    renderDom();
}

function saveProject(){
    localStorage.setItem("Todo", JSON.stringify(Todo));
}

function loadProject(){
    const storedProjManager = JSON.parse(localStorage.getItem("Todo"));

    if (storedProjManager == null){
        const firstTodo = new ProjectManager;

        const project = new Project("Default");
        firstTodo.add(project);

        return firstTodo;
    }

    const newTodo = new ProjectManager;

    storedProjManager.projects.forEach(project => {
        const newProject = new Project(project.name);
        newTodo.add(newProject);

        project.tasks.forEach(task => {
            const newTask = new Task(task.title, task.description, task.dueDate, task.priority, task.checkList);
            newProject.add(newTask);
        });

    });

    return newTodo;
}