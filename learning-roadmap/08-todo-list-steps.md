# 08. Xây todo list cơ bản (thêm + completed)

## Giải thích ngắn gọn
Todo list có 2 khu:
- `todo` (chưa xong)
- `completed` (đã xong)

Bước làm:
1. Lấy DOM: `#input`, `#button`, `#todo`, `#completed`
2. State: `tasks` (mảng) và mỗi task có `text` + `done`.
3. Khi click:
   - đọc input
   - thêm task vào mảng với `done=false`
   - gọi `render()`
4. Khi click một task:
   - đổi `done=true/false`
   - gọi `render()`

## Ví dụ ý tưởng
- Render mỗi task thành `<li>`.
- Dùng dataset: `li.dataset.index = i` để biết task nào.

## Checklist
- Toggle xong/chưa xong.
- Có cảnh báo input rỗng (hoặc bỏ qua).

