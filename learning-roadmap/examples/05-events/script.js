const input = document.querySelector('#input');
const button = document.querySelector('#button');
const todo = document.querySelector('#todo');

button.addEventListener('click', () => {
  const task = input.value.trim();
  if (!task) return;

  const li = document.createElement('li');
  li.textContent = task;
  todo.appendChild(li);

  input.value = '';
});

