import React from "react";
import { Link } from "react-router-dom";


function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-blue-500 text-white">
      <div className="text-2xl font-bold">AI Tutor</div>
      <nav>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/features" className="hover:underline">Features</Link></li>
          <li><Link to="/courses" className="hover:underline">Courses</Link></li>
          <li><Link to="/pricing" className="hover:underline">Pricing</Link></li>
        </ul>
      </nav>
      <div className="auth-buttons">
        <button className="login-btn">Login</button>
        <button className="signup-btn">Sign Up</button>
      </div>
    </header>
  );
}

export default Header;
