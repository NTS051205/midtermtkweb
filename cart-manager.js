class CartManager {
    constructor() {
        this.cartContent = document.getElementById('cartContent');
        this.cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        this.updateCartCount();
    }

    updateCartCount() {
        const cartCountElements = document.querySelectorAll('.cart-count');
        cartCountElements.forEach(element => {
            element.textContent = this.cartItems.length.toString();
        });
    }

    addToCart(courseId, course) {
        try {
            if (!course) {
                throw new Error('Course information is required');
            }

            const existingCourse = this.cartItems.find(item => parseInt(item.id) === courseId);
            if (existingCourse) {
                this.showNotification('Khóa học đã có trong giỏ hàng!', 'warning');
                return false;
            }

            this.cartItems.push({
                id: course.id,
                title: course.title,
                image: course.image,
                price: course.price
            });

            this.saveCart();
            this.updateCartCount();
            this.showNotification('Đã thêm khóa học vào giỏ hàng!', 'success');
            return true;
        } catch (error) {
            console.error('Error adding to cart:', error);
            this.showNotification('Có lỗi xảy ra khi thêm vào giỏ hàng!', 'error');
            return false;
        }
    }

    removeFromCart(courseId) {
        try {
            this.cartItems = this.cartItems.filter(item => parseInt(item.id) !== courseId);
            this.saveCart();
            this.updateCartCount();
            this.showNotification('Đã xóa khóa học khỏi giỏ hàng!', 'success');
            return true;
        } catch (error) {
            console.error('Error removing from cart:', error);
            this.showNotification('Có lỗi xảy ra khi xóa khỏi giỏ hàng!', 'error');
            return false;
        }
    }

    saveCart() {
        try {
            localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
        } catch (error) {
            console.error('Error saving cart:', error);
        }
    }

    getCartItems() {
        return this.cartItems;
    }

    clearCart() {
        this.cartItems = [];
        this.saveCart();
        this.updateCartCount();
        this.showNotification('Đã xóa tất cả khóa học khỏi giỏ hàng!', 'success');
    }

    getTotalPrice() {
        return this.cartItems.reduce((total, item) => {
            const price = parseFloat(item.price.replace(/[^0-9.-]+/g, ''));
            return total + (isNaN(price) ? 0 : price);
        }, 0);
    }

    showNotification(message, type = 'info') {
        // Tạo thẻ div cho thông báo
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas ${this.getIconByType(type)}"></i>
                <span>${message}</span>
            </div>
        `;

        // Thêm vào body
        document.body.appendChild(notification);

        // Thêm CSS cho thông báo
        const style = document.createElement('style');
        style.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                padding: 15px 25px;
                border-radius: 8px;
                background: white;
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                z-index: 1000;
                animation: slideIn 0.3s ease-out;
                display: flex;
                align-items: center;
                gap: 10px;
                color: #111 !important;
            }

            .notification span {
                color: #111 !important;
            }

            .notification.success {
                border-left: 4px solid #28a745;
            }

            .notification.warning {
                border-left: 4px solid #ffc107;
            }

            .notification.error {
                border-left: 4px solid #dc3545;
            }

            .notification.info {
                border-left: 4px solid #17a2b8;
            }

            .notification i {
                font-size: 1.2rem;
            }

            .notification.success i {
                color: #28a745;
            }

            .notification.warning i {
                color: #ffc107;
            }

            .notification.error i {
                color: #dc3545;
            }

            .notification.info i {
                color: #17a2b8;
            }

            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }

            @keyframes slideOut {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);

        // Tự động xóa sau 3 giây
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease-out';
            setTimeout(() => {
                notification.remove();
                style.remove();
            }, 300);
        }, 3000);
    }

    getIconByType(type) {
        switch(type) {
            case 'success':
                return 'fa-check-circle';
            case 'warning':
                return 'fa-exclamation-circle';
            case 'error':
                return 'fa-times-circle';
            default:
                return 'fa-info-circle';
        }
    }

    updateCartDisplay() {
        if (this.cartItems.length === 0) {
            this.showEmptyCart();
        } else {
            this.showCartItems();
        }
        this.updateCartCount();
    }

    showEmptyCart() {
        this.cartContent.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>Giỏ hàng của bạn đang trống</p>
                <a href="courses.html" class="continue-shopping">Tiếp tục mua sắm</a>
            </div>
        `;
    }

    showCartItems() {
        const itemsHtml = this.cartItems.map(item => {
            const course = courses.find(c => c.id === parseInt(item.id));
            if (!course) return '';

            return `
                <div class="cart-item" data-id="${course.id}">
                    <img src="${course.image}" alt="${course.title}" class="cart-item-image">
                    <div class="cart-item-details">
                        <h3 class="cart-item-title">${course.title}</h3>
                        <p class="cart-item-price">${course.price}</p>
                    </div>
                    <button class="remove-item">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `;
        }).join('');

        const total = this.calculateTotal();

        this.cartContent.innerHTML = `
            <div class="cart-items">
                ${itemsHtml}
            </div>
            <div class="cart-summary">
                <div class="cart-total">
                    <span>Tổng cộng:</span>
                    <span>${this.formatCurrency(total)}</span>
                </div>
                <button class="checkout-btn">
                    Tiến hành thanh toán
                </button>
            </div>
        `;
    }

    calculateTotal() {
        return this.cartItems.reduce((sum, item) => {
            const course = courses.find(c => c.id === parseInt(item.id));
            if (!course) return sum;
            const price = parseInt(course.price.replace(/\D/g, ''));
            return sum + (isNaN(price) ? 0 : price);
        }, 0);
    }

    formatCurrency(value) {
        return value.toLocaleString('vi-VN') + ' ₫';
    }

    checkLoginBeforeAdd(courseId, course) {
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        if (!isLoggedIn) {
            window.location.href = 'login.html';
            return false;
        }
        return this.addToCart(courseId, course);
    }

    confirmRemove(courseId) {
        if (confirm('Bạn có chắc chắn muốn xóa khóa học này khỏi giỏ hàng?')) {
            this.removeFromCart(courseId);
        }
    }
}

// Export the CartManager class
window.CartManager = CartManager; 