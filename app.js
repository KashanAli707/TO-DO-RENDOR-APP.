// Initialize an empty array to store tasks
let tasks = [];

// Function to render tasks to the page
function render() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = ''; // Clear the list before rendering new tasks

  // Loop through the tasks array and display each task
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = task;
    
    // Create delete button for each task
    const deleteButton = document.createElement('span');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete');
    deleteButton.addEventListener('click', () => deleteTask(index));
    
    li.appendChild(deleteButton);
    taskList.appendChild(li);
  });
}

// Function to add a task to the array
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskValue = taskInput.value.trim();

  if (taskValue) {
    tasks.push(taskValue); // Add the task to the tasks array
    taskInput.value = ''; // Clear input field
    render(); // Re-render the task list
  }
}

// Function to delete a task from the array
function deleteTask(index) {
  tasks.splice(index, 1); // Remove task at the specified index
  render(); // Re-render the task list
}

// Event listener for the Add Task button
document.getElementById('addButton').addEventListener('click', addTask);

// Optional: Allow pressing "Enter" to add task
document.getElementById('taskInput').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    addTask();
  }
});
