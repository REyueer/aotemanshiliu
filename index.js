// 假设 tasks 是一个包含任务信息的数组，每个任务对象包括 name、deadline 和 completed 属性
const tasks = [
    { name: 'Task 1', deadline: '2024-03-05', completed: false },
    { name: 'Task 2', deadline: '2024-03-10', completed: false },
    { name: 'Task 3', deadline: '2024-03-15', completed: false }
];

// 当页面加载完成时执行初始化操作
window.addEventListener('load', () => {
    displayTasks();
});

// 显示任务列表
function displayTasks() {
    const taskListElement = document.getElementById('task-list');

    // 遍历任务数组，为每个任务创建一个列表项并添加到页面中
    tasks.forEach((task, index) => {
        const listItemElement = document.createElement('li');
        listItemElement.textContent = `Task: ${task.name}, Deadline: ${task.deadline}`;

        // 创建完成按钮
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.addEventListener('click', () => {
            // 标记任务为已完成
            tasks[index].completed = true;
            // 更新任务列表显示
            displayTasks();
        });

        // 将完成按钮添加到列表项中
        listItemElement.appendChild(completeButton);

        // 如果任务已完成，则添加特定的样式
        if (task.completed) {
            listItemElement.classList.add('completed');
        }

        taskListElement.appendChild(listItemElement);
    });
}
