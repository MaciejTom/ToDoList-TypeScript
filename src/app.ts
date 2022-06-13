const ToDoListContainer: HTMLElement = document.querySelector(".tasks");
const ToDoListInput: HTMLInputElement = document.querySelector(".inputTask");
const ToDoListAddButton: HTMLButtonElement = document.querySelector(".btn");

const tasks: { name: string; done: boolean }[] = [
  { name: "Wyrzucić śmieci", done: false },
  { name: "Pójść na siłke", done: true },
  { name: "Nakarmić koty", done: false },
];

const render = (tasks: { name: string; done: boolean }[]): void =>  {

  ToDoListContainer.innerText = "";
  tasks.forEach((task, index) => {
    const taskLi: HTMLElement = document.createElement("li");
    const checkbox: HTMLInputElement = document.createElement("input")
    const label: HTMLLabelElement = document.createElement("label");

    const id: string = `task-${index}`
    label.setAttribute("for", id);

    checkbox.name = task.name;
    checkbox.type = "checkbox";
    checkbox.checked = task.done;
    label.innerText = task.name;

    checkbox.addEventListener("change", () => {
      task.done = !task.done;
    })

    taskLi.appendChild(label);
    taskLi.appendChild(checkbox);
    ToDoListContainer.appendChild(taskLi);
  });
};

render(tasks);

const addToList = (task: {name: string, done: boolean}) => {
  tasks.push(task);
};

ToDoListAddButton.addEventListener("click", (e) => {
  e.preventDefault();
  addToList({name: ToDoListInput.value, done: false});
  render(tasks);
});
