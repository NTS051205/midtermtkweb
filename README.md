# Learning Management System (LMS) 📚

[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Version](https://img.shields.io/badge/Version-1.0.0-blue.svg)](VERSION)

## Giới thiệu
Đây là một hệ thống quản lý học tập (Learning Management System) được xây dựng bằng HTML, CSS và JavaScript. Dự án này cung cấp một nền tảng học tập trực tuyến với nhiều tính năng cho cả người học và giảng viên.

## Tính năng chính
- 📚 Quản lý khóa học (Courses Management)
- 👥 Hệ thống đăng ký và đăng nhập (User Authentication)
- 📝 Thông tin chi tiết khóa học (Course Details)
- 📰 Tin tức và thông báo (News)
- ❓ FAQ (Câu hỏi thường gặp)
- 📞 Liên hệ và hỗ trợ (Contact Support)

## Cấu trúc dự án
```
├── index.html          # Trang chủ
├── courses.html        # Danh sách khóa học
├── course-detail.html  # Chi tiết khóa học
├── login.html          # Đăng nhập
├── register.html       # Đăng ký
├── about.html         # Giới thiệu
├── careers.html       # Tuyển dụng
├── contact.html       # Liên hệ
├── faq.html           # FAQ
├── news.html          # Tin tức
├── style.css          # File CSS chính
├── style.js           # File JavaScript chính
└── assets/            # Thư mục chứa tài nguyên
    ├── favision/      # Icon favicon
    ├── icon/          # Icons
    └── img/           # Hình ảnh
```

## Hướng dẫn cài đặt
1. Clone repository này về máy local
2. Mở file `index.html` bằng trình duyệt web để bắt đầu sử dụng

## Công nghệ sử dụng
- HTML5
- CSS3
- JavaScript
- Responsive Design

## Tính năng chi tiết
- **Quản lý khóa học**: Xem danh sách khóa học, thông tin chi tiết
- **Hệ thống tài khoản**: Đăng ký, đăng nhập, quản lý thông tin cá nhân
- **Tin tức và thông báo**: Cập nhật thông tin mới nhất về khóa học và sự kiện
- **FAQ**: Giải đáp các câu hỏi thường gặp
- **Tuyển dụng**: Thông tin về cơ hội việc làm
- **Hỗ trợ**: Kênh liên hệ và hỗ trợ người dùng

## Yêu cầu hệ thống
- Trình duyệt web hiện đại (Chrome, Firefox, Edge, Safari)
- Độ phân giải màn hình tối thiểu: 1280 x 720
- Kết nối internet ổn định

## Lệnh cho nhà phát triển

### Khởi động dự án
```bash
# Clone dự án
git clone https://github.com/NTS051205/lms_test.git

# Di chuyển vào thư mục dự án
cd lms-project

# Cài đặt Live Server (nếu chưa có)
npm install -g live-server

# Chạy dự án
live-server
```

### Kiểm tra mã
```bash
# Kiểm tra lỗi HTML
html-validate *.html

# Kiểm tra lỗi CSS
stylelint "**/*.css"

# Kiểm tra lỗi JavaScript
eslint "**/*.js"
```

### Build và Deploy
```bash
# Tối ưu hóa hình ảnh
npm run optimize-images

# Nén file
npm run build

# Deploy lên hosting
npm run deploy
```

## Quy ước đặt tên
- File HTML: Sử dụng kebab-case (ví dụ: course-detail.html)
- File CSS/JS: Sử dụng camelCase
- Class CSS: Sử dụng BEM methodology
- ID: Sử dụng camelCase

## Tối ưu hiệu suất
- [x] Nén hình ảnh
- [x] Minify CSS/JS
- [x] Lazy loading cho hình ảnh
- [x] Cache browsing
- [x] Responsive images

## Bảo mật
- Xác thực người dùng
- Mã hóa mật khẩu
- Bảo vệ chống XSS
- Bảo vệ chống CSRF
- Rate limiting

## Kiểm thử
- [x] Cross-browser testing
- [x] Responsive testing
- [x] Performance testing
- [x] Security testing

## Contributing
1. Fork dự án
2. Tạo branch mới (`git checkout -b feature/AmazingFeature`)
3. Commit thay đổi (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Tạo Pull Request

## Phiên bản
- v1.0.0 - Release ban đầu
- v1.0.1 - Cập nhật giao diện responsive
- v1.1.0 - Thêm tính năng mới

## Tác giả
- **Nguyễn Tiến Sơn** - **NEU**

## License
Dự án này được cấp phép theo giấy phép MIT - xem file [LICENSE](LICENSE) để biết thêm chi tiết.

## Ghi chú
- Dự án này được xây dựng với mục đích học tập
- Đảm bảo tương thích trên các trình duyệt hiện đại
- Thiết kế responsive cho trải nghiệm tốt trên mọi thiết bị
