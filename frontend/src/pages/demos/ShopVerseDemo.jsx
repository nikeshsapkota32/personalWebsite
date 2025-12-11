import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  HiShoppingCart, HiHeart, HiSearch, HiUser, HiStar,
  HiPlus, HiArrowLeft
} from 'react-icons/hi';
import { Link } from 'react-router-dom';
import './DemoStyles.css';

const ShopVerseDemo = () => {
  const [cart, setCart] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');

  const products = [
    { id: 1, name: 'Wireless Headphones', price: 299, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop', category: 'Electronics', rating: 4.8 },
    { id: 2, name: 'Smart Watch Pro', price: 449, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop', category: 'Electronics', rating: 4.9 },
    { id: 3, name: 'Designer Sneakers', price: 189, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop', category: 'Fashion', rating: 4.7 },
    { id: 4, name: 'Leather Backpack', price: 129, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop', category: 'Fashion', rating: 4.6 },
    { id: 5, name: 'Minimalist Desk Lamp', price: 79, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop', category: 'Home', rating: 4.5 },
    { id: 6, name: 'Coffee Maker Deluxe', price: 199, image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=300&h=300&fit=crop', category: 'Home', rating: 4.8 },
  ];

  const categories = ['All', 'Electronics', 'Fashion', 'Home'];

  const addToCart = (product) => {
    const exists = cart.find(item => item.id === product.id);
    if (exists) {
      setCart(cart.map(item => 
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <motion.div 
      className="demo-page ecommerce-demo"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Back Button */}
      <Link to="/projects" className="demo-back-btn">
        <HiArrowLeft /> Back to Projects
      </Link>

      {/* Demo Header */}
      <div className="demo-header">
        <div className="demo-info">
          <span className="demo-badge">E-Commerce Demo</span>
          <h1>ShopVerse</h1>
          <p>A modern e-commerce experience with real-time cart and smooth animations</p>
        </div>
      </div>

      {/* E-Commerce Interface */}
      <div className="demo-content ecommerce-interface">
        {/* Top Nav */}
        <nav className="shop-nav">
          <div className="shop-logo">
            <span className="gradient-text">Shop</span>Verse
          </div>
          <div className="shop-search">
            <HiSearch />
            <input type="text" placeholder="Search products..." />
          </div>
          <div className="shop-actions">
            <button className="nav-icon"><HiHeart /></button>
            <button className="nav-icon"><HiUser /></button>
            <button className="nav-icon cart-icon">
              <HiShoppingCart />
              {cart.length > 0 && <span className="cart-count">{cart.reduce((a, b) => a + b.qty, 0)}</span>}
            </button>
          </div>
        </nav>

        {/* Hero Banner */}
        <div className="shop-hero">
          <div className="hero-content">
            <span className="hero-badge">New Collection 2025</span>
            <h2>Discover Premium Quality Products</h2>
            <p>Shop the latest trends with up to 40% off on selected items</p>
            <button className="btn btn-primary">Shop Now</button>
          </div>
          <div className="hero-stats">
            <div className="stat"><span>500+</span>Products</div>
            <div className="stat"><span>50K+</span>Customers</div>
            <div className="stat"><span>4.9</span>Rating</div>
          </div>
        </div>

        {/* Categories */}
        <div className="shop-categories">
          {categories.map(cat => (
            <button 
              key={cat}
              className={`category-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="products-grid">
          {filteredProducts.map((product, index) => (
            <motion.div 
              key={product.id}
              className="product-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <button className="wishlist-btn"><HiHeart /></button>
              </div>
              <div className="product-info">
                <span className="product-category">{product.category}</span>
                <h3>{product.name}</h3>
                <div className="product-rating">
                  <HiStar /> {product.rating}
                </div>
                <div className="product-footer">
                  <span className="product-price">${product.price}</span>
                  <motion.button 
                    className="add-to-cart"
                    onClick={() => addToCart(product)}
                    whileTap={{ scale: 0.95 }}
                  >
                    <HiPlus /> Add
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mini Cart */}
        {cart.length > 0 && (
          <motion.div 
            className="mini-cart"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h3><HiShoppingCart /> Cart ({cart.reduce((a, b) => a + b.qty, 0)})</h3>
            <div className="cart-items">
              {cart.map(item => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} />
                  <div className="item-details">
                    <span className="item-name">{item.name}</span>
                    <span className="item-price">${item.price} × {item.qty}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-total">
              <span>Total:</span>
              <span className="total-price">${cart.reduce((a, b) => a + (b.price * b.qty), 0)}</span>
            </div>
            <button className="btn btn-primary checkout-btn">Checkout</button>
          </motion.div>
        )}
      </div>

      {/* Tech Stack */}
      <div className="demo-tech">
        <h3>Built With</h3>
        <div className="tech-tags">
          <span>React</span>
          <span>Node.js</span>
          <span>MongoDB</span>
          <span>Stripe</span>
          <span>Redis</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ShopVerseDemo;
