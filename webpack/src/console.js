import "./styles.css"
import { createProject } from "./project.js";
import { createTask } from "./task";

//array of all projects
export const projects = [];

createProject();
createProject();

const project0 = projects[0];
const project1 = projects[1];

const task0 = createTask(project0, "test0", "test0", "test0", "test0", "test0");
const task1 = createTask(project1, "test1", "test1", "test1", "test1", "test1");
const task2 = createTask(project1, "test2", "test2", "test2", "test2", "test2");

task1.delete();


console.log(projects);