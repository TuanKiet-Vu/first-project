# 03. CSS cơ bản

## Giải thích ngắn gọn
- CSS quyết định giao diện: màu sắc, kích thước, khoảng cách.
- Nắm box model: `margin`, `border`, `padding`, `content`.

## Ví dụ
```css
body {
  background: #eaf6ff;
  font-family: Arial, sans-serif;
}

header {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px;
}

#input {
  flex: 1;
  height: 40px;
  padding: 0 12px;
}

#button {
  height: 40px;
  padding: 0 14px;
}
```

## Checklist
- Thêm được style cho `body/header/input/button`.
- Hiểu `flex` chỉ dùng khi bạn đã `display:flex` cho container.

