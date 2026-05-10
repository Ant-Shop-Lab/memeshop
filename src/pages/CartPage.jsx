import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';

export default function CartPage() {
  const { cart, cartTotal, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <main className="cart-page empty-cart">
        <h1>Your Cart</h1>
        <p className="empty-message">Your cart is empty</p>
        <Link to="/" className="continue-shopping-btn">
          Continue Shopping
        </Link>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <h1>Your Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)} items)</h1>
      
      <div className="cart-items">
        {cart.map(product => (
          <CartItem key={product.id} product={product} />
        ))}
      </div>

      <div className="cart-summary">
        <div className="cart-total">
          <span>Total:</span>
          <span className="total-amount">${cartTotal.toFixed(2)}</span>
        </div>
        <button
          className="clear-cart-btn"
          onClick={clearCart}
        >
          Clear Cart
        </button>
        <button className="checkout-btn">
          Checkout
        </button>
      </div>

      <Link to="/" className="continue-shopping-link">
        ← Continue Shopping
      </Link>
    </main>
  );
}
