function taskCard(taskObj, onDelete, onEdit) {
	const { id, title, dueDate, priority } = taskObj;
	const card = document.createElement('div');
	const deleteBtn = document.createElement('button');
	const updateBtn = document.createElement('button');

	card.innerHTML = `
		  <h2>${title}</h2>
		  <p>${dueDate}</p>
		  <p>${priority}</p>
		`;

	deleteBtn.textContent = 'Delete Task';
	updateBtn.textContent = 'Update Task';

	deleteBtn.addEventListener('click', () => {
		onDelete(id);
		card.remove();
	});
	updateBtn.addEventListener('click', () => {
		onEdit(id);
	});

	card.appendChild(deleteBtn);
	card.appendChild(updateBtn);

	return card;
}

export default taskCard;
