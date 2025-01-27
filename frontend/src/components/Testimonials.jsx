// import React from "react";

// const testimonials = [
//   {
//     id: 1,
//     name: "Alexa",
//     title: "Fresh Design",
//     image: "data:image/jpeg;base64,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",
//     rating: 5,
//     quote:
//       "Instead of asking how factory farms can prevent infections that originate in the environment, we should be asking how they can prevent infections that...",
//   },
//   {
//     id: 2,
//     name: "ABC",
//     title: "Fresh Design",
//     image: "https://media.istockphoto.com/id/163067728/photo/happy-woman-working.jpg?s=612x612&w=0&k=20&c=RlBDxZXWs4T0fq8963dJP_1h8FUpH0vFT-JVZn9cjRk=",
//     rating: 5,
//     quote:
//       "Consectetur adipiscing elit. Integer nunc viverra laoreet est. Porta pretium metus aliquam eget maecenas.",
//   },
//   {
//     id: 3,
//     name: "Sara Smith",
//     title: "Fresh Design",
//     image: "https://cdn.pixabay.com/photo/2024/09/24/15/20/ai-generated-9071825_1280.jpg",
//     rating: 5,
//     quote:
//       "Instead of asking how factory farms can prevent infections that originate in the environment, we should be asking how they can prevent infections that...",
//   },
// ];

// const Testimonials = () => {
//   return (
//     <section className="bg-gray-50 py-16">
//       <div className="container mx-auto text-center">
//         <p className="text-green-600 uppercase tracking-widest font-medium">
//           Our Testimonials
//         </p>
//         <h2 className="text-4xl font-bold text-gray-800 my-4">
//           Hear What Our Global Clients Say
//         </h2>
//         <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
//           {testimonials.map((testimonial) => (
//             <div
//               key={testimonial.id}
//               className="bg-white p-6 shadow-lg rounded-lg"
//             >
//               <div className="flex items-center mb-4">
//                 <div className="text-yellow-400 text-lg">
//                   {"★".repeat(testimonial.rating)}
//                 </div>
//               </div>
//               <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
//               <div className="flex items-center">
//                 <img
//                   src={testimonial.image}
//                   alt={testimonial.name}
//                   className="w-12 h-12 rounded-full mr-4"
//                 />
//                 <div>
//                   <p className="font-bold text-gray-800">{testimonial.name}</p>
//                   <p className="text-green-600 text-sm">{testimonial.title}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;














// import React from "react";
// import Slider from "react-slick";
// import { Link } from "react-router-dom";

// // Import slick-carousel CSS for slider styling
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


// const Testimonials = () => {
//   // Slider settings
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: true, // Adds left/right arrows
//     pauseOnHover: true, // Pauses autoplay when hovering
//   };

//   // Slider data (could be fetched from an API or database)
//   const slides = [
//     {
//       image: "https://i0.wp.com/freelancian.co.za/wp-content/uploads/2023/10/how-to-make-money-with-farming-in-south-africa.jpg?fit=900%2C514&ssl=1",
     
//     },
//     {
//       image: "https://img.freepik.com/premium-photo/vegetable-farmer-market-counter-colorful-various-fresh-organic_666746-1590.jpg",
//       heading: "A Basket Full of Goodness",
//       subheading: "Buy 2 items and get 50% off on the second. Healthy deals for your loved ones!",
//       link: "/shop",
//     },
//     {
//       image: "https://static.vecteezy.com/system/resources/previews/023/558/185/non_2x/vegetable-farmer-market-counter-colorful-various-fresh-organic-healthy-vegetables-at-grocery-store-healthy-natural-food-concept-generative-ai-photo.jpg",
//       heading: "From Our Farm to Your Table",
//       subheading: "Save 20% on eco-friendly, locally sourced goodness. Shop with care, eat with joy!",
//       link: "/shop",
//     },
//   ];

//   return (
//     <section className="relative">
//       <Slider {...settings}>
//         {slides.map((slide, index) => (
//           <div key={index} className="relative">
//             <img
//               src={slide.image}
//               alt={`Slide ${index + 1}`}
//               className="w-full h-[700px] sm:h-[900px] object-cover" // Adjust height for responsiveness
//             />
//             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
//               <h2 className="text-4xl font-bold mb-4">{slide.heading}</h2>
//               <p className="text-lg mb-6">{slide.subheading}</p>
//               <Link
//                 to={slide.link}
//                 className="bg-green-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-green-600 transition duration-300"
//               >
//                 Shop Now
//               </Link>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </section>
//   );
// };

