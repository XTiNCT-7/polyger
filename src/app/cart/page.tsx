import Link from 'next/link';
import Image from 'next/image';
import { dummyProducts } from '@/utils/constants';
import styles from './cart.module.css';

// Cart item type
interface CartItem {
  productId: string;
  quantity: number;
}

// Dummy cart data
const cartItems: CartItem[] = [
  { productId: '1', quantity: 2 },
  { productId: '3', quantity: 1 },
  { productId: '4', quantity: 3 },
];

export default function CartPage() {
  // Get full product details for cart items
  const cartProducts = cartItems.map(item => {
    const product = dummyProducts.find(p => p.id === item.productId);
    return {
      ...product,
      quantity: item.quantity,
    };
  }).filter(Boolean); // Filter out undefined products

  // Calculate total
  const subtotal = cartProducts.reduce(
    (sum, item) => sum + (item.price * item.quantity), 0
  );
  const tax = subtotal * 0.08;
  const shipping = subtotal > 0 ? 5.99 : 0;
  const total = subtotal + tax + shipping;

  return (
    <div className="cart-page container">
      <h1 className="page-title">Your Shopping Cart</h1>
      
      {cartProducts.length === 0 ? (
        <div className="empty-cart">
          <div className="empty-cart-icon">🛒</div>
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added any items to your cart yet</p>
          <Link href="/" className="continue-shopping-btn">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="cart-container">
          <div className="cart-items">
            {cartProducts.map(item => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-image">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={120}
                    height={120}
                  />
                </div>
                
                <div className="cart-item-details">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <div className="cart-item-price">${item.price.toFixed(2)}</div>
                  
                  <div className="cart-item-quantity">
                    <label htmlFor={`quantity-${item.id}`}>Quantity:</label>
                    <select 
                      id={`quantity-${item.id}`} 
                      className="quantity-select"
                      defaultValue={item.quantity}
                    >
                      {[...Array(10).keys()].map(i => (
                        <option key={i+1} value={i+1}>{i+1}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="cart-item-subtotal">
                    Subtotal: <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                  
                  <button className="remove-item-btn">Remove</button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="cart-summary">
            <h2 className="summary-title">Order Summary</h2>
            
            <div className="summary-item">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            
            <div className="summary-item">
              <span>Shipping:</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            
            <div className="summary-item">
              <span>Tax (8%):</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            
            <div className="summary-total">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            
            <button className="checkout-btn">Proceed to Checkout</button>
            
            <div className="continue-shopping">
              <Link href="/" className="continue-link">
                ← Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}