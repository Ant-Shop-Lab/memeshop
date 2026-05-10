import { useCart } from '../context/CartContext';

export default function CartItem({ product }) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="cart-item">
      <img src={product.image} alt={product.name} className="cart-item-image" />
      <div className="cart-item-details">
        <h3>{product.name}</h3>
        <p className="price">${product.price.toFixed(2)}</p>
        <div className="quantity-controls">
          <button
            onClick={() => updateQuantity(product.id, product.quantity - 1)}
            aria-label="Decrease quantity"
          >
            -
          </button>
          <span>{product.quantity}</span>
          <button
            onClick={() => updateQuantity(product.id, product.quantity + 1)}
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>
      <button
        className="remove-btn"
        onClick={() => removeFromCart(product.id)}
        aria-label={`Remove ${product.name} from cart`}
      >
        ×
      </button>
    </div>
  );
}
