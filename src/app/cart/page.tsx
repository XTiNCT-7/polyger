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
    <div className={`${styles.cartPage} ${styles.container}`}>
      <h1 className={styles.pageTitle}>Your Shopping Cart</h1>
      
      {cartProducts.length === 0 ? (
        <div className={styles.emptyCart}>
          <div className={styles.emptyCartIcon}>🛒</div>
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added any items to your cart yet</p>
          <Link href="/" className={styles.continueShoppingbtn}>
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className={styles.cartContainer}>
          <div className={styles.cartItems}>
            {cartProducts.map(item => (
              <div key={item.id} className={styles.cartItem}>
                <div className={styles.cartItemImage}>
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={40}
                    height={40}
                  />
                </div>
                
                <div className={styles.cartItemDetails}>
                  <h3 className={styles.cartItemName}>{item.name}</h3>
                  <div className={styles.cartItemPrice}>${item.price.toFixed(2)}</div>
                  
                  <div className={styles.cartItemQuantity}>
                    <label htmlFor={`quantity-${item.id}`}>Quantity:</label>
                    <select 
                      id={`quantity-${item.id}`} 
                      className={styles.quantitySelect}
                      defaultValue={item.quantity}
                    >
                      {[...Array(10).keys()].map(i => (
                        <option key={i+1} value={i+1}>{i+1}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className={styles.cartItemSubtotal}>
                    Subtotal: <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                  
                  <button className={styles.removeItembtn}>Remove</button>
                </div>
              </div>
            ))}
          </div>
          
          <div className={styles.cartSummary}>
            <h2 className={styles.summaryTitle}>Order Summary</h2>
            
            <div className={styles.summaryItem}>
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            
            <div className={styles.summaryItem}>
              <span>Shipping:</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            
            <div className={styles.summaryItem}>
              <span>Tax (8%):</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            
            <div className={styles.summaryTotal}>
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            
            <button className={styles.checkoutbtn}>Proceed to Checkout</button>
            
            <div className={styles.continueShopping}>
              <Link href="/" className={styles.continueLink}>
                ← Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}