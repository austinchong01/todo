export default class ProjectManager {
    constructor (){
        this.projects = [];
    }

    add(project) {
        this.projects.push(project);
    }

    remove(project) {
        this.projects =  this.projects.filter(item => item !== project);
    }
}