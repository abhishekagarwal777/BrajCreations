import React from 'react';
import './footer.css';
import { FaInstagram } from 'react-icons/fa'; // Directly import the specific icon
const Footer = () => {
  const handleInstagramClick = () => {
    window.location.href = 'https://www.instagram.com/bhajman_radhe_govind/';
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-contact">
          <p>Site: Abhishek Agarwal</p>
          <p>Address: Bangalore</p>
          <p>Contact: Abhishek Agarwal</p>
          <p>Email: theagarwalfoundation@gmail.com</p>
        </div>
        <div className="footer-instagram">
          <FaInstagram
            className="instagram-icon"
            onMouseEnter={(e) => {
              e.target.style.animation = 'spin 1s linear infinite';
            }}
            onMouseLeave={(e) => {
              e.target.style.animation = 'none';
            }}
            onClick={handleInstagramClick}
          />
        </div>
       
      </div>
    </footer>
  );
};

export default Footer;
