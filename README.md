# 🎓 Hệ Thống Quản Lý Khóa Học NEU

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://www.w3.org/html/)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

Hệ thống quản lý khóa học trực tuyến được phát triển cho Trường Đại học Kinh tế Quốc dân (NEU), cung cấp nền tảng học tập hiện đại và tiện lợi cho sinh viên và giảng viên.

## 📑 Mục Lục

- [Tính Năng Chính](#-tính-năng-chính)
- [Demo](#-demo)
- [Công Nghệ Sử Dụng](#-công-nghệ-sử-dụng)
- [Tương Thích Trình Duyệt](#-tương-thích-trình-duyệt)
- [Cài Đặt và Sử Dụng](#-cài-đặt-và-sử-dụng)
- [Cấu Trúc Dự Án](#-cấu-trúc-dự-án)
- [API Reference](#-api-reference)
- [Nguồn Gốc Layout](#-nguồn-gốc-layout)
- [Đóng Góp](#-đóng-góp)
- [Giấy Phép](#-giấy-phép)
- [Tác Giả](#-tác-giả)

## ✨ Tính Năng Chính

### 👥 Quản Lý Người Dùng
- Đăng ký và xác thực tài khoản
- Quản lý thông tin cá nhân
- Phân quyền người dùng (Admin/Giảng viên/Sinh viên)

### 📚 Quản Lý Khóa Học
- Tạo và quản lý khóa học
- Theo dõi tiến độ học tập
- Hệ thống đánh giá và chứng chỉ
- Giỏ hàng và thanh toán khóa học

### 🤝 Tương Tác
- Chat trực tiếp giữa giảng viên và học viên
- Diễn đàn thảo luận
- Hệ thống thông báo
- FAQ và hỗ trợ

### 📱 Giao Diện
- Responsive trên mọi thiết bị
- Giao diện thân thiện, dễ sử dụng
- Dark/Light mode
- Đa ngôn ngữ (Tiếng Việt/Tiếng Anh)

## 🌟 Demo

[Link Demo]([https://nts051205.github.io/midtermtkweb/])


## 🛠 Công Nghệ Sử Dụng

### Frontend
- HTML5
- CSS3 (Flexbox/Grid)
- JavaScript (ES6+)
- LocalStorage API
- Responsive Design

### UI Components
- Custom CSS Variables
- CSS Animations
- Modern UI/UX principles
- Material Design inspiration

### Development Tools
- Visual Studio Code
- Git & GitHub
- Chrome DevTools
- Live Server

## 💻 Tương Thích Trình Duyệt

### Desktop
| Trình duyệt | Phiên bản tối thiểu |
|-------------|---------------------|
| Chrome      | 88+                 |
| Firefox     | 85+                 |
| Safari      | 14+                 |
| Edge        | 88+ (Chromium)      |
| Opera       | 74+                 |

### Mobile
| Trình duyệt | Phiên bản tối thiểu |
|-------------|---------------------|
| Chrome      | 88+                 |
| Safari iOS  | 14+                 |
| Samsung Internet | 15+            |
| Opera Mobile | 63+                |

## 🚀 Cài Đặt và Sử Dụng

1. Clone dự án:
```bash
git clone [https://github.com/NTS051205/midtermtkweb.git]
```

2. Truy cập thư mục dự án:
```bash
cd Web_Lms_BTL
```

3. Khởi chạy với Live Server hoặc mở file index.html

### Sử dụng Python server:
```bash
python -m http.server 8000
```

### Sử dụng Node.js:
```bash
npx serve
```

## 📁 Cấu Trúc Dự Án

```
Web_Lms_BTL/
├── assets/
│   ├── img/         # Hình ảnh và media
│   ├── css/         # CSS files
│   └── js/          # JavaScript files
├── pages/
│   ├=── about.html
│   ├── courses.html
│   ├── login.html
│   └── ...
├── components/      # Các component tái sử dụng
├── style.css       # Global styles
├── style.js        # Global JavaScript
├── index.html      # Trang chủ
└── README.md
```

## 📌 API Reference

### Quản lý người dùng
```javascript
// Đăng ký người dùng mới
registerUser(userData)

// Đăng nhập
loginUser(credentials)

// Cập nhật thông tin
updateProfile(userId, data)
```

### Quản lý khóa học
```javascript
// Thêm khóa học vào giỏ hàng
addToCart(courseId)

// Đăng ký khóa học
enrollCourse(courseId, userId)

// Cập nhật tiến độ
updateProgress(courseId, userId, progress)
```

## 🎨 Nguồn Gốc Layout

### 1. Flexbox Layout
- **Nguồn:** CSS-Tricks - A Complete Guide to Flexbox
- **URL:** https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- **Sử dụng trong:** Navigation, Auth sections

### 2. Grid Layout
- **Nguồn:** CSS-Tricks - A Complete Guide to Grid
- **URL:** https://css-tricks.com/snippets/css/complete-guide-grid/
- **Sử dụng trong:** Course grid, Feature sections

### 3. Card & Timeline Layouts
- Material Design Components
- CodePen inspirations
- Modern UI patterns

## 👥 Đóng Góp

Đóng góp luôn được chào đón! Xem [Contributing Guidelines](CONTRIBUTING.md) để biết thêm chi tiết.

1. Fork dự án
2. Tạo branch mới (`git checkout -b feature/AmazingFeature`)
3. Commit thay đổi (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Mở Pull Request

## 📄 Giấy Phép

Dự án được phân phối dưới giấy phép MIT. Xem [LICENSE](LICENSE) để biết thêm thông tin.

## ✍️ Tác Giả

- **Nguyễn Tiến Sơn** - [GitHub Profile](https://github.com/NTS051205)
- **Co-Author**: Trần Đức Minh - [GitHub Profile](https://github.com/DucMinhh1234567)

### Liên Hệ

- Email: 11230489@st.neu.edu.vn
- Website: [nts.com](https://nts051205.github.io/nguyentienson0512/)
- GitHub: [@NTSON](https://github.com/NTS051205)

## 🙏 Ghi Nhận Đóng Góp

Chân thành cảm ơn:
- Các tác giả của các layout và component được sử dụng
- Cộng đồng open-source
- Giảng viên và sinh viên NEU đã đóng góp ý kiến

---
© 2025 NEU Learning Management System. All Rights Reserved.
