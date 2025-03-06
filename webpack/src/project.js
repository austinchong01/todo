export default class Project {
    constructor (name) {
        this.name = name;
        this.tasks = [];
    }
    add(task) {
        this.tasks.push(task);
    }

    remove(task) {
        const index = this.tasks.indexOf(task);
        this.tasks.splice(index, 1);
    }
}
