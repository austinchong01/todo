export default class Project {
    constructor (name) {
        this.name = name;
        this.tasks = [];
    }
}

function createProject(name) {
    const project = new Project(name);
    projects.push(project);
    return project;
}

export { createProject }