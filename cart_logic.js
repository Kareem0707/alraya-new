
// --- Shopping Cart Logic ---

let cart = JSON.parse(localStorage.getItem('alraya_cart')) || [];

// Update cart badge on load
window.addEventListener('DOMContentLoaded', () => {
    updateCartBadge();
});

function updateCartBadge() {
    const badge = document.getElementById('cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    if (totalItems > 0) {
        badge.style.display = 'block';
        badge.innerText = totalItems;
    } else {
        badge.style.display = 'none';
    }
}

// Modal State
let currentModalQuantity = 1;
let currentModalProduct = null;
let currentModalOptions = {}; // Stores selected variant/options

function incrementModalQuantity() {
    currentModalQuantity++;
    document.getElementById('modal-quantity').innerText = currentModalQuantity;
}

function decrementModalQuantity() {
    if (currentModalQuantity > 1) {
        currentModalQuantity--;
        document.getElementById('modal-quantity').innerText = currentModalQuantity;
    }
}

// Override or Hook into openProduct to reset state
// We need to modify the existing openProduct function or add hooks.
// Since I can't easily hook, I will modify openProduct in a separate edit to:
// 1. Set currentModalProduct = product
// 2. Set currentModalQuantity = 1
// 3. Reset currentModalOptions = {}

function addToCartFromModal() {
    if (!currentModalProduct) return;

    // Construct Cart Item
    // If product has variants, we need to ensure one is selected or handle defaults.
    // The current logic in openProduct updates the price and potentially styling for variants.
    // We need a way to capture the "Selected" variant.

    // In the existing openProduct logic (which I need to check), 
    // when a variant button is clicked, it updates the visual state.
    // We should harness that.

    // Let's assume for now currentModalOptions is updated by the variant click handlers I will add/modify.

    // Generate a unique key for the item based on ID + Options
    const optionsString = JSON.stringify(currentModalOptions);

    // Check if item exists in cart
    const existingItemIndex = cart.findIndex(item => item.id === currentModalProduct.id && JSON.stringify(item.options) === optionsString);

    if (existingItemIndex > -1) {
        cart[existingItemIndex].quantity += currentModalQuantity;
    } else {
        const modalPriceEl = document.getElementById('modal-price');
        cart.push({
            id: currentModalProduct.id,
            name: currentModalProduct.name,
            price: modalPriceEl.getAttribute('data-cart-price') || modalPriceEl.innerText, // Capture the base/variant price robustly
            image: currentModalProduct.image,
            quantity: currentModalQuantity,
            // If options are empty but product has variants, maybe we should capture the 'label'? 
            // The price update logic in openProduct sets the price. 
            // We need to store WHAT variant was selected to display it in the cart.
            options: { ...currentModalOptions }
        });
    }

    saveCart();
    updateCartBadge();
    closeModal();
    showToast(currentLang === 'ar' ? 'تمت إضافة المنتج للسلة بنجاح' : 'Product added to cart!');
}

function saveCart() {
    localStorage.setItem('alraya_cart', JSON.stringify(cart));
}

function showCart() {
    const list = document.getElementById('cart-items');
    const cartSection = document.getElementById('cart-section');
    const productsSection = document.getElementById('products-section');
    const services = document.getElementById('services');
    const hero = document.querySelector('.hero');
    const coverFrame = document.getElementById('cover-frame-section');

    const cartOverlay = document.getElementById('cart-overlay');

    if (cartOverlay) cartOverlay.classList.add('active');
    cartSection.classList.add('drawer-open');

    // Make sure cart items are scrollable inside
    list.style.maxHeight = 'calc(100vh - 250px)';
    list.style.overflowY = 'auto';
    list.style.paddingRight = '10px';

    if (cart.length === 0) {
        list.innerHTML = '<div style="text-align: center; color: #fff; grid-column: 1/-1; padding: 2rem;">Your cart is empty.</div>';
        document.getElementById('cart-total-items').innerText = '0';
        return;
    }

    list.innerHTML = cart.map((item, index) => {
        // Format options string
        let optionsDisplay = '';
        if (item.options && Object.keys(item.options).length > 0) {
            // If options has 'label' (from single variant) or other keys
            optionsDisplay = Object.values(item.options).join(', ');
        }

        return `
        <div class="cart-item" style="display: flex; gap: 0.5rem; justify-content: space-between; align-items: center; background: rgba(255,255,255,0.05); padding: 0.8rem; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);">
            <div style="width: 60px; height: 60px; background: url('${item.image}') center/cover; border-radius: 5px; flex-shrink: 0;"></div>
            
            <div style="flex-grow: 1; min-width: 0;">
                <h4 style="color: #fff; margin: 0 0 0.3rem 0; font-size: 0.95rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${item.name}</h4>
                <div style="color: var(--text-muted); font-size: 0.8rem; margin-bottom: 0.3rem;">${optionsDisplay}</div>
                <div style="color: var(--accent-gold); font-weight: bold; font-size: 0.9rem;">${item.price}</div>
            </div>

            <div style="display: flex; align-items: center; gap: 0.5rem; flex-shrink: 0;">
                <button onclick="updateCartItem(${index}, -1)" style="background: rgba(255,255,255,0.1); border: none; color: #fff; width: 28px; height: 28px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center;">-</button>
                <span style="color: #fff; min-width: 15px; text-align: center; font-size: 0.9rem;">${item.quantity}</span>
                <button onclick="updateCartItem(${index}, 1)" style="background: rgba(255,255,255,0.1); border: none; color: #fff; width: 28px; height: 28px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center;">+</button>
            </div>

            <button onclick="removeCartItem(${index})" style="background: none; border: none; color: #ff5555; cursor: pointer; padding: 0.5rem; flex-shrink: 0;">
                <span class="material-icons-outlined" style="font-size: 1.2rem;">delete</span>
            </button>
        </div>
        `;
    }).join('');

    // Compute prices
    let subtotal = 0;
    cart.forEach(item => {
        let cleanPrice = item.price.toString().replace(/[^\d.]/g, '');
        let val = parseFloat(cleanPrice);
        if (!isNaN(val)) {
            subtotal += val * item.quantity;
        }
    });

    document.getElementById('cart-total-items').innerText = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPriceEl = document.getElementById('cart-total-price');
    if (totalPriceEl) totalPriceEl.innerText = subtotal.toLocaleString() + ' L.E';

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function hideCart() {
    const cartSection = document.getElementById('cart-section');
    const cartOverlay = document.getElementById('cart-overlay');

    if (cartSection) cartSection.classList.remove('drawer-open');
    if (cartOverlay) cartOverlay.classList.remove('active');
}

function updateCartItem(index, change) {
    if (cart[index]) {
        cart[index].quantity += change;
        if (cart[index].quantity < 1) cart[index].quantity = 1;
        saveCart();
        updateCartBadge();
        showCart(); // Re-render
    }
}

function removeCartItem(index) {
    cart.splice(index, 1);
    saveCart();
    updateCartBadge();
    showCart();
}

function checkoutWhatsApp() {
    if (cart.length === 0) return;

    let message = "Hello, I would like to place an order:\n\n";
    cart.forEach(item => {
        let opts = '';
        if (item.options && Object.keys(item.options).length > 0) {
            opts = ` (${Object.values(item.options).join(', ')})`;
        }
        message += `- ${item.name}${opts}\n  Quantity: ${item.quantity}\n  Price: ${item.price}\n\n`;
    });

    message += "Please confirm availability and total price.";

    const url = `https://wa.me/${getContactPhoneForWA()}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}
