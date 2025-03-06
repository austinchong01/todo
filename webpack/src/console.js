import "./styles.css"
import ProjectManager from "./project_manager.js";
import Project from "./project.js";
import Task from "./task";

const Todo = new ProjectManager;

const proj1 = new Project("one");
const proj2 = new Project("two");

const task1 = new Task(1, 1, 1, 1, 1);
const task2 = new Task(2, 2, 2, 2, 2);
const task3 = new Task(3, 3, 3, 3, 3);
const task4 = new Task(4, 4, 4, 4, 4);

Todo.add(proj1);
Todo.add(proj2);
proj1.add(task1);
proj2.add(task2);
proj2.add(task3);
proj2.add(task4);

proj2.remove(task3);
proj2.remove(task2);

console.log(proj1);
console.log(proj2);
console.log(Todo.projects);