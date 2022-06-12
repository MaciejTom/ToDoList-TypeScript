const ToDoListContainer = document.querySelector(".tasks");
const ToDoListInput = document.querySelector(".inputTask");
const ToDoListAddButton = document.querySelector(".btn");
const tasks = [
    { task: "Wyrzucić śmieci", done: false },
    { task: "Pójść na siłke", done: true },
    { task: "Nakarmić koty", done: false },
];
const render = (tasks) => {
    /* <li>
<label for="task-1">Wyrzucić śmieci</label>
<input type="checkbox" id="task-1" name="Wyrzucić śmieci" />
</li>
*/
    ToDoListContainer.innerText = "";
    tasks.forEach((task, index) => {
        const taskLi = document.createElement("li");
        const checkbox = document.createElement("input");
        const label = document.createElement("label");
        const id = `task-${index}`;
        label.setAttribute("for", id);
        checkbox.name = task.task;
        checkbox.type = "checkbox";
        checkbox.checked = task.done;
        label.innerText = task.task;
        taskLi.appendChild(label);
        taskLi.appendChild(checkbox);
        ToDoListContainer.appendChild(taskLi);
    });
};
render(tasks);
const addToList = (task) => {
    tasks.push({ task, done: false });
};
ToDoListAddButton.addEventListener("click", (e) => {
    e.preventDefault();
    addToList(ToDoListInput.value);
    render(tasks);
});
