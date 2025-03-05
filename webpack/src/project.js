import { projects } from "./console";

class Project {
    constructor() {
        this.tasks = [];
    }
    delete() {
        const index = projects.indexOf(this);
        projects.splice(index, 1);
    }
}

function createProject() {
    const project = new Project();
    projects.push(project);
    return project;
}

export { createProject }