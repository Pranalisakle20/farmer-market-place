import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const [loading, setLoading] = useState(false);

  const handleAddToCart = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert(`${product.name} has been added to the cart!`);
    }, 1500);
  };

  return (
    <div className="border p-4 rounded-lg shadow-lg bg-white hover:shadow-xl transform hover:scale-105 transition-all duration-300">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          onError={(e) => (e.target.src = '/images/fallback-image.jpg')}
          className="w-full h-64 object-cover rounded-lg"
        />
        <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
        <p className="text-gray-500">{product.description}</p>
      </Link>

      <div className="flex items-center mt-2">
        <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
        <span className="text-gray-500 ml-2">(120 reviews)</span>
      </div>

      <div className="flex justify-between items-center mt-4">
        <span className="text-lg font-bold text-green-600">
          ₹{product.price.toLocaleString()}
        </span>
        <button
          onClick={handleAddToCart}
          disabled={loading}
          aria-label={`Add ${product.name} to cart`}
          className={`bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 ${loading && 'opacity-50'}`}
        >
          {loading ? 'Adding...' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
