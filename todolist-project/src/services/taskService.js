import { STORAGE_KEY, getTodoData } from './storageService.js';

function createTask(title, desc, dueDate, priority) {
	return {
		id: crypto.randomUUID().slice(0, 8),
		title,
		desc,
		dueDate,
		priority
	};
}

function addTask(title, desc, dueDate, priority) {
	const data = getTodoData();
	const task = createTask(title, desc, dueDate, priority);
	data.tasks.push(task);
	localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function deleteTask(id) {
	const data = getTodoData();
	data.tasks = data.tasks.filter(task => task.id !== id);
	localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}
