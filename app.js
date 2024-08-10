document.addEventListener('DOMContentLoaded', () => {
    const addTaskBtn = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');
    const newTaskInput = document.getElementById('new-task');
    let taskCounter = 1;

    addTaskBtn.addEventListener('click', addTask);

    function addTask() {
        const taskText = newTaskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            li.classList.add('task-item'); 

            const taskContent = document.createElement('span');
            taskContent.textContent = `${taskCounter}. ${taskText}`;
            taskContent.classList.add('task-content');

            const completeBtn = document.createElement('button');
            completeBtn.textContent = 'Complete';
            completeBtn.classList.add('complete-btn');
            completeBtn.addEventListener('click', () => {
                taskContent.classList.toggle('completed');
                if (taskContent.classList.contains('completed')) {
                    completeBtn.innerHTML = 'Task Completed &#10004;'; 
                } else {
                    completeBtn.textContent = 'Complete';
                }
            });

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.classList.add('delete-btn');
            deleteBtn.addEventListener('click', () => {
                taskList.removeChild(li);
                updateTaskNumbers(); 
            });

            li.appendChild(taskContent);
            li.appendChild(completeBtn);
            li.appendChild(deleteBtn);
            taskList.appendChild(li);

            taskCounter++;
            newTaskInput.value = ''; 
        }
    }

    function updateTaskNumbers() {
        const tasks = taskList.getElementsByTagName('li');
        taskCounter = 1; 
        Array.from(tasks).forEach((li) => {
            const taskContent = li.querySelector('.task-content');
            taskContent.textContent = `${taskCounter}. ${taskContent.textContent.split('. ')[1]}`;
            taskCounter++;
        });
    }
});
