import "./styles.css"
import Project from "./project.js"
import Task from "./task.js"

//array of all projects
const projects = [];

const projectListener = (function(){
    const addProjBtn = document.querySelector(".project");
    addProjBtn.addEventListener("click", () => {
        const newProject = document.createElement("div");
        const index = getIndex(projects);
        newProject.setAttribute("data-attribute-index", `${index}`);
        createProject();
        document.body.appendChild(newProject);
    })
})();

const taskListener = (function(){
    const dialog = document.body.querySelector("dialog");
    const addTaskBtn = document.body.querySelector(".task");
    const closeTaskBtn = document.body.querySelector(".close")
    addTaskBtn.addEventListener("click", () => {
        dialog.showModal();
    })
    closeTaskBtn.addEventListener("click", (event) => {
        event.preventDefault();
        const currProj = getCurrProject();
        createTask(currProj);
        dialog.close();
    })
})();

function getCurrProject() {
    //add event listener for where button was clicked
    //get index for project
    //return correct project object from projects array
}

function createProject() {
    const project = new Project();
    projects.push(project);

    console.log(projects)
}

function createTask(project) {
    const title = document.querySelector("#title");
    const description = document.querySelector("#description");
    const dueDate = document.querySelector("#dueDate");
    const priority = document.querySelector("#priority");
    const checkList = document.querySelector("#checkList");

    const task = new Task(title.value, description.value, dueDate.value, priority.value, checkList.value);
    project.addTask(task);

    clearField(title, description, dueDate, priority, checkList);
}

function clearField(title, description, dueDate, priority, checkList){
    title.value = "";
    description.value = "";
    dueDate.value = "";
    priority.value = "";
    checkList.value = "";
}

function getIndex(array){
    return array.length;
}