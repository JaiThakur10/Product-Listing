import React from 'react';

const ProductCard = ({ product, onProductClick }) => {
  return (
    <div className="border-8 border-purple-200 rounded-lg shadow-md hover:shadow-lg hover:shadow-purple-400 transition-shadow duration-300 cursor-pointer overflow-hidden" onClick={() => onProductClick(product)}>
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
        <p className="text-gray-600 mb-2">${product.price}</p>
        <button className="text-primary hover:underline">View Details</button>
      </div>
    </div>
  );
};

export default ProductCard;

