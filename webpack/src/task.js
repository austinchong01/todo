import { projects } from "./console";

class Task {
    constructor(title, description, dueDate, priority, checkList, index) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checkList = checkList;
        this.index = index;
    }
}

function createTask(projNum, title, description, dueDate, priority, checkList) {
    const currProject = projects[projNum];
    const index = currProject.tasks.length;
    const task = new Task(title, description, dueDate, priority, checkList, index);
    currProject.tasks.push(task)
}

export { createTask }