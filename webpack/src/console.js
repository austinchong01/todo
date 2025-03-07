import "./styles.css";
import ProjectManager from "./project_manager.js";
import Project from "./project.js";
import Task from "./task";
import { openProjectDialog } from "./dom.js";


export const Todo = new ProjectManager;

const addProjBtn = document.querySelector(".addProjBtn");
addProjBtn.addEventListener("click", openProjectDialog);

export function createProject(name){
    const project = new Project(name);
    Todo.add(project);
}

function createTask(title, description, dueDate, priority, checkList, projIndex) {
    const task = new Task(title, description, dueDate, priority, checkList);
    Todo.projects[projIndex].add(task);
}

// const proj1 = new Project("one");
// const proj2 = new Project("two");
// const proj3 = new Project("three");

// const task1 = new Task(1, 1, 1, 1, 1);
// const task2 = new Task(2, 2, 2, 2, 2);
// const task3 = new Task(3, 3, 3, 3, 3);
// const task4 = new Task(4, 4, 4, 4, 4);
// const task5 = new Task(5, 5, 5, 5, 5);
// const task6 = new Task(6, 6, 6, 6, 6);

// Todo.add(proj1);
// Todo.add(proj2);
// Todo.add(proj3);

// proj1.add(task4);
// proj1.add(task2);

// proj2.add(task3);
// proj2.add(task1);
// proj2.add(task5);

// proj3.add(task6);

// proj2.remove(task3);
// proj2.remove(task2);

// console.log(proj1);
// console.log(proj2);
// console.log(Todo.projects);