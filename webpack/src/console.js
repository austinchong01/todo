import "./styles.css"
import { createProject } from "./project.js";
import { createTask } from "./task";

//array of all projects
export const projects = [];

createProject();
createProject();

const project0 = projects[0];
const project1 = projects[1];

createTask(project0, "test0", "test0", "test0", "test0", "test0");
createTask(project1, "test1", "test1", "test1", "test1", "test1");


console.log(projects);