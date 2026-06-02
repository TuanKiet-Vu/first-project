# 05. JavaScript DOM cơ bản

## Giải thích ngắn gọn
- DOM là cây phần tử của trang HTML.
- JS sẽ:
  - lấy phần tử: `document.querySelector('#id')`
  - tạo phần tử: `document.createElement('li')`
  - chèn vào DOM: `parent.appendChild(node)`

## Ví dụ
```html
<ul id="todo"></ul>
<script>
  const todo = document.querySelector('#todo');

  const li = document.createElement('li');
  li.textContent = 'New task';

  todo.appendChild(li);
</script>
```

## Checklist
- Thao tác được: query → createElement → appendChild.
- Nắm được cách dùng `id` trong selector.

