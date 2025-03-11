import { Todo, createProject, createTask, removeProject, removeTask } from "./index";

const projDialog = document.querySelector("#projectDialog");
const taskDialog = document.querySelector("#taskDialog");

export function openProjectDialog() {
    projDialog.showModal();
}

export function closeProjectDialog() {
    const projectName = document.querySelector("#projectName");
    createProject(projectName.value);

    projectName.value = "";
    projDialog.close();
}

export function openTaskDialog() {
    taskDialog.showModal();
    const currProjectIndex = event.target.getAttribute("data-attribute-index");

    const deleteProjIndDiv = document.querySelector("#projIndex");
    deleteProjIndDiv.remove();

    const projIndex = document.createElement("div");
    projIndex.setAttribute("id", "projIndex");
    projIndex.setAttribute("data-attribute-index", `${currProjectIndex}`);
    taskDialog.appendChild(projIndex);
}

export function closeTaskDialog() {
    const title = document.querySelector("#title");
    const description = document.querySelector("#description");
    const dueDate = document.querySelector("#dueDate");
    const priority = document.querySelector("#priority");
    const checkList = document.querySelector("#checkList");
    const projIndex = document.querySelector("#projIndex");
    const index = projIndex.getAttribute("data-attribute-index")
    createTask(title.value, description.value, dueDate.value, priority.value, checkList.value, index);

    clearField(title, description, dueDate, priority, checkList);
    taskDialog.close();
}

export function renderDom() {
    const newDOM = resetDOM();
    console.log(Todo.projects)
    for(let i = 0; i < Todo.projects.length; i++){
        const currProject = Todo.projects[i];

        //add Project DOM
        const newProject = document.createElement("table");
        newProject.setAttribute("data-attribute-index", `${i}`);

        const projHeader = document.createElement("tr");
        const projName = document.createElement("th")
        projName.textContent = currProject.name;
        newProject.appendChild(projHeader);
        projHeader.appendChild(projName);
        newDOM.appendChild(newProject);

        for(let j = 0; j < currProject.tasks.length; j++){
            //add Task DOM
            const newTask = document.createElement("tr");
            newTask.setAttribute("data-attribute-index", `${j}`);
            newProject.appendChild(newTask);

            const title = document.createElement("td");
            title.textContent = currProject.tasks[j].title;
            newTask.appendChild(title);

            const dueDate = document.createElement("td");
            dueDate.textContent = currProject.tasks[j].dueDate;
            newTask.appendChild(dueDate);

            const priority = document.createElement("td");
            priority.textContent = currProject.tasks[j].priority;
            newTask.appendChild(priority);

            const checkList = document.createElement("td");
            checkList.textContent = currProject.tasks[j].checkList;
            newTask.appendChild(checkList);

            //add removeTask Button DOM
            const removeTaskBtn = document.createElement("button");
            removeTaskBtn.textContent = "Remove Task";
            removeTaskBtn.setAttribute("class", "removeTaskBtn");
            removeTaskBtn.setAttribute("data-attribute-index", `${i}`);
            removeTaskBtn.addEventListener("click", function(event) {
                removeTask(event, currProject, currProject.tasks[j]);
            });
            const removeTaskBtnTD = document.createElement("td");
            removeTaskBtnTD.appendChild(removeTaskBtn)
            newTask.appendChild(removeTaskBtnTD);
        }

        //add removeProject Button DOM
        const removeProjBtn = document.createElement("button");
        removeProjBtn.textContent = "Remove Project";
        removeProjBtn.setAttribute("class", "removeProjBtn");
        removeProjBtn.setAttribute("data-attribute-index", `${i}`);
        removeProjBtn.addEventListener("click", removeProject);

        const removeProjBtnHeader = document.createElement("th");
        removeProjBtnHeader.appendChild(removeProjBtn);
        projHeader.appendChild(removeProjBtnHeader);


        //add addTask Button DOM
        const addTaskBtn = document.createElement("button");
        addTaskBtn.textContent = "Add Task";
        addTaskBtn.setAttribute("class", "addTaskBtn");
        addTaskBtn.setAttribute("data-attribute-index", `${i}`);
        addTaskBtn.addEventListener("click", openTaskDialog);

        const removeTaskBtnHeader = document.createElement("th");
        removeTaskBtnHeader.appendChild(addTaskBtn);
        projHeader.appendChild(removeTaskBtnHeader);
    }
}

function resetDOM() {
    const del = document.querySelector("#Todo");
    del.remove();

    const newDOM = document.createElement("div");
    newDOM.setAttribute("id", "Todo");
    document.body.appendChild(newDOM)
    return newDOM;
}

function clearField(title, description, dueDate, priority, checkList){
    title.value = "";
    description.value = "";
    dueDate.value = "";
    priority.value = "";
    checkList.value = "";
}