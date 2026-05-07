const addBookBtn = document.querySelector('.add-btn');
const closeBtn = document.querySelector('.close');
const libraryContainer = document.querySelector('.book-section');
const modalContainer = document.querySelector('.modal');
const modal = document.querySelector('form');
const header = document.querySelector('header');

const library = [];

function Book(title, author, pages) {
	this.title = title;
	this.author = author;
	this.id = crypto.randomUUID().slice(0, 8);
	this.pages = pages;
}

function addBookToLibrary(title, author, pages) {
	const newBook = new Book(title, author, pages);
	library.push(newBook);
	renderBook();
}

function renderBook() {
	if (library.length === 0) return;

	const getStarted = document.querySelector('.get-started');
	if (getStarted) getStarted.remove();

	libraryContainer.innerHTML = '';

	library.forEach(book => {
		const { title, author, pages, id } = book;
		const card = document.createElement('div');
		card.classList.add('book-card');
		card.innerHTML = `
      <p class="status">• Available</p>
      <h2>${title}</h2>
      <div class="book-details-row">
        <p class="info">Author:</p>
        <p>${author}</p>
      </div>
      <div class="book-details-row">
        <p class="info">Serial ID:</p>
        <p>${id}</p>
      </div>
      <div class="book-details-row">
        <p class="info">Pages:</p>
        <p>${pages}</p>
      </div>
    `;
		libraryContainer.appendChild(card);
	});
}

function openModal() {
	modalContainer.classList.add('open');
	libraryContainer.style.filter = 'blur(3px)';
	header.style.filter = 'blur(3px)';
}

function closeModal() {
	modalContainer.classList.remove('open');
	libraryContainer.style.filter = 'blur(0px)';
	header.style.filter = 'blur(0px)';
	modal.reset()
}

function submitBookInfo(e) {
	e.preventDefault();

	const title = document.getElementById('title').value.trim();
	const author = document.getElementById('author').value.trim();
	const pages = document.getElementById('pages').value.trim();

	addBookToLibrary(title, author, pages);
	closeModal();
	modal.reset();
}

addBookBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
modal.addEventListener('submit', e => submitBookInfo(e));
