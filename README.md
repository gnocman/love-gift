# Này cô gái 💗 — website quà tặng mini

Website tĩnh dùng HTML, CSS và JavaScript thuần. Không cần backend.

## 1. Thay ảnh

Đặt ảnh của bạn vào `assets/images/`:
- `em-1.jpg`: ảnh hiển thị ở bước 3.
- `em-2.jpg`: ảnh hiển thị ở bước cuối.

Có thể dùng PNG/WebP, nhưng hãy sửa đường dẫn tương ứng trong `js/script.js`. Nếu muốn nhiều ảnh, thêm ảnh và điều chỉnh mục `steps`.

## 2. Thay nhạc

Đặt file MP3 tại:

`assets/music/love.mp3`

Giữ nguyên tên file để không phải sửa code. Nhạc chỉ phát sau khi người xem nhấn nút **Bật nhạc**, do chính sách tự phát âm thanh của trình duyệt.

## 3. Sửa lời thoại

Mở `js/script.js`, chỉnh các trường `title`, `copy`, `button` trong mảng `steps`.
- Dùng `\n\n` để tạo đoạn cách nhau.
- Bước 3 có câu `[điền điều anh thích ở em]`; hãy thay bằng lời thật của bạn.
- Có thể sửa lời phản hồi cuối trong các hàm `addChoice(...)`.

## 4. Xem thử trên máy

Mở `index.html` trên trình duyệt để kiểm tra cơ bản. Để kiểm thử gần giống website thật, chạy local server trong thư mục `love-gift`:

```bash
python3 -m http.server 8000
```

Sau đó mở `http://localhost:8000`.

## 5. Đưa lên GitHub Pages

1. Tạo một repository GitHub mới, ví dụ `love-gift`.
2. Upload toàn bộ file và thư mục bên trong `love-gift` lên repository.
3. Vào **Settings → Pages**.
4. Chọn **Deploy from a branch**, chọn nhánh `main` và thư mục `/(root)`, sau đó Save.
5. Chờ GitHub triển khai xong và mở URL được hiển thị ở phần Pages.
6. Mở link bằng điện thoại để kiểm tra ảnh, nhạc và các nút.

## Lưu ý

- QR code tạo từ URL GitHub Pages sau khi website đã được publish.
- Website tĩnh không tự gửi câu trả lời của người xem cho bạn. Các lựa chọn cuối chỉ hiện lời phản hồi trên màn hình.
- Nếu ảnh hoặc nhạc không tải, kiểm tra đúng tên file, chữ hoa/chữ thường và đường dẫn.
- Chỉ đưa lên mạng ảnh và nội dung mà bạn thấy thoải mái khi chia sẻ bằng một link công khai.
