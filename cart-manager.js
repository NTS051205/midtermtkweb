class CartManager {
    constructor() {
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
            return true;
        } catch (error) {
            console.error('Error adding to cart:', error);
            return false;
        }
    }

    removeFromCart(courseId) {
        try {
            this.cartItems = this.cartItems.filter(item => parseInt(item.id) !== courseId);
            this.saveCart();
            this.updateCartCount();
            return true;
        } catch (error) {
            console.error('Error removing from cart:', error);
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
    }

    getTotalPrice() {
        return this.cartItems.reduce((total, item) => {
            const price = parseFloat(item.price.replace(/[^0-9.-]+/g, ''));
            return total + (isNaN(price) ? 0 : price);
        }, 0);
    }
}

// Export the CartManager class
window.CartManager = CartManager; 