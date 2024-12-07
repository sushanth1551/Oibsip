const taskTitle = document.getElementById("task-title");
const taskDesc = document.getElementById("task-desc");
const addTaskBtn = document.getElementById("add-task-btn");
const pendingTasksList = document.getElementById("pending-tasks-list");
const completedTasksList = document.getElementById("completed-tasks-list");

addTaskBtn.addEventListener("click", addTask);

function addTask() {
  if (!taskTitle.value.trim() || !taskDesc.value.trim()) {
    alert("Please fill out both the Title and Description fields.");
    return;
  }

  const task = createTaskElement(taskTitle.value, taskDesc.value);
  pendingTasksList.appendChild(task);
  taskTitle.value = "";
  taskDesc.value = "";
}

function createTaskElement(title, desc) {
  const li = document.createElement("li");

  const taskInfo = document.createElement("span");
  taskInfo.textContent = `${title}: ${desc}`;
  li.appendChild(taskInfo);

  const completeBtn = document.createElement("button");
  completeBtn.innerHTML = '<i class="fas fa-check"></i>'; // Font Awesome check icon
  completeBtn.classList.add("complete-btn");
  completeBtn.addEventListener("click", () => {
    li.classList.add("completed");
    setTimeout(() => {
      li.remove();
      completedTasksList.appendChild(li);
      completedTasksList.appendChild(createCompletedTaskElement(title, desc));
    }, 300); // Delay for animation
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = '<i class="fas fa-trash"></i>'; // Font Awesome trash icon
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", () => {
    li.classList.add("fade-out");
    setTimeout(() => li.remove(), 300); // Delay for fade-out animation
  });

  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);

  return li;
}

function createCompletedTaskElement(title, desc) {
  const li = document.createElement("li");
  li.classList.add("completed-task");

  const taskInfo = document.createElement("span");
  taskInfo.textContent = `${title}: ${desc} (Completed)`;
  li.appendChild(taskInfo);

  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = '<i class="fas fa-trash"></i>'; // Font Awesome trash icon
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", () => {
    li.classList.add("fade-out");
    setTimeout(() => li.remove(), 300); // Delay for fade-out animation
  });

  li.appendChild(deleteBtn);
  return li;
}