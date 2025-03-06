export default class ProjectManager {
    constructor (){
        this.projects = [];
    }

    add(project) {
        this.projects.push(project);
    }

    remove(project) {
        const index = this.projects.indexOf(project);
        this.projects.splice(index, 1);
    }
}