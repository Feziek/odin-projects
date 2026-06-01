import { getTodoData } from '../services/storageService.js';
import { addTask, deleteTask, updateTask } from '../services/taskService.js';
import taskCard from '../components/taskCard.js';
import displayModal from '../components/modal.js';

function renderTasks() {
	const page = document.getElementById('content');
	const container = document.createElement('div');
	const data = getTodoData();

	data.tasks.forEach(task => {
		const card = taskCard(task, deleteTask, () => {
			page.appendChild(
				displayModal(formData => {
					const { title, dueDate, priority } = formData;
					updateTask(task.id, title, dueDate, priority);
					container.innerHTML = '';
					renderTasks();
				})
			);
		});
		container.classList.add('task-container');
		container.appendChild(card);
	});
	page.appendChild(container);
}

function addTaskCard() {
	let container = document.querySelector('.task-container');
	const page = document.getElementById('content');
	const data = getTodoData().tasks;
	const lastTask = data[data.length - 1];
	const card = taskCard(lastTask, deleteTask, () => {
		page.appendChild(
			displayModal(formData => {
				const { title, dueDate, priority } = formData;
				updateTask(lastTask.id, title, dueDate, priority);
				addTaskCard();
			})
		);
	});

	if (!container) {
		container = document.createElement('div');
		container.classList.add('task-container');
	}

	container.appendChild(card);
	page.appendChild(container);
}

function taskPage() {
	const taskHeading = document.createElement('h1');
	const addBtn = document.createElement('button');
	const page = document.getElementById('content');
	taskHeading.textContent = 'Tasks';
	addBtn.textContent = 'Add Task';

	page.innerHTML = '';
	page.appendChild(taskHeading);
	page.appendChild(addBtn);
	renderTasks();

	addBtn.addEventListener('click', () => {
		page.appendChild(
			displayModal(formData => {
				const { title, dueDate, priority } = formData;
				addTask(title, dueDate, priority);
				addTaskCard();
			})
		);
	});
}

export default taskPage;
