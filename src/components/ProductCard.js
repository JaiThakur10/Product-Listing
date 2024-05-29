import React from 'react';

const ProductCard = ({ product, onProductClick }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md hover:shadow-lg transition" onClick={() => onProductClick(product)}>
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4" />
      <h2 className="text-lg font-semibold">{product.title}</h2>
      <p className="text-gray-600">${product.price}</p>
    </div>
  );
};

export default ProductCard;
