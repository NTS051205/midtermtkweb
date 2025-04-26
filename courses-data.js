// Course data
const courses = [
    {
        id: 1,
        title: "Ngôn ngữ C",
        description: "Giúp làm quen với ngôn ngữ lập trình C",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
        price: "1.000.000 đ",
        duration: "19 bài giảng",
        category: "development",
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
        category: "development",
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
        duration: "13 bài giảng",
        category: "development",
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
        title: 'Web Development Fundamentals',
        description: 'Learn HTML, CSS, and JavaScript from scratch',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
        price: '$99',
        duration: '12 weeks',
        category: 'development',
        tags: ['HTML', 'CSS', 'JavaScript']
    },
    {
        id: 5,
        title: 'UI/UX Design Essentials',
        description: 'Master the principles of user interface design',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5',
        price: '$129',
        duration: '8 weeks',
        category: 'design',
        tags: ['UI', 'UX', 'Design']
    },
    {
        id: 6,
        title: 'Digital Marketing Strategy',
        description: 'Learn to create effective digital marketing campaigns',
        image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a',
        price: '$149',
        duration: '10 weeks',
        category: 'marketing',
        tags: ['Marketing', 'Social Media']
    },
    {
        id: 7,
        title: 'Business Analytics',
        description: 'Master data analysis for business decisions',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
        price: '$199',
        duration: '14 weeks',
        category: 'business',
        tags: ['Analytics', 'Business']
    }
]; 

function updateCartCount() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartCountElements = document.querySelectorAll('.cart-count');
    cartCountElements.forEach(element => {
        element.textContent = cartItems.length.toString();
    });
}

function addToCart(courseId) {
    // Lấy thông tin khóa học từ mảng courses
    const course = courses.find(c => c.id === parseInt(courseId));
    if (!course) return;

    // Lấy giỏ hàng hiện tại
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Kiểm tra xem khóa học đã có trong giỏ hàng chưa
    const existingCourse = cartItems.find(item => parseInt(item.id) === courseId);

    if (!existingCourse) {
        // Thêm khóa học mới vào giỏ hàng với đầy đủ thông tin
        cartItems.push({
            id: course.id,
            title: course.title,
            image: course.image,
            price: course.price
        });

        // Lưu giỏ hàng mới vào localStorage
        localStorage.setItem('cartItems', JSON.stringify(cartItems));

        // Cập nhật số lượng hiển thị
        updateCartCount();
        return true;
    }
    return false;
}

function removeFromCart(courseId) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems = cartItems.filter(item => parseInt(item.id) !== courseId);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    updateCartCount();
    location.reload();
}

function displayCartItems() {
    const cartContent = document.getElementById('cartContent');
    if (!cartContent) return;

    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

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

    let totalPrice = 0;
    const itemsHtml = cartItems.map(item => {
        const price = parseFloat(item.price.replace('$', ''));
        totalPrice += price;

        return `
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
        `;
    }).join('');

    cartContent.innerHTML = `
        <div class="cart-items">
            ${itemsHtml}
        </div>
        <div class="cart-summary">
            <div class="cart-total">
                <span>Tổng cộng:</span>
                <span>$${totalPrice.toFixed(2)}</span>
            </div>
            <button class="checkout-btn" onclick="proceedToCheckout()">
                Tiến hành thanh toán
            </button>
        </div>
    `;
}

// Khởi tạo khi trang được tải
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    displayCartItems();
}); 