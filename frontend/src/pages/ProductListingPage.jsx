// import React, { useEffect, useState } from 'react';
// import ProductCard from '../components/ProductCard';



// const ProductListingPage = () => {
//   const [products, setProducts] = useState([]);
//   const [totalPages, setTotalPages] = useState(0);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [loading, setLoading] = useState(true);
//   const [category, setCategory] = useState('');
//   const categories = ['Fruits', 'Vegetables', 'Dry Fruits', 'Dairy', 'Grains']; // Hardcoded categories

//   useEffect(() => {
//     const getProducts = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch(
//           `http://localhost:4000/api/v1/products?page=${currentPage}&limit=10&category=${category}`
//         );
//         const data = await response.json();
//         setProducts(data.products);
//         setTotalPages(data.totalPages);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     getProducts();
//   }, [currentPage, category]);

//   const handlePagination = (page) => {
//     if (page > 0 && page <= totalPages) {
//       setCurrentPage(page);
//     }
//   };

//   const handleCategoryChange = (e) => {
//     setCategory(e.target.value);
//     setCurrentPage(1); // Reset to page 1 whenever the category changes
//   };

//   return (
    
//     <div className="bg-gray-50 min-h-screen py-8">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Filter Section */}
//         <div className="bg-white border rounded-lg p-6 shadow-md hover:shadow-lg transition mb-6">
//           <h3 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2">Filter by Category</h3>
//           <select
//             id="category"
//             value={category}
//             onChange={handleCategoryChange}
//             className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
//           >
//             <option value="">All Categories</option>
//             {categories.map((cat, index) => (
//               <option key={index} value={cat}>
//                 {cat}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Products Section */}
//         <div>
//           <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Products</h2>

//           {loading ? (
//             <div className="flex justify-center items-center">
//               <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-green-500"></div>
//             </div>
//           ) : (
//             <>
//               {products.length > 0 ? (
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                   {products.map((product) => (
//                     <ProductCard key={product._id} product={product} />
//                   ))}
//                 </div>
//               ) : (
//                 <p className="text-center text-gray-500 mt-6">
//                   No products found for the selected category.
//                 </p>
//               )}

//               {/* Pagination */}
//               {/* <div className="mt-8 flex justify-center items-center gap-4">
//                 <button
//                   onClick={() => handlePagination(currentPage - 1)}
//                   className={`px-5 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition ${
//                     currentPage === 1 && 'opacity-50 cursor-not-allowed'
//                   }`}
//                   disabled={currentPage === 1}
//                 >
//                   Previous
//                 </button>
//                 <span className="px-4 py-2 text-gray-700 font-semibold">
//                   Page {currentPage} of {totalPages}
//                 </span>
//                 <button
//                   onClick={() => handlePagination(currentPage + 1)}
//                   className={`px-5 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition ${
//                     currentPage === totalPages && 'opacity-50 cursor-not-allowed'
//                   }`}
//                   disabled={currentPage === totalPages}
//                 >
//                   Next
//                 </button>
//               </div> */}
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductListingPage;











// import React from "react";
// import ProductCard from "../components/ProductCard";  // Import ProductCard

// const ProductListingPage = () => {
//   const products = [
//     { id: 1, name: "Fresh Apples", description: "Sweet and crunchy apples.", price: 120, image: "/images/apple.jpg" }, 
//     { id: 2, name: "Turmeric", description: "High-quality turmeric with vibrant color and rich flavor.", price: 1000, image: "/images/turmeric.jpg" }, 
//     { id: 3, name: "Juicy Oranges", description: "Citrus-packed oranges, perfect for juice.", price: 150, image: "/images/orange.jpg" },
//     { id: 4, name: "Cherry Tomatoes", description: "Sweet and juicy cherry tomatoes.", price: 160, image: "/images/tomato.jpg" },
//     { id: 5, name: "Spring Onion", description: "Fresh, crisp spring onions for a mild, zesty flavor.", price: 60, image: "/images/spring onion.jpg" },
//     { id: 6, name: "Raw Honey", description: "Unfiltered organic honey.", price: 700, image: "/images/honey.jpg" },
//     { id: 7, name: "Spinach", description: "Fresh, nutrient-packed spinach for a healthy diet.", price: 60, image: "/images/spinach.jpg" },
//     { id: 8, name: "Organic Milk", description: "Creamy and fresh organic milk.", price: 80, image: "/images/milk.jpg" },
//     { id: 9, name: "Carrots", description: "Crunchy and sweet organic carrots.", price: 50, image: "/images/carrots.jpg" },
//     { id: 10, name: "Red Peppers", description: "Crisp and sweet red bell peppers.", price: 120, image: "/images/pepper.jpg" },
//     { id: 11, name: "Strawberries", description: "Fresh and juicy strawberries.", price: 300, image: "/images/Strawberries.jpg" },
//     { id: 12, name: "Cashew", description: "A perfect healthy snack.", price: 900, image: "/images/cashew nut.jpg" },
//   ];

//   return (
//     <div>
//       <ProductCard />

//       {/* Featured Products */}
//       <div className="container mx-auto p-6">
//         <h1 className="text-4xl font-bold text-center mb-8 text-green-600 hover:text-green-800 transition-colors duration-300">
//           Featured Products
//         </h1>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {products.map((product) => (
//             <div
//               key={product.id}
//               className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl"
//             >
//               <ProductCard product={product} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductListingPage;





import React from 'react';
import ProductCard from '../components/ProductCard';

const ProductListingPage = () => {
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

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Products</h1>
      
        <h1 className="text-4xl font-bold text-center mb-8 text-green-600 hover:text-green-800 transition-colors duration-300">
          Featured Products
        </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductListingPage;
