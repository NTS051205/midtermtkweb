# 🎯 Dijkstra Algorithm & Maze Game

[![GitHub stars](https://img.shields.io/github/stars/DucMinhh1234567/Dijkstra-visualizer-2.0?style=social)](https://github.com/DucMinhh1234567/Dijkstra-visualizer-2.0/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/DucMinhh1234567/Dijkstra-visualizer-2.0?style=social)](https://github.com/DucMinhh1234567/Dijkstra-visualizer-2.0/network/members)
[![GitHub license](https://img.shields.io/github/license/DucMinhh1234567/Dijkstra-visualizer-2.0)](https://github.com/DucMinhh1234567/Dijkstra-visualizer-2.0/blob/main/LICENSE)

Một ứng dụng web tương tác để trực quan hóa thuật toán Dijkstra và chơi game mê cung. Dự án này giúp người dùng hiểu rõ hơn về cách thuật toán Dijkstra hoạt động thông qua việc trực quan hóa từng bước thực hiện.

## 📑 Mục Lục

- [🔗 Links](#-links)
- [✨ Tính Năng Chính](#-tính-năng-chính)
  - [🎨 Trực quan hóa thuật toán Dijkstra](#1--trực-quan-hóa-thuật-toán-dijkstra)
  - [🎮 Game Mê Cung](#2--game-mê-cung)
  - [🛠️ Sandbox Đường Đi Ngắn Nhất](#3--sandbox-đường-đi-ngắn-nhất)
- [💻 Cài Đặt](#-cài-đặt)
- [🎮 Cách Sử Dụng](#-cách-sử-dụng)
  - [Trực quan hóa Dijkstra](#trực-quan-hóa-dijkstra)
  - [Game Mê Cung](#game-mê-cung)
  - [Sandbox](#sandbox)
- [📁 Cấu Trúc Dự Án](#-cấu-trúc-dự-án)
- [🛠️ Công Nghệ Sử Dụng](#-công-nghệ-sử-dụng)
- [📄 Giấy Phép](#-giấy-phép)

## 🔗 Links

- 🌐 [Demo Website](https://ducminhh1234567.github.io/Dijkstra-visualizer-2.0/)
- 📦 [GitHub Repository](https://github.com/DucMinhh1234567/Dijkstra-visualizer-2.0)
- 👤 [GitHub Profile](https://github.com/DucMinhh1234567)

## ✨ Tính Năng Chính

### 1. 🎨 Trực quan hóa thuật toán Dijkstra
- 📊 Hiển thị đồ thị tương tác với các đỉnh và cạnh có trọng số
- 🎯 Trực quan hóa từng bước của thuật toán Dijkstra
- ⚙️ Chế độ chạy tự động và thủ công (từng bước)
- 🎮 Điều chỉnh tốc độ animation
- 📝 Hiển thị code thuật toán với highlight từng bước
- 📊 Hiển thị mảng khoảng cách và trạng thái đã thăm
- 📋 Log chi tiết các bước thực hiện

### 2. 🎮 Game Mê Cung
- 🎲 Tạo mê cung ngẫu nhiên
- 🎯 Đặt điểm bắt đầu và điểm đích
- 🧱 Thêm tường và bom
- ✏️ Vẽ đường đi
- 💡 Hiển thị lời giải
- 📊 Thống kê số bước đi, số bom gặp phải, điểm số

### 3. 🛠️ Sandbox Đường Đi Ngắn Nhất
- ➕ Thêm/xóa đỉnh và cạnh
- ⚖️ Đặt trọng số cho cạnh
- 🚀 Chạy thuật toán Dijkstra
- 📊 Hiển thị kết quả chi tiết

## 💻 Cài Đặt

1. Clone repository:
```bash
git clone https://github.com/DucMinhh1234567/Dijkstra-visualizer-2.0.git
```

2. Mở file `index.html` trong trình duyệt web hiện đại

## 🎮 Cách Sử Dụng

### Trực quan hóa Dijkstra
1. Mở file `index.html`
2. Sử dụng các nút điều khiển:
   - 🆕 "Tạo Đồ Thị Mới": Tạo đồ thị ngẫu nhiên
   - ▶️ "Chạy Thuật Toán": Chạy thuật toán Dijkstra
   - ⚡ "Tốc độ": Điều chỉnh tốc độ animation
   - 🔄 "Chế độ": Chọn chế độ chạy (Tự động/Thủ công)
3. Click vào các đỉnh để chọn điểm bắt đầu (xanh lá) và điểm kết thúc (đỏ)

### Game Mê Cung
1. Chuyển sang tab "Maze Game"
2. Sử dụng các công cụ:
   - 🎯 Đặt điểm bắt đầu và điểm đích
   - 🧱 Thêm tường và bom
   - ✏️ Vẽ đường đi
3. Sử dụng các nút thao tác:
   - 🎲 Tạo mê cung ngẫu nhiên
   - 💡 Hiện lời giải
   - 🗑️ Xóa đường đi/mê cung

### Sandbox
1. Chuyển sang tab "Shortest Path Sandbox"
2. Sử dụng các công cụ:
   - ➕ Thêm đỉnh: Click vào khung vẽ
   - 🔗 Thêm cạnh: Kéo từ đỉnh này sang đỉnh khác
   - 🎯 Đặt điểm bắt đầu: Click đúp vào đỉnh
   - 🎯 Đặt điểm kết thúc: Click phải vào đỉnh

## 📁 Cấu Trúc Dự Án

```
├── index.html          # Trang chính
├── maze.html          # Trang game mê cung
├── graph.js           # Xử lý đồ thị và thuật toán Dijkstra
├── maze.js            # Logic game mê cung
├── sandbox.js         # Xử lý sandbox
├── code.js            # Code mẫu và hiển thị
├── maze.css           # Styles cho game mê cung
└── styles.css         # Styles chung
```

## 🛠️ Công Nghệ Sử Dụng

- 💻 **Frontend**:
  - HTML5
  - CSS3
  - JavaScript (ES6+)
  - D3.js v7 cho visualization
- 🎨 **UI/UX**:
  - Responsive Design
  - Interactive Visualizations
  - Modern UI Components
- 🚀 **Performance**:
  - RequestAnimationFrame cho animations
  - Optimized Rendering
  - Efficient Data Structures

## 📄 Giấy Phép

Dự án này được cấp phép theo giấy phép MIT - xem file [LICENSE](LICENSE) để biết thêm chi tiết. 
