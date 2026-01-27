import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';

const products = [
  {
    image: 'https://via.placeholder.com/200x150.png?text=Product+1',
    name: 'Sản phẩm 1',
    price: '100,000',
  },
  {
    image: 'https://via.placeholder.com/200x150.png?text=Product+2',
    name: 'Sản phẩm 2',
    price: '200,000',
  },
  {
    image: 'https://via.placeholder.com/200x150.png?text=Product+3',
    name: 'Sản phẩm 3',
    price: '300,000',
  },
  {
    image: 'https://via.placeholder.com/200x150.png?text=Product+4',
    name: 'Sản phẩm 4',
    price: '400,000',
  },
  {
    image: 'https://via.placeholder.com/200x150.png?text=Product+5',
    name: 'Sản phẩm 5',
    price: '500,000',
  },
  {
    image: 'https://via.placeholder.com/200x150.png?text=Product+6',
    name: 'Sản phẩm 6',
    price: '600,000',
  },
];

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map((p, idx) => (
        <ProductCard key={idx} image={p.image} name={p.name} price={p.price} />
      ))}
    </div>
  );
};

export default ProductList;