// export default Testimonials;






































import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Import core components
import { Pagination } from "swiper/modules"; // Correct import for Pagination module

import "swiper/css"; // Import core Swiper styles
import "swiper/css/pagination"; // Import Pagination module styles

const testimonials = [
  {
    id: 1,
    name: "Sharon Gunther",
    title: "Fresh Design",
    image: "",
    quote:
      "Instead of asking how factory farms can prevent infections that originate in the environment, we should be asking how they can prevent infections that originate on factory farms.",
  },
  {
    id: 2,
    name: "John Doe",
    title: "Happy Client",
    image: "/images/farmer2.jpg",
    quote:
      "This service has revolutionized our farming practices. The fresh designs and thoughtful planning have truly made a difference.",
  },
  {
    id: 3,
    name: "Alice Smith",
    title: "Organic Farmer",
    image: "/images/farmer3.jpg",
    quote:
      "Thanks to the innovative designs and sustainable practices, our yield has increased significantly.",
  },
];

const Testimonials = () => {
  return (
    <section
      className="relative bg-cover bg-center py-16 overflow-hidden"
      style={{
        backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlDl2jcwzyl9tP6mxe8OhImM7DjPGmm3ClLMCmkjmnPga9Pf8J4U0UtpgW8gwIGYReHCU&usqp=CAU')", // Background image URL
      }}
    >
      {/* Overlay for background */}
      <div
        className="absolute inset-0 k opacity-40" // Darker overlay for better text contrast
      ></div>

      {/* Side Images */}
      {/* <img
        src="https://w7.pngwing.com/pngs/259/289/png-transparent-farmers-market-sticker-fruit-food-farmer-farmers-market-sticker-fruit-thumbnail.png"
        alt="Farmer Image Left"
        className="absolute top-30 left-[-1px] w-40 h-70 rounded-lg shadow-lg transform rotate-[-20deg]"
      /> */}
      {/* <img
        src="https://www.aldenestatesofjefferson.com/wp-content/uploads/sites/63/2019/08/GettyImages-671270196-1-600x511.jpg"
        alt="Farmer Image Right"
        className="absolute top-30 right-[-10px] w-60 h-60 rounded-lg shadow-lg transform rotate-[10deg]"
      />
      <img
        src="https://demo2.themelexus.com/agrile/wp-content/uploads/2024/11/testimonial-img5.jpg"
        alt="Farmer Image Left Bottom"
        className="absolute bottom-10 left-[-0px] w-32 h-40 rounded-lg shadow-lg transform rotate-[-15deg]"
      />
      <img
        src="/images/farmer1.jpg"
        alt="Farmer Image Right Bottom"
        className="absolute bottom-16 right-[-80px] w-32 h-32 rounded-lg shadow-lg transform rotate-[15deg]"
      /> */}

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Heading */}
        <p className="text-green-600 uppercase font-semibold tracking-widest">
          Our Testimonials
        </p>
        <h2 className="text-4xl font-bold text my-4"> {/* Change text color to white */}
          Hear What Our Global Clients Say
        </h2>

        {/* Swiper Slider */}
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          className="mt-8"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className=" p-8 rounded-lg shadow-lg relative flex flex-col items-center">
                {/* Floating Image */}
                <div className="absolute -top-16 left-10 transform rotate-[-15deg]">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-32 h-32 rounded-lg shadow-md"
                  />
                </div>

                {/* Decorative Leaves */}
                <div className="absolute -top-16 left-36 leaf">
                  <img
                    src="/images/leaf.png" // Ensure a valid leaf image path
                    alt="leaf decoration"
                    className="w-16 h-16"
                  />
                </div>

                {/* Testimonial Content */}
                <div className="relative z-10 mt-16">
                <p className="text-black-600 font-extrabold italic mb-7">
  "{testimonial.quote}"
</p>

                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-green-500 italic mb-6">{testimonial.title}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Adding animation to leaves */}
      <style>
        {`
          @keyframes sway {
            0%, 100% {
              transform: rotate(0deg);
            }
            50% {
              transform: rotate(5deg);
            }
          }
          .leaf {
            animation: sway 2s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Testimonials;





















// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import "swiper/css"; // Import Swiper styles
// import "swiper/css/pagination"; // Import pagination styles
// import "swiper/css/navigation"; // Import navigation styles

// const testimonials = [
//   {
//     id: 1,
//     image: "https://randomuser.me/api/portraits/men/1.jpg",  // Replace with actual base64 image string or image URL
//     name: "John Doe",
//     title: "Great Experience",
//     rating: 5,
//     quote: "This is the best product I’ve ever used. Highly recommended!"
//   },
//   {
//     id: 2,
//     image: "https://randomuser.me/api/portraits/women/1.jpg",  // Replace with actual base64 image string or image URL
//     name: "Jane Smith",
//     title: "Fantastic Service",
//     rating: 4,
//     quote: "Customer service was top-notch and the product exceeded my expectations."
//   },
//   {
//     id: 3,
//     image: "https://randomuser.me/api/portraits/men/2.jpg",  // Replace with actual base64 image string or image URL
//     name: "Robert Brown",
//     title: "Excellent Quality",
//     rating: 5,
//     quote: "The quality of the product is amazing. I’ll definitely be a returning customer!"
//   },
//   {
//     id: 4,
//     image: "https://randomuser.me/api/portraits/women/2.jpg", // Replace with actual base64 image string or image URL
//     name: "Emma White",
//     title: "Very Satisfied",
//     rating: 4,
//     quote: "I’ve been using this service for months now and it never disappoints. Totally worth the investment!"
//   },
//   {
//     id: 5,
//     image: "https://randomuser.me/api/portraits/men/3.jpg", // Replace with actual base64 image string or image URL
//     name: "Alex Green",
//     title: "Incredible Value",
//     rating: 5,
//     quote: "Best value for money I've found. Their customer support is also top-tier!"
//   },
//   {
//     id: 6,
//     image: "https://randomuser.me/api/portraits/women/3.jpg", // Replace with actual base64 image string or image URL
//     name: "Sophie Lewis",
//     title: "Highly Recommend",
//     rating: 5,
//     quote: "A truly exceptional experience. I would definitely recommend it to anyone."
//   },
//   {
//     id: 7,
//     image: "https://randomuser.me/api/portraits/men/4.jpg", // Replace with actual base64 image string or image URL
//     name: "James King",
//     title: "Superb Quality",
//     rating: 4,
//     quote: "The quality exceeded my expectations, and the delivery was prompt. Great service."
//   },
//   {
//     id: 8,
//     image: "https://randomuser.me/api/portraits/women/4.jpg", // Replace with actual base64 image string or image URL
//     name: "Olivia Johnson",
//     title: "Outstanding Performance",
//     rating: 5,
//     quote: "It’s rare to find a product that works as well as advertised. I’m very impressed!"
//   }
// ];

// const TestimonialSection = () => {
//   return (
//     <section className="bg-gray-50 py-16">
//       <div className="container mx-auto text-center">
//         <p className="text-green-600 uppercase tracking-widest font-medium">
//           Our Testimonials
//         </p>
//         <h2 className="text-4xl font-bold text-gray-800 my-4">
//           Hear What Our Global Clients Say
//         </h2>
        
//         {/* Swiper Component */}
//         <Swiper
//           spaceBetween={50} // Space between slides
//           slidesPerView={1} // Number of slides to show at once
//           loop={true} // Loop through slides
//           breakpoints={{
//             768: {
//               slidesPerView: 2, // Show 2 slides on medium and large screens
//             },
//             1024: {
//               slidesPerView: 3, // Show 3 slides on larger screens
//             },
//           }}
//           pagination={{ clickable: true }} // Enable pagination
//           navigation={true} // Enable navigation buttons
//         >
//           {testimonials.map((testimonial) => (
//             <SwiperSlide key={testimonial.id}>
//               <div className="bg-white p-6 shadow-lg rounded-lg">
//                 <div className="flex items-center mb-4">
//                   <div className="text-yellow-400 text-lg">
//                     {"★".repeat(testimonial.rating)} {/* Display stars based on rating */}
//                   </div>
//                 </div>
//                 <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
//                 <div className="flex items-center">
//                   <img
//                     src={testimonial.image}
//                     alt={testimonial.name}
//                     className="w-12 h-12 rounded-full mr-4"
//                   />
//                   <div>
//                     <p className="font-bold text-gray-800">{testimonial.name}</p>
//                     <p className="text-green-600 text-sm">{testimonial.title}</p>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default TestimonialSection;














// import React from "react";
// import Slider from "react-slick";
// import { Link } from "react-router-dom";

// // Import slick-carousel CSS for slider styling
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const HTestimonialSection = () => {
//   // Slider settings
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: true, // Adds left/right arrows
//     pauseOnHover: true, // Pauses autoplay when hovering
//   };

//   // Slider data (could be fetched from an API or database)
//   const slides = [
//     {
//         id: 1,
//         image: "https://randomuser.me/api/portraits/men/1.jpg",  // Replace with actual base64 image string or image URL
//         name: "John Doe",
//         title: "Great Experience",
//         rating: 5,
//         quote: "This is the best product I’ve ever used. Highly recommended!"
//       },
//       {
//         id: 2,
//         image: "https://randomuser.me/api/portraits/women/1.jpg",  // Replace with actual base64 image string or image URL
//         name: "Jane Smith",
//         title: "Fantastic Service",
//         rating: 4,
//         quote: "Customer service was top-notch and the product exceeded my expectations."
//       },
//       {
//         id: 3,
//         image: "https://randomuser.me/api/portraits/men/2.jpg",  // Replace with actual base64 image string or image URL
//         name: "Robert Brown",
//         title: "Excellent Quality",
//         rating: 5,
//         quote: "The quality of the product is amazing. I’ll definitely be a returning customer!"
//       },
//       {
//         id: 4,
//         image: "https://randomuser.me/api/portraits/women/2.jpg", // Replace with actual base64 image string or image URL
//         name: "Emma White",
//         title: "Very Satisfied",
//         rating: 4,
//         quote: "I’ve been using this service for months now and it never disappoints. Totally worth the investment!"
//       },
//       {
//         id: 5,
//         image: "https://randomuser.me/api/portraits/men/3.jpg", // Replace with actual base64 image string or image URL
//         name: "Alex Green",
//         title: "Incredible Value",
//         rating: 5,
//         quote: "Best value for money I've found. Their customer support is also top-tier!"
//       },
//       {
//         id: 6,
//         image: "https://randomuser.me/api/portraits/women/3.jpg", // Replace with actual base64 image string or image URL
//         name: "Sophie Lewis",
//         title: "Highly Recommend",
//         rating: 5,
//         quote: "A truly exceptional experience. I would definitely recommend it to anyone."
//       },
//       {
//         id: 7,
//         image: "https://randomuser.me/api/portraits/men/4.jpg", // Replace with actual base64 image string or image URL
//         name: "James King",
//         title: "Superb Quality",
//         rating: 4,
//         quote: "The quality exceeded my expectations, and the delivery was prompt. Great service."
//       },
//       {
//         id: 8,
//         image: "https://randomuser.me/api/portraits/women/4.jpg", // Replace with actual base64 image string or image URL
//         name: "Olivia Johnson",
//         title: "Outstanding Performance",
//         rating: 5,
//         quote: "It’s rare to find a product that works as well as advertised. I’m very impressed!"
//       }
//     ];
    
//   return (
//     <section className="relative">
//       <Slider {...settings}>
//         {slides.map((slide, index) => (
//           <div key={index} className="relative">
//             <img
//               src={slide.image}
//               alt={`Slide ${index + 1}`}
//               className="w-full h-[500px] sm:h-[400px] object-cover" // Adjust height for responsiveness
//             />
//             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
//               <h2 className="text-4xl font-bold mb-4">{slide.heading}</h2>
//               <p className="text-lg mb-6">{slide.subheading}</p>
//               <Link
//                 to={slide.link}
//                 className="bg-green-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-green-600 transition duration-300"
//               >
//                 Shop Now
//               </Link>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </section>
//   );
// };
// export default TestimonialSection;
















