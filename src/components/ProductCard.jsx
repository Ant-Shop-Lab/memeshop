import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <article className="product-card">
      <Link to={`/product/${product.id}`} className="product-link">
        <div className="product-image-wrapper">
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
            loading="lazy"
          />
        </div>
        <div className="product-info">
          <h3>{product.name}</h3>
          <p className="product-description">{product.description}</p>
          <div className="product-footer">
            <span className="product-price">${product.price.toFixed(2)}</span>
          </div>
        </div>
      </Link>
      <button
        className="add-to-cart-btn"
        onClick={() => addToCart(product)}
        aria-label={`Add ${product.name} to cart`}
      >
        Add to Cart
      </button>
    </article>
  );
}
