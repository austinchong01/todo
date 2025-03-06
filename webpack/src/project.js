export default class Project {
    constructor (name) {
        this.name = name;
        this.tasks = [];
    }
    add(task) {
        this.tasks.push(task);
    }

    remove(task) {
        this.tasks =  this.tasks.filter(item => item !== task);
    }
}
