import "./styles.css"
import { createProject } from "./project.js";
import { createTask } from "./task";

//array of all projects
export const projects = [];

createProject();
createProject();
createProject();

createTask(1, "test", "test", "test", "test", "test");
createTask(2, "test2", "test2", "test2", "test2", "test2");
createTask(2, "test3", "test3", "test3", "test3", "test3");

console.log(projects);