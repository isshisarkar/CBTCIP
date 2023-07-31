function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const taskList = document.getElementById("taskList");
  const newTask = document.createElement("li");
  newTask.textContent = taskText;
  
  // Add a click event to the new task to delete it when clicked
  newTask.addEventListener("click", function() {
    this.parentNode.removeChild(this);
  });

  taskList.appendChild(newTask);
  taskInput.value = "";
}
