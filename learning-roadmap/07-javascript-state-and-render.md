# 07. State & Render (tách dữ liệu khỏi DOM)

## Giải thích ngắn gọn
- Thay vì tạo DOM trực tiếp mỗi lần bấm, ta lưu task vào mảng (state), rồi render lại.
- Cách này giúp code rõ ràng và mở rộng dễ hơn (checkbox, xóa, lọc,...)

## Ví dụ
```html
<ul id="todo"></ul>
<script>
  const tasks = [];
  const todo = document.querySelector('#todo');

  function render() {
    todo.innerHTML = '';
    tasks.forEach((t) => {
      const li = document.createElement('li');
      li.textContent = t;
      todo.appendChild(li);
    });
  }

  // add task
  tasks.push('Learn JS');
  render();
</script>
```

## Checklist
- Có hàm `render()`.
- DOM chỉ phản ánh state.

