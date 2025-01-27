import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import RegisterPage from "./RegisterPage"; // Import the RegisterPage component

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isRegisterPageOpen, setIsRegisterPageOpen] = useState(false); // Modal state

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:6000/api/v1/user/login",
        { email, password }
      );
      const { token } = response.data;
      localStorage.setItem("authToken", token); // Save token in local storage
      navigate("/dashboard"); // Redirect to dashboard
    } catch (err) {
      setError(err.response?.data?.error || "Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  // Close the modal when the user clicks outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.id === "login-modal-overlay") {
        setIsRegisterPageOpen(false); // Close the register modal if clicked outside
      }
    };

    if (isRegisterPageOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isRegisterPageOpen]);

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center relative overflow-hidden"
      style={{
        backgroundImage:
          "url('https://www.shutterstock.com/image-photo/blurred-background-vibrant-farmers-market-260nw-2541504393.jpg')", // Background image URL
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative bg-white p-12 rounded-2xl shadow-2xl w-full max-w-lg transform transition-transform duration-500 hover:scale-105 border-8 border-green-600 shadow-lg shadow-green-600/40 hover:shadow-2xl hover:shadow-green-600/70 transition duration-300 ease-in-out">
        <h2 className="text-4xl font-bold text-center text-green-500 mb-8 italic tracking-wide">
          Farm<span className="text-5xl text-green-700">2</span>Door
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition duration-300"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition duration-300"
              required
            />
          </div>

          {error && (
            <p className="text-sm text-red-500 font-medium">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition duration-300 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          Don’t have an account?{" "}
          <button
            onClick={() => setIsRegisterPageOpen(true)} // Open modal on click
            className="text-green-500 font-medium hover:underline hover:text-green-600 transition duration-200"
          >
            Sign up here!
          </button>
        </p>
      </div>

      {/* Register Modal */}
      {isRegisterPageOpen && (
        <div
          id="login-modal-overlay"
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        >
          <RegisterPage
            isOpen={isRegisterPageOpen}
            onClose={() => setIsRegisterPageOpen(false)} // Close modal on action
          />
        </div>
      )}
    </div>
  );
};

export default LoginPage;
