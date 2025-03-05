import { projects } from "./console";

class Project {
    constructor() {
        this.tasks = [];
    }
    delete() {
        const index = projects.indexOf(this);
        projects.splice(index, 1);
    }

    static Task  = class {
        constructor(project, title, description, dueDate, priority, checkList) {
            this.project = project;
            this.title = title;
            this.description = description;
            this.dueDate = dueDate;
            this.priority = priority;
            this.checkList = checkList;
        }
    }

}

function createProject() {
    const project = new Project();
    projects.push(project);
}

export { createProject }