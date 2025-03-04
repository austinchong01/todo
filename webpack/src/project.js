export default class Project {
    constructor(){
        this.array = [];
    }

    addTask(task) {
        this.array.push(task);
    }
}