const ToDoListContainer = document.querySelector(".tasks");
const ToDoListInput = document.querySelector(".inputTask");
const ToDoListAddButton = document.querySelector(".btn");
const tasks = [
    { name: "Wyrzucić śmieci", done: false },
    { name: "Pójść na siłke", done: true },
    { name: "Nakarmić koty", done: false },
];
const render = (tasks) => {
    ToDoListContainer.innerText = "";
    tasks.forEach((task, index) => {
        const taskLi = document.createElement("li");
        const checkbox = document.createElement("input");
        const label = document.createElement("label");
        const id = `task-${index}`;
        label.setAttribute("for", id);
        checkbox.name = task.name;
        checkbox.type = "checkbox";
        checkbox.checked = task.done;
        label.innerText = task.name;
        checkbox.addEventListener("change", () => {
            task.done = !task.done;
        });
        taskLi.appendChild(label);
        taskLi.appendChild(checkbox);
        ToDoListContainer.appendChild(taskLi);
    });
};
render(tasks);
const addToList = (task) => {
    tasks.push(task);
};
ToDoListAddButton.addEventListener("click", (e) => {
    e.preventDefault();
    addToList({ name: ToDoListInput.value, done: false });
    render(tasks);
});
