# 04. CSS Flex (và cách nhìn todo item như “card”)

## Giải thích ngắn gọn
- Flex giúp căn chỉnh hàng ngang/dọc dễ dàng.
- Todo item thường trông như một “card”: nền, padding, border-radius.

## Ví dụ: flex header + card todo
```css
header {
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
}

ul.todo {
  list-style: none;
  padding: 0;
}

ul.todo li {
  background: #c7ecff;
  padding: 12px;
  margin: 10px 0;
  border-radius: 12px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.08);
}
```

## Checklist
- Biết loại bỏ bullet bằng `list-style: none`.
- Biết làm “card” bằng padding + border-radius + background.

