import React, { useState, useEffect } from "react";

// ProductCard Component
const ProductCard = ({ image, name, price }) => {
  return (
    <div className="flex items-center space-x-4">
      <img src={image} alt={name} className="w-16 h-16 object-cover rounded-md" />
      <div>
        <p className="font-semibold text-gray-800">{name}</p>
        <p className="text-green-600">{price}</p>
      </div>
    </div>
  );
};

// ProductSection Component
const ProductSection = ({ title, products, isVisible }) => {
  return (
    <div
      className={`space-y-6 transform transition-opacity duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h2 className="text-lg font-bold text-center">{title}</h2>
      <div className="space-y-4">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

// ProductPage Component
const ProductPage = () => {
  const saleProducts = [
    { image: "/images/mint.jpg", name: "Mint", price: "₹100 - ₹200" },
    { image: "/images/mango.jpg", name: "Mango", price: "₹150 - ₹250" },
    { image: "/images/oyster-mushroom.jpg", name: "Oyster Mushroom 500 gr", price: "₹150 - ₹200" },
    { image: "/images/kiwi.jpg", name: "Kiwi", price: "₹400 - ₹500" },
  ];

  const topSelling = [
    { image: "/images/radish.jpg", name: "Radish 1 pack", price: "₹30 - ₹50" },
    { image: "/images/spring onion.jpg", name: "Spring Onions 1 bunch", price: "₹40 - ₹60" },
    { image: "/images/mango.jpg", name: "Mango", price: "₹150 - ₹250" },
    { image: "/images/avocado.jpg", name: "Avocados 2 Units", price: "₹200 - ₹300" },
  ];

  const recentlyAdded = [
    { image: "/images/spring onion.jpg", name: "Spring Onions 1 bunch", price: "₹40 - ₹60" },
    { image: "/images/mint.jpg", name: "Mint", price: "₹100 - ₹200" },
    { image: "/images/carrots.jpg", name: "Carrots 1 kg", price: "₹40 - ₹80" },
    { image: "/images/mango.jpg", name: "Mango", price: "₹150 - ₹250" },
  ];

  const topRated = [
    { image: "/images/avocado.jpg", name: "Avocados 2 Units", price: "₹200 - ₹300" },
    { image: "/images/bread.jpg", name: "Menissez Mini Pains Bake At Home", price: "₹250 - ₹350" },
    { image: "/images/grapes.jpg", name: "Delicious Grapes", price: "₹120 - ₹200" },
    { image: "/images/radish.jpg", name: "Radish 1 pack", price: "₹30 - ₹50" },
  ];

  const sections = [
    { title: "Sale Products", products: saleProducts },
    { title: "Top Selling", products: topSelling },
    { title: "Recently Added", products: recentlyAdded },
    { title: "Top Rated", products: topRated },
  ];

  const [visibleSections, setVisibleSections] = useState([]);

  // Show sections with a delay
  useEffect(() => {
    sections.forEach((_, index) => {
      setTimeout(() => {
        setVisibleSections((prev) => [...prev, index]);
      }, index * 500); // Adjust the delay between each section (500ms)
    });
  }, []);

  return (
    <div className="container mx-auto p-6 space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {sections.map((section, index) => (
          <ProductSection
            key={index}
            title={section.title}
            products={section.products}
            isVisible={visibleSections.includes(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;

