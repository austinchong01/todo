class Task {
    constructor(project, title, description, dueDate, priority, checkList) {
        this.project = project;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checkList = checkList;
    }
    delete() {
        const index = this.project.tasks.indexOf(this);
        this.project.tasks.splice(index, 1);
    }
}

function createTask(project, title, description, dueDate, priority, checkList) {
    const task = new Task(project, title, description, dueDate, priority, checkList);
    project.tasks.push(task);
    return task;
}

export { createTask }