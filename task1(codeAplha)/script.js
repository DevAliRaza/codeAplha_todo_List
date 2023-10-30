// Get DOM elements
const taskInput = document.getElementById("task");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

// Add task to the list
addTaskButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const li = document.createElement("li");
        li.innerHTML = `${taskText} <button class="delete">Delete</button>`;
        li.style.opacity = 0; // Initially set opacity to 0
        taskList.appendChild(li);
        taskInput.value = "";

        // Trigger the animation by delaying setting opacity to 1
        setTimeout(() => {
            li.style.opacity = 1;
        }, 10);

        // Delete task when the delete button is clicked
        const deleteButton = li.querySelector(".delete");
        deleteButton.addEventListener("click", () => {
            taskList.removeChild(li);
        });
    }
});

// Delegate delete task functionality to the parent element
taskList.addEventListener("click", (e) => {
    if (e.target && e.target.className === "delete") {
        const li = e.target.parentElement;
        taskList.removeChild(li);
    }
});
