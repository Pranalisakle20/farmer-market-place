import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Contact from './pages/Contact';
import ProductListingPage from './pages/ProductListingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProductPage from './pages/ProductPage';
import Products from './pages/Products';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/product/:id" element={<Products />} />

        <Route path="/login" element={<LoginPage />} /> {/* Route for login */}
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/Product" element={<ProductPage />} />
        <Route path="/product/:id" element={<ProductPage />} />

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;








