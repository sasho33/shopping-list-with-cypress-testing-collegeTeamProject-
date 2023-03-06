// Initialize the todo list
const addBtn = document.getElementById('addToList');
const list = document.querySelector('#todo-list');
const newItemInput = document.querySelector('#todo-input');
let checkboxes = list.querySelectorAll('[data-checkbox]');
const deleteButtons = list.querySelectorAll('.delete-btn');

console.log(checkboxes);
// checkboxes.forEach((checkbox) => {
//   checkbox.addEventListener('change', (event) => {
//     const listItem = event.target.parentNode;
//     console.log(event.target);
//     if (event.target.checked) {
//       listItem.style.textDecoration = 'line-through';
//     } else {
//       listItem.style.textDecoration = 'none';
//     }
//   });
// });

// deleteButtons.forEach((button) => {
//   button.addEventListener('click', (event) => {
//     const listItem = event.target.parentNode;
//     list.removeChild(listItem);
//   });
// });

list.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete-btn')) {
    const listItem = event.target.parentNode;
    list.removeChild(listItem);
  }
});

list.addEventListener('change', (event) => {
  if (event.target.type === 'checkbox') {
    const listItem = event.target.parentNode;
    if (event.target.checked) {
      listItem.style.textDecoration = 'line-through';
    } else {
      listItem.style.textDecoration = 'none';
    }
  }
});

addBtn.addEventListener('click', () => {
  // add new item functionality
  const newItemText = newItemInput.value;
  if (newItemText.trim() === '') {
    return;
  }
  const newItem = document.createElement('li');
  newItem.classList.add('todo-list-element');

  newItem.innerHTML = `<input data-checkbox type="checkbox"> ${newItemText} <button class="delete-btn float-right btn btn-danger btn-sm">Delete</button>`;
  list.appendChild(newItem);

  newItemInput.value = '';

  checkboxes = list.querySelectorAll('[data-checkbox]');
});
