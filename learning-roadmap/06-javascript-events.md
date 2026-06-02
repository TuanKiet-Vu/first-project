# 06. JavaScript Events (click)

## Giải thích ngắn gọn
- `addEventListener('click', handler)` chạy `handler` khi user bấm.
- Todo cần: khi bấm nút thì đọc value từ input và thêm vào list.

## Ví dụ
```html
<input id="input" type="text" />
<button id="button">Add</button>
<ul id="todo"></ul>

<script>
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
</script>
```

## Checklist
- Biết `trim()` để tránh nhập toàn khoảng trắng.
- Biết `return;` khi task rỗng.

