# 09. Debugging (sai selector id là lỗi hay gặp nhất)

## Giải thích ngắn gọn
- Nếu JS không chạy/không thêm được task:
  - sai `id` giữa HTML và JS (vd: HTML có `id="input"` nhưng JS lại query `#taskinput`)
  - quên link script trong HTML
  - script chạy trước khi DOM sẵn sàng (nên đặt `<script>` cuối `body` hoặc dùng `DOMContentLoaded`)

## Checklist nhanh
- Console có lỗi đỏ không?
- `document.querySelector(...)` có trả về `null` không?
- Selector có đúng ký tự # . và đúng id/class?

## Ví dụ sửa sai
Nếu HTML:
```html
<input id="input" />
```
Thì JS phải:
```js
const input = document.querySelector('#input');
```

