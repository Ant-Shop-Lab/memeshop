import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <main className="home-page">
      <section className="hero-section">
        <h1>Welcome to MemeShop</h1>
        <p>Your one-stop shop for the dankest meme merchandise</p>
      </section>

      <section className="filter-section">
        <h2>Filter by Category</h2>
        <div className="category-filters" role="group" aria-label="Product categories">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
              aria-pressed={selectedCategory === category}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </section>

      <section className="products-section">
        <h2>Products ({filteredProducts.length})</h2>
        <div className="products-grid">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
