import React from "react";
import HeroBanner from "../components/HeroBanner";
import OrganicSection from "../components/OrganicSection";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import Services from "./Services";
import Contact from "./Contact";
import ProductPage from "./ProductPage";


const HomePage = () => {
  return (
    <div>
      {/* Hero Banner */}
      <HeroBanner />

      {/* Organic Section */}
      <OrganicSection />
    
      <ProductPage />

      <Services />
      
      {/* Why Choose Us with more space below */}
      <div className="mb-24"> {/* Add a div wrapper to apply the margin */}
        <WhyChooseUs />
      </div>
       
       

      
        
      {/* Testimonials with more space above */}
      <div className="mt-24"> {/* Add a div wrapper to apply the margin */}
        <Testimonials />
      </div>
    </div>
  );
};

export default HomePage;
