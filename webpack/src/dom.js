import { Todo, createProject, createTask, removeProject, removeTask, changeStatus, editTask } from "./index";

const projDialog = document.querySelector("#projectDialog");
const taskDialog = document.querySelector("#taskDialog");
const editDialog = document.querySelector("#editDialog");

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
    const index = projIndex.getAttribute("data-attribute-index");
    createTask(title.value, description.value, dueDate.value, priority.value, checkList.checked, index);

    clearField(title, description, dueDate, priority, checkList);
    taskDialog.close();
}

function openEditDialog(event, currProjectIndex, task, currTaskIndex){
    const title = document.querySelector("#editTitle");
    const description = document.querySelector("#editDescription");
    const dueDate = document.querySelector("#editDueDate");
    const priority = document.querySelector("#editPriority");
    const checkList = document.querySelector("#editCheckList");

    const deleteProjIndDiv = document.querySelector("#editProjIndex");
    deleteProjIndDiv.remove();

    const deleteTaskIndDiv = document.querySelector("#taskIndex");
    deleteTaskIndDiv.remove();

    const projIndex = document.createElement("div");
    projIndex.setAttribute("id", "editProjIndex");
    projIndex.setAttribute("data-attribute-index", `${currProjectIndex}`);
    editDialog.appendChild(projIndex);

    const taskIndex = document.createElement("div");
    taskIndex.setAttribute("id", "taskIndex");
    taskIndex.setAttribute("data-attribute-index", `${currTaskIndex}`);
    editDialog.appendChild(taskIndex);

    title.value = task.title;
    description.value = task.description;
    dueDate.value = task.dueDate;
    priority.value = task.priority;
    checkList.checked = task.checkList;

    editDialog.showModal();
}

export function closeEditDialog(){
    const projIndex = document.querySelector("#editProjIndex");
    const currProjIndex = projIndex.getAttribute("data-attribute-index");

    const taskIndex = document.querySelector("#taskIndex");
    const currTaskIndex = taskIndex.getAttribute("data-attribute-index");

    const task = Todo.projects[currProjIndex].tasks[currTaskIndex];

    const title = document.querySelector("#editTitle");
    const description = document.querySelector("#editDescription");
    const dueDate = document.querySelector("#editDueDate");
    const priority = document.querySelector("#editPriority");
    const checkList = document.querySelector("#editCheckList");
    console.log(priority.value)

    editTask(task, title.value, description.value, dueDate.value, priority.value, checkList.checked);
    editDialog.close();
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
            const date = new Date(currProject.tasks[j].dueDate);
            dueDate.textContent = `${date.getDay()} Day(s) Left`;
            newTask.appendChild(dueDate);

            const priority = document.createElement("td");
            priority.textContent = currProject.tasks[j].priority;
            priority.setAttribute("class", `${currProject.tasks[j].priority}`);
            newTask.appendChild(priority);

            const checkList = document.createElement("td");
            const changeStatusBtn = document.createElement("button");
            setStatus(changeStatusBtn, currProject.tasks[j].checkList);
            changeStatusBtn.addEventListener("click", function(event) {
                changeStatus(event, currProject.tasks[j]);
            });
            checkList.appendChild(changeStatusBtn)
            newTask.appendChild(checkList);

            const editTask = document.createElement("td");
            const editTaskBtn = document.createElement("button");
            editTaskBtn.textContent = "Edit"
            editTaskBtn.setAttribute("data-attribute-index", `${i}`);
            editTaskBtn.addEventListener("click", function(event){
                openEditDialog(event, i, currProject.tasks[j], j);
            });
            editTask.appendChild(editTaskBtn);
            newTask.appendChild(editTask);

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

//status button for change
//status value = off/on
function setStatus(button, status){
    let text;
    if (status){
        text = "complete";
        button.setAttribute("class", "true");
    } else { // status == "off"
        text = "incomplete"
        button.setAttribute("class", "false");
    }
    button.textContent = text;
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
    priority.value = "Low";
    checkList.checked = false;
}