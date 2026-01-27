import React from 'react';
import './ProductCard.css';

const ProductCard = () => {
  const image = "https://via.placeholder.com/200x150.png?text=Product";
  const name = "Sản phẩm mẫu";
  const price = "199,000";

  const handleAddToCart = () => {
    alert("sdfsdjf;j");
  };

  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h3 className="product-name">{name}</h3>
      <p className="product-price">{price}₫</p>
      <button className="add-to-cart" onClick={handleAddToCart}>Add to cart</button>
    </div>
  );
};

export default ProductCard;
