import { STORAGE_KEY, getTodoData } from './storageService.js';

function createTask(title, dueDate, priority) {
	return {
		id: crypto.randomUUID().slice(0, 8),
		title,
		dueDate,
		priority
	};
}

function addTask(title, dueDate, priority) {
	const data = getTodoData();
	const task = createTask(title, dueDate, priority);
	data.tasks.push(task);
	localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function deleteTask(id) {
	const data = getTodoData();
	data.tasks = data.tasks.filter(task => task.id !== id);
	localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function updateTask(id, title, dueDate, priority) {
	const data = getTodoData();
	data.tasks = data.tasks.map(task => {
		if (task.id === id) {
			task.title = title;
			task.dueDate = dueDate;
			task.priority = priority;
			
			return task;
		}
	});
	localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export { addTask, deleteTask, updateTask };
