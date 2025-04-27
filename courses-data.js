// Course data
const courses = [
    {
        id: 1,
        title: "Ngôn ngữ C",
        description: "Giúp làm quen với ngôn ngữ lập trình C",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
        price: "1.000.000 đ",
        duration: "19 bài giảng",
        category: "Phát triển",
        tags: ["Lập trình", "C", "Cơ bản"],
        details: {
            startDate: "9/5/2024",
            schedule: "Thứ 2, Thứ 5, Thứ 7",
            time: "19h - 21h",
            instructor: "Đội ngũ NEU Learning"
        }
    },
    {
        id: 2,
        title: "Cơ sở dữ liệu",
        description: "Cung cấp kiến thức và ứng dụng thực tiễn về cơ sở dữ liệu",
        image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d",
        price: "1.000.000 đ",
        duration: "11 bài giảng",
        category: "Phát triển",
        tags: ["Database", "SQL", "Thực hành"],
        details: {
            startDate: "6/5/2024",
            schedule: "Thứ 2, Thứ 4, Thứ 6",
            time: "21h - 23h",
            instructor: "Đội ngũ NEU Learning"
        }
    },
    {
        id: 3,
        title: "Kiến trúc máy tính",
        description: "Giới thiệu các khái niệm cốt lõi về kiến trúc máy tính, bao gồm cấu trúc phần cứng, nguyên lý hoạt động",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
        price: "1.000.000 đ",
        duration: "19 bài giảng",
        category: "Phát triển",
        tags: ["Phần cứng", "Kiến trúc", "Cơ bản"],
        details: {
            startDate: "4/5/2024",
            schedule: "Thứ 3, Thứ 5, Thứ 7",
            time: "21h - 23h",
            instructor: "Đội ngũ NEU Learning"
        }
    },
    {
        id: 4,
        title: 'Thiết kế WEB',
        description: "Học HTML, CSS và JavaScript từ cơ bản",
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
        price: "1.000.000 đ",
        duration: "17 bài giảng",
        category: "Phát triển",
        tags: ["HTML", "CSS", "JavaScript"],
        details: {
            startDate: "9/5/2024",
            schedule: "Thứ 2, Thứ 4, Thứ 6",
            time: "21h - 23h",
            instructor: "Đội ngũ NEU Learning"
        }
    },
    {
        id: 5,
        title: 'Thiết kế UX/UI',
        description: ' Làm chủ các nguyên lý thiết kế giao diện người dùng',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5',
        price: "1.000.000 đ",
        duration: "16 bài giảng",
        category: "Thiết kế",
        tags: ["Design", "UI/UX"],
        details: {
            startDate: "3/5/2024",
            schedule: "Thứ 3, Thứ 5, Thứ 7",
            time: "19h - 21h",
            instructor: "Đội ngũ NEU Learning"
        }
    },
    {
        id: 6,
        title: 'Digital Marketing',
        description: ' Học cách tạo các chiến dịch tiếp thị kỹ thuật số hiệu quả',
        image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a',
        price: "1.000.000 đ",
        duration: "12 bài giảng",
        category: "Tiếp thị",
        tags: ["Marketing", "Business"],
        details: {
            startDate: "9/5/2024",
            schedule: "Thứ 2, Thứ 4, Chủ nhật",
            time: "21h - 23h",
            instructor: "Đội ngũ NEU Learning"
        }
    },
    {
        id: 7,
        title: 'Business Analytics',
        description: 'Làm chủ phân tích dữ liệu cho quyết định kinh doanh',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
        price: "1.000.000 đ",
        duration: "15 bài giảng",
        category: "Kinh doanh",
        tags: ["BA/PO", "Use story"],
        details: {
            startDate: "10/5/2024",
            schedule: "Thứ 3, Thứ 5, Thứ 7",
            time: "19h - 21h",
            instructor: "Đội ngũ NEU Learning"
        }
    }
]; 

// Course validation
function validateCourse(course) {
    const requiredFields = ['id', 'title', 'description', 'image', 'price', 'duration', 'category', 'tags', 'details'];
    const missingFields = requiredFields.filter(field => !course[field]);
    
    if (missingFields.length > 0) {
        console.error(`Course validation failed. Missing fields: ${missingFields.join(', ')}`);
        return false;
    }
    
    if (!Array.isArray(course.tags)) {
        console.error('Course tags must be an array');
        return false;
    }
    
    if (typeof course.details !== 'object') {
        console.error('Course details must be an object');
        return false;
    }
    
    return true;
}

// Initialize cart manager
let cartManager;

function initializeCart() {
    cartManager = new CartManager();
}

function addToCart(courseId) {
    const course = courses.find(c => c.id === parseInt(courseId));
    if (!course || !validateCourse(course)) {
        console.error('Invalid course data');
        return false;
    }
    
    return cartManager.addToCart(courseId, course);
}

function removeFromCart(courseId) {
    if (cartManager.removeFromCart(courseId)) {
        location.reload();
    }
}

function displayCartItems() {
    const cartContent = document.getElementById('cartContent');
    if (!cartContent) return;

    const cartItems = cartManager.getCartItems();

    if (cartItems.length === 0) {
        cartContent.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>Giỏ hàng của bạn đang trống</p>
                <a href="courses.html" class="continue-shopping">Tiếp tục mua sắm</a>
            </div>
        `;
        return;
    }

    const totalPrice = cartManager.getTotalPrice();
    const itemsHtml = cartItems.map(item => `
        <div class="cart-item" data-id="${item.id}">
            <img src="${item.image}" alt="${item.title}" class="cart-item-image">
            <div class="cart-item-details">
                <h3 class="cart-item-title">${item.title}</h3>
                <p class="cart-item-price">${item.price}</p>
            </div>
            <button class="remove-item" onclick="removeFromCart(${item.id})">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');

    cartContent.innerHTML = `
        <div class="cart-items">
            ${itemsHtml}
        </div>
        <div class="cart-summary">
            <div class="cart-total">
                <span>Tổng cộng:</span>
                <span>${totalPrice.toLocaleString('vi-VN')} đ</span>
            </div>
            <button class="checkout-btn" onclick="proceedToCheckout()">
                Tiến hành thanh toán
            </button>
        </div>
    `;
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    initializeCart();
    displayCartItems();
}); 