import React from 'react';
import { useParams } from 'react-router-dom';

const Products = () => {
  const { id } = useParams();

     const products = [
        { id: 1, name: "Fresh Apples", description: "Sweet and crunchy apples.", price: 120, image: "/images/apple.jpg" }, 
        { id: 2, name: "Turmeric", description: "High-quality turmeric with vibrant color and rich flavor.", price: 1000, image: "/images/turmeric.jpg" }, 
        { id: 3, name: "Juicy Oranges", description: "Citrus-packed oranges, perfect for juice.", price: 150, image: "/images/orange.jpg" },
        { id: 4, name: "Cherry Tomatoes", description: "Sweet and juicy cherry tomatoes.", price: 160, image: "/images/tomato.jpg" },
        { id: 5, name: "Spring Onion", description: "Fresh, crisp spring onions for a mild, zesty flavor.", price: 60, image: "/images/spring onion.jpg" },
        { id: 6, name: "Raw Honey", description: "Unfiltered organic honey.", price: 700, image: "/images/honey.jpg" },
        { id: 7, name: "Spinach", description: "Fresh, nutrient-packed spinach for a healthy diet.", price: 60, image: "/images/spinach.jpg" },
        { id: 8, name: "Organic Milk", description: "Creamy and fresh organic milk.", price: 80, image: "/images/milk.jpg" },
        { id: 9, name: "Carrots", description: "Crunchy and sweet organic carrots.", price: 50, image: "/images/carrots.jpg" },
        { id: 10, name: "Red Peppers", description: "Crisp and sweet red bell peppers.", price: 120, image: "/images/pepper.jpg" },
        { id: 11, name: "Strawberries", description: "Fresh and juicy strawberries.", price: 300, image: "/images/Strawberries.jpg" },
        { id: 12, name: "Cashew", description: "A perfect healthy snack.", price: 900, image: "/images/cashew nut.jpg" },
      ];
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return <h1 className="text-center mt-10 text-red-500">Product not found!</h1>;
  }

  return (
    <div className="container mx-auto p-6">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-auto object-cover rounded-lg"
      />
      <h1 className="text-4xl font-bold mt-4">{product.name}</h1>
      <p className="text-gray-600 mt-2">{product.description}</p>
      <p className="text-green-600 font-bold text-2xl mt-4">
        ₹{product.price.toLocaleString()}
      </p>
    </div>
  );
};

export default Products;
