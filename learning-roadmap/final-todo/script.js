const input = document.querySelector('#input');
const button = document.querySelector('#button');
const todoList = document.querySelector('#todo');
const completedList = document.querySelector('#completed');

let tasks = [];

function render() {
  todoList.innerHTML = '';
  completedList.innerHTML = '';

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = task.text;
    li.dataset.index = String(index);

    if (task.done) {
      li.classList.add('done');
      completedList.appendChild(li);
    } else {
      todoList.appendChild(li);
    }

    li.addEventListener('click', () => {
      tasks[index].done = !tasks[index].done;
      render();
    });
  });
}

button.addEventListener('click', () => {
  const text = input.value.trim();
  if (!text) return;

  tasks.push({ text, done: false });
  input.value = '';
  render();
});

// Enter key hỗ trợ UX
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') button.click();
});

