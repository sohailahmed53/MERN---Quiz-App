// FrontPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './FrontPage.css';

const FrontPage = () => {
  return (
    <div className="frontpage-container">
      <div className="welcome-text">Welcome to Your Quiz App</div>
      <div className="link-container">
        <Link to="/register" className="button">Register</Link>
      </div>
      <div className="link-container">
        <Link to="/login" className="button">Login</Link>
      </div>
    </div>
  );
};

export default FrontPage;
