import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import './ProductPage.css';

const ProductPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="product-page not-found">
        <h2>Товар не найден</h2>
        <Link to="/" className="back-link">Вернуться на главную</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="product-page">
      <div className="container">
        <Link to="/" className="back-link">← Назад к товарам</Link>
        
        <div className="product-detail">
          <div className="product-image-wrapper">
            <img src={product.image} alt={product.name} className="product-image" />
          </div>
          
          <div className="product-info">
            <span className="product-category">{product.category}</span>
            <h1 className="product-title">{product.name}</h1>
            <p className="product-price">{product.price} </p>
            <p className="product-description">{product.description}</p>
            
            <button className="add-to-cart-btn" onClick={handleAddToCart}>
              Добавить в корзину
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
