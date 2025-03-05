const projectListener = (function(){
    const addProjBtn = document.querySelector(".project");

    addProjBtn.addEventListener("click", () => {
        const newProject = document.createElement("div");
        const index = getIndex(projects);
        newProject.setAttribute("data-attribute-index", `${index}`);
        document.body.appendChild(newProject);
        addTask(newProject, index);

        createProject();
    })
})();

function addTask(newProject, index){
    const addTaskBtn = document.createElement("button");
    addTaskBtn.setAttribute("data-attribute-index", `${index}`);
    addTaskBtn.setAttribute("class", "task");
    addTaskBtn.textContent = "Add Task";
    newProject.appendChild(addTaskBtn);

    const dialog = document.body.querySelector("dialog");
    const closeTaskBtn = document.body.querySelector(".close");

    addTaskBtn.addEventListener("click", () => {
        console.log("reached")
        dialog.showModal();
    })
    
    closeTaskBtn.addEventListener("click", (event) => {
        event.preventDefault();
        createTask(projects[index]);
        console.log(projects)
        dialog.close();
    })
};

function createProject() {
    const project = new Project();
    projects.push(project);

    console.log(projects)
}

function createTask(project) {
    const title = document.querySelector("#title");
    const description = document.querySelector("#description");
    const dueDate = document.querySelector("#dueDate");
    const priority = document.querySelector("#priority");
    const checkList = document.querySelector("#checkList");

    const task = new Task(title.value, description.value, dueDate.value, priority.value, checkList.value);
    project.addTask(task);

    clearField(title, description, dueDate, priority, checkList);
}

function clearField(title, description, dueDate, priority, checkList){
    title.value = "";
    description.value = "";
    dueDate.value = "";
    priority.value = "";
    checkList.value = "";
}
