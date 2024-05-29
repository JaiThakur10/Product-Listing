import React from 'react';

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-lg w-full">
        <button onClick={onClose} className="float-right bg-red-500 text-white p-2 rounded-full">&times;</button>
        <img src={product.image} alt={product.title} className="w-full h-64 object-cover mb-4" />
        <h2 className="text-2xl font-semibold mb-2">{product.title}</h2>
        <p className="text-gray-600 mb-4">${product.price}</p>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductModal;
