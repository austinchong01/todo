import { projects } from "./console";

class Project {
    constructor(index){
        this.tasks = [];
        this.index = index;
    }
}

function createProject() {
    const index = projects.length;
    const project = new Project(index);
    projects.push(project);
}

export { createProject }