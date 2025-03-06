import "./styles.css"
import { createProject } from "./project.js";
import { createTask } from "./task";

//array of all projects
export const projects = [];

createProject();

const project0 = projects[0];

const task0 = createTask(project0, "test0", "test0", "test0", "test0", "test0");


console.log(projects);