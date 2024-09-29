import React from "react";


function Footer() {
  return (
    <footer className="bg-blue-500 text-white py-4 text-center">
      <p>&copy; {new Date().getFullYear()} AI Tutor. All Rights Reserved.</p>
      <div className="flex justify-center space-x-4 mt-4">
        <a href="/" className="hover:underline">Facebook</a>
        <a href="/" className="hover:underline">Twitter</a>
        <a href="/" className="hover:underline">Instagram</a>
      </div>
    </footer>
  );
}

export default Footer;
