import React from 'react';

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-purple-200 p-6 rounded-lg max-w-lg w-full shadow-lg relative">
        <button onClick={onClose} className="absolute top-4 right-4 bg-red-500 text-white rounded-full w-8 h-8 focus:outline-none">&times;</button>
        <img src={product.image} alt={product.title} className="w-full h-64 object-cover mb-4 rounded-lg" />
        <h2 className="text-2xl font-semibold mb-2">{product.title}</h2>
        <p className="text-gray-600 mb-4">${product.price}</p>
        <p className="text-gray-700">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductModal;


