import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar.js';
import './Dashboard.css';

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="dashboard-header">
        <h1>Welcome to Your Dashboard</h1>
        <p>Your one-stop destination to explore our amazing product collection, services, and more!</p>
      </div>
      <div className="dashboard-sections">
        <div className="dashboard-card">
          <img src="/images/furniture1.jpeg" alt="Product" />
          <h2>Our Products</h2>
          <p>Explore our exclusive range of furniture products designed for your comfort and style.</p>
          <button onClick={() => navigate("/product")}>View Products</button>
        </div>
        <div className="dashboard-card">
          <img src="/images/furniture2.jpg" alt="Services" />
          <h2>Our Services</h2>
          <p>Experience top-notch services tailored to meet all your furniture needs.</p>
          <button onClick={() => navigate("/about")}>Explore Services</button>
        </div>
        <div className="dashboard-card">
          <img src="/images/furniture3.jpg" alt="Contact" />
          <h2>Contact Us</h2>
          <p>Have any questions? Get in touch with our friendly support team anytime.</p>
          <button onClick={() => navigate("/home")}>Contact Us</button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
