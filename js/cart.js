// ===== CART SYSTEM =====

class ShoppingCart {
    constructor() {
        this.items = [];
        this.loadCart();
        this.initElements();
        this.attachEventListeners();
        this.updateCartUI();
    }

    initElements() {
        this.cartBtn = document.getElementById('cartFloatBtn');
        this.cartModal = document.getElementById('cartModal');
        this.cartOverlay = document.getElementById('cartOverlay');
        this.cartCloseBtn = document.getElementById('cartCloseBtn');
        this.cartItemsContainer = document.getElementById('cartItems');
        this.cartCount = document.getElementById('cartCount');
        this.subtotalElement = document.getElementById('cartSubtotal');
        this.discountElement = document.getElementById('cartDiscount');
        this.totalElement = document.getElementById('cartTotal');
    }

    attachEventListeners() {
        // Open/Close cart
        this.cartBtn.addEventListener('click', () => this.toggleCart());
        this.cartCloseBtn.addEventListener('click', () => this.closeCart());
        this.cartOverlay.addEventListener('click', () => this.closeCart());

        // Add to cart buttons
        document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const itemData = {
                    id: btn.dataset.id,
                    name: btn.dataset.name,
                    type: btn.dataset.type,
                    price: parseFloat(btn.dataset.price)
                };
                this.addItem(itemData, btn);
            });
        });

        // Checkout button
        document.getElementById('cartCheckoutBtn').addEventListener('click', () => {
            this.checkout();
        });
    }

    addItem(item, button) {
        // Check if item already exists
        const existingItem = this.items.find(i => i.id === item.id);
        
        if (existingItem) {
            // Show already added feedback
            this.showFeedback(button, 'Ya está en el carrito', 'warning');
            return;
        }

        // Add item to cart
        this.items.push(item);
        this.saveCart();
        this.updateCartUI();

        // Visual feedback
        this.showFeedback(button, '✓ Agregado', 'success');
        this.animateCartButton();
    }

    removeItem(itemId) {
        this.items = this.items.filter(item => item.id !== itemId);
        this.saveCart();
        this.updateCartUI();
    }

    clearCart() {
        this.items = [];
        this.saveCart();
        this.updateCartUI();
    }

    calculateSubtotal() {
        return this.items.reduce((sum, item) => sum + item.price, 0);
    }

    calculateDiscount() {
        return this.calculateSubtotal() * 0.20; // 20% discount
    }

    calculateTotal() {
        return this.calculateSubtotal() - this.calculateDiscount();
    }

    updateCartUI() {
        // Update cart count
        const itemCount = this.items.length;
        this.cartCount.textContent = itemCount;
        this.cartCount.style.display = itemCount > 0 ? 'flex' : 'none';

        // Update items list
        if (this.items.length === 0) {
            this.cartItemsContainer.innerHTML = `
                <div class="cart-empty">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="9" cy="21" r="1"/>
                        <circle cx="20" cy="21" r="1"/>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                    </svg>
                    <p>Tu carrito está vacío</p>
                    <p style="font-size: 13px; margin-top: 8px;">Agregá planes o extras para comenzar</p>
                </div>
            `;
        } else {
            this.cartItemsContainer.innerHTML = this.items.map(item => `
                <div class="cart-item">
                    <div class="cart-item-header">
                        <div class="cart-item-info">
                            <h4>${item.name}</h4>
                            <p>${item.type}</p>
                        </div>
                        <button class="cart-item-remove" onclick="cart.removeItem('${item.id}')">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <line x1="18" y1="6" x2="6" y2="18"/>
                                <line x1="6" y1="6" x2="18" y2="18"/>
                            </svg>
                        </button>
                    </div>
                    <div class="cart-item-price">USD ${item.price.toLocaleString()}</div>
                </div>
            `).join('');
        }

        // Update summary
        const subtotal = this.calculateSubtotal();
        const discount = this.calculateDiscount();
        const total = this.calculateTotal();

        this.subtotalElement.textContent = `USD ${subtotal.toLocaleString()}`;
        this.discountElement.textContent = `-USD ${discount.toLocaleString()}`;
        this.totalElement.textContent = `USD ${total.toLocaleString()}`;

        // Update all add-to-cart buttons
        this.updateButtonStates();
    }

    updateButtonStates() {
        document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
            const itemId = btn.dataset.id;
            const isInCart = this.items.some(item => item.id === itemId);
            
            if (isInCart) {
                btn.classList.add('added');
                btn.innerHTML = '<span>✓ En el Carrito</span>';
            } else {
                btn.classList.remove('added');
                btn.innerHTML = '<span>Agregar al Carrito</span>';
            }
        });
    }

    toggleCart() {
        this.cartModal.classList.toggle('active');
        this.cartOverlay.classList.toggle('active');
        document.body.style.overflow = this.cartModal.classList.contains('active') ? 'hidden' : '';
    }

    closeCart() {
        this.cartModal.classList.remove('active');
        this.cartOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    showFeedback(button, message, type) {
        const originalHTML = button.innerHTML;
        button.innerHTML = `<span>${message}</span>`;
        
        if (type === 'success') {
            button.style.background = 'linear-gradient(135deg, #10B981, #059669)';
        } else if (type === 'warning') {
            button.style.background = 'linear-gradient(135deg, #F59E0B, #D97706)';
        }

        setTimeout(() => {
            button.innerHTML = originalHTML;
            button.style.background = '';
            this.updateButtonStates();
        }, 2000);
    }

    animateCartButton() {
        this.cartBtn.style.animation = 'none';
        setTimeout(() => {
            this.cartBtn.style.animation = 'pulse 0.6s ease-out';
        }, 10);
    }

    saveCart() {
        localStorage.setItem('syncCartItems', JSON.stringify(this.items));
    }

    loadCart() {
        const saved = localStorage.getItem('syncCartItems');
        if (saved) {
            this.items = JSON.parse(saved);
        }
    }

    checkout() {
        if (this.items.length === 0) {
            alert('Tu carrito está vacío');
            return;
        }

        // Prepare checkout data
        const itemsList = this.items.map(item => `• ${item.name} (${item.type}): USD ${item.price.toLocaleString()}`).join('\n');
        const subtotal = this.calculateSubtotal();
        const discount = this.calculateDiscount();
        const total = this.calculateTotal();

        const checkoutMessage = `SERVICIOS SELECCIONADOS:\n${itemsList}\n\nRESUMEN:\nSubtotal: USD ${subtotal.toLocaleString()}\nDescuento (20%): -USD ${discount.toLocaleString()}\nTOTAL: USD ${total.toLocaleString()}`;

        // Save checkout message to localStorage
        localStorage.setItem('syncCheckoutMessage', checkoutMessage);
        
        // Redirect to contact form
        window.location.href = 'contacto.html';
    }
}

// Pulse animation for cart button
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.15); }
    }
`;
document.head.appendChild(style);

// Initialize cart when DOM is loaded
let cart;
document.addEventListener('DOMContentLoaded', () => {
    cart = new ShoppingCart();
});
