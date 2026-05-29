import { STORAGE_KEY, getTodoData } from './storageService.js';

function createTask(title, desc, dueDate, priority) {
	this.id = crypto.randomUUID().slice(0, 8);
	this.title = title;
	this.desc = desc;
	this.dueDate = dueDate;
	this.priority = priority;

	return { id, title, desc, dueDate, priority };
}

function addTask(title, desc, dueDate, priority) {
	data = getTodoData();
	const task = createTask(title, desc, dueDate, priority);
	data.tasks.push(task);
	localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}
