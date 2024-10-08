import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function HeroSection() {
  // const [questionBox, setQuestionBox] = useState(false)
 const navigate = useNavigate();
 

  return (
    <section className="bg-blue-500 text-white h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Your Personal AI Tutor, Anytime, Anywhere</h1>
        <p className="text-lg mb-6">AI-powered personalized learning tailored just for you. Start your journey today!</p>
        
        <button className="bg-white text-blue-500 px-6 py-3 rounded-full text-lg" onClick={navigate('/questionbox')}>
          Get Started
          </button>
      </div>
    </section>
  );
}

export default HeroSection;