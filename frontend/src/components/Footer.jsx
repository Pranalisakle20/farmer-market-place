// import React, { useState } from 'react';
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

// const Footer = () => {
//   // State to toggle visibility of contact details
//   const [isContactVisible, setIsContactVisible] = useState(false);

//   const handleToggleContactInfo = () => {
//     setIsContactVisible(!isContactVisible); // Toggle visibility
//   };

//   return (
//     <footer className="bg-gradient-to-b from-green-50 via-white to-green-100 text-gray-800 py-12">
//       <div className="container mx-auto text-center space-y-8">
//         {/* Contact Us Section */}
//         <div>
//           <button
//             onClick={handleToggleContactInfo}
//             className="text-green-600 hover:underline text-2xl font-bold"
//           >
//             {isContactVisible ? 'Hide Contact Information' : 'Contact Us'}
//           </button>

//           {/* Conditional rendering of contact info */}
//           {isContactVisible && (
//             <div className="mt-6 text-lg font-light text-gray-600">
//               <p>For inquiries, feel free to reach out to us anytime!</p>
//               <p className="mt-2">Email: contact@farmerbazaarapp.com</p>
//               <p className="mt-2">Phone: +1 (555) 123-4567</p>
//             </div>
//           )}
//         </div>

//         {/* Follow Us Section */}
//         <div className="border-t border-gray-300 py-6">
//           <h3 className="text-2xl font-semibold mb-4 text-green-700">Follow Us On:</h3>
//           <div className="flex justify-center space-x-8">
//             <a
//               href="https://facebook.com"
//               className="text-gray-600 hover:text-blue-600 transition-colors duration-300 transform hover:scale-125"
//             >
//               <FaFacebook size={32} />
//             </a>
//             <a
//               href="https://twitter.com"
//               className="text-gray-600 hover:text-blue-400 transition-colors duration-300 transform hover:scale-125"
//             >
//               <FaTwitter size={32} />
//             </a>
//             <a
//               href="https://instagram.com"
//               className="text-gray-600 hover:text-pink-500 transition-colors duration-300 transform hover:scale-125"
//             >
//               <FaInstagram size={32} />
//             </a>
//             <a
//               href="https://linkedin.com"
//               className="text-gray-600 hover:text-blue-700 transition-colors duration-300 transform hover:scale-125"
//             >
//               <FaLinkedin size={32} />
//             </a>
//           </div>
//         </div>

//         {/* Categories Section */}
//         <div className="border-t border-gray-300 py-6">
//           <h3 className="text-2xl font-semibold mb-4 text-green-700">Explore Our Categories</h3>
//           <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-lg font-light text-gray-700">
//             <li><a href="#" className="hover:text-green-600 transition-colors">Crops</a></li>
//             <li><a href="#" className="hover:text-green-600 transition-colors">Vegetable</a></li>
//             <li><a href="#" className="hover:text-green-600 transition-colors">Fruits</a></li>
//             <li><a href="#" className="hover:text-green-600 transition-colors">Nursery & Plants</a></li>
//             <li><a href="#" className="hover:text-green-600 transition-colors">Organic</a></li>
//             <li><a href="#" className="hover:text-green-600 transition-colors">Spices</a></li>
//             <li><a href="#" className="hover:text-green-600 transition-colors">Dry Fruits</a></li>
//             <li><a href="#" className="hover:text-green-600 transition-colors">Seeds</a></li>
//             <li><a href="#" className="hover:text-green-600 transition-colors">Animals</a></li>
//             <li><a href="#" className="hover:text-green-600 transition-colors">Grass</a></li>
//             <li><a href="#" className="hover:text-green-600 transition-colors">Machinery</a></li>
//             <li><a href="#" className="hover:text-green-600 transition-colors">Farming Tools</a></li>
//           </ul>
//         </div>

//         {/* Footer Information */}
//         <div className="text-sm text-gray-500">
//           Privacy Policy | Terms Of Use | Copyright 2025 © farmerbazaarapp.com | All Rights Reserved
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

































import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  // State to toggle visibility of contact details
  const [isContactVisible, setIsContactVisible] = useState(false);

  const handleToggleContactInfo = () => {
    setIsContactVisible(!isContactVisible); // Toggle visibility
  };

  return (
    <footer
      className="text-white py-12"
      style={{
        backgroundImage: `url('https://i.pinimg.com/originals/40/73/d4/4073d4378fad895860ee2285fedf3a74.jpg')`,
        backgroundSize: 'cover', // Ensures the image covers the footer
        backgroundPosition: 'center center', // Ensures the image is centered
        backgroundRepeat: 'no-repeat', // Prevents image repetition
      }}
    >
      <div className="bg-black bg-opacity-60 py-12">
        <div className="container mx-auto text-center space-y-8">
          {/* Contact Us Section */}
          <div>
            <button
              onClick={handleToggleContactInfo}
              className="text-yellow-400 hover:underline text-2xl font-bold"
            >
              {isContactVisible ? 'Hide Contact Information' : 'Contact Us'}
            </button>

            {/* Conditional rendering of contact info */}
            {isContactVisible && (
              <div className="mt-6 text-lg font-light">
                <p>For inquiries, feel free to reach out to us anytime!</p>
                <p className="mt-2">Email: contact@farmerbazaarapp.com</p>
                <p className="mt-2">Phone: +1 (555) 123-4567</p>
              </div>
            )}
          </div>

          {/* Follow Us Section */}
          <div className="border-t border-gray-300 py-6">
            <h3 className="text-2xl font-semibold mb-4 text-yellow-300">Follow Us On:</h3>
            <div className="flex justify-center space-x-8">
              <a
                href="https://facebook.com"
                className="text-gray-200 hover:text-blue-600 transition-colors duration-300 transform hover:scale-125"
              >
                <FaFacebook size={32} />
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-200 hover:text-blue-400 transition-colors duration-300 transform hover:scale-125"
              >
                <FaTwitter size={32} />
              </a>
              <a
                href="https://instagram.com"
                className="text-gray-200 hover:text-pink-500 transition-colors duration-300 transform hover:scale-125"
              >
                <FaInstagram size={32} />
              </a>
              <a
                href="https://linkedin.com"
                className="text-gray-200 hover:text-blue-700 transition-colors duration-300 transform hover:scale-125"
              >
                <FaLinkedin size={32} />
              </a>
            </div>
          </div>

          {/* Categories Section */}
          <div className="border-t border-gray-300 py-6">
            <h3 className="text-2xl font-semibold mb-4 text-yellow-300">Explore Our Categories</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-lg font-light">
              <li>
                <a href="#" className="hover:text-green-300 transition-colors">
                  Crops
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-300 transition-colors">
                  Vegetable
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-300 transition-colors">
                  Fruits
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-300 transition-colors">
                  Nursery & Plants
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-300 transition-colors">
                  Organic
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-300 transition-colors">
                  Spices
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-300 transition-colors">
                  Dry Fruits
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-300 transition-colors">
                  Seeds
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-300 transition-colors">
                  Animals
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-300 transition-colors">
                  Grass
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-300 transition-colors">
                  Machinery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-300 transition-colors">
                  Farming Tools
                </a>
              </li>
            </ul>
          </div>

          {/* Footer Information */}
          <div>
            <p className="text-sm text-gray-300 mt-4">
              Privacy Policy | Terms Of Use | Copyright 2025 © farmerbazaarapp.com | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
