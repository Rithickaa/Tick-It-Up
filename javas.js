let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
window.onload = function () {
    displayTasks();
};
document.getElementById("button-addon2").addEventListener("click", function (e) {
    e.preventDefault();
    const input = document.querySelector(".form-control");
    const taskText = input.value.trim();
    if (taskText !== "") {
        const newTask = { task: taskText };
        tasks.push(newTask);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        input.value = "";
        displayTasks();
    }
});

function displayTasks() {
    const container = document.getElementById("task-list");
    container.innerHTML = "";
    tasks.forEach((item, index) => {
        const taskRow = document.createElement("div");
        taskRow.className = "p-2 border rounded mb-2 bg-light d-flex align-items-center";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "form-check-input me-2";
        checkbox.style.backgroundColor = "";
        checkbox.style.border = "1px solid black";

        const taskText = document.createElement("span");
        taskText.textContent = `${index + 1}. ${item.task}`;
        taskText.style.color = "black";
        checkbox.addEventListener("change", function () {
            if (this.checked) {
                taskText.style.textDecoration = "line-through";
            } else {
                taskText.style.textDecoration = "none";
            }
        });

        taskRow.appendChild(checkbox);
        taskRow.appendChild(taskText);
        container.appendChild(taskRow);
    });
}
const quotes = [
  "Small steps every day lead to big results.",
  "Start where you are. Use what you have. Do what you can.",
  "The secret of getting ahead is getting started.",
  "Don’t wait for motivation. Create it by action.",
  "Progress, not perfection.",
  "Your goals don’t work unless you do.",
  "Dream big. Start small. Act now.",
  "The future depends on what you do today.",
  "A goal without a plan is just a wish.",
  "Stay focused and never give up.",
  "Discipline is choosing between what you want now and what you want most.",
  "Success is the sum of small efforts, repeated daily.",
  "Consistency beats intensity.",
  "Tick it off, level up.",
  "You don’t have to be extreme, just consistent.",
  "You’re doing better than you think.",
  "Keep going. You’re closer than you were yesterday.",
  "Your only limit is your mind.",
  "Every tick is a win.",
  "Believe you can, and you’re halfway there."
];

const r_text = Math.floor(Math.random()* quotes.length);
document.getElementById("quote").innerText = quotes[r_text];




