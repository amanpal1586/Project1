import React from 'react'

function Feature() {
    const features = [
        { title: "Personalized Learning Paths", description: "Customized learning plans based on your progress." },
        { title: "AI-Powered Feedback", description: "Real-time feedback from the AI tutor." },
        { title: "Interactive Quizzes", description: "Test your knowledge and track your progress." },
        { title: "Progress Tracking", description: "Monitor your growth over time with detailed reports." }
      ];
    
      return (
        <section className="py-12 bg-gray-100">
          <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
            {features.map((feature, index) => (
              <div className="bg-white p-6 shadow-lg rounded-lg" key={index}>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      );
}

export default Feature