import React from 'react';

function Home() {
  return (
    <section id="home" className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Building Your Digital Future</h2>
        <p className="text-lg md:text-xl mb-8">We create stunning, responsive websites tailored to your vision.</p>
        <a href="/contact" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">Get Started</a>
      </div>
    </section>
  );
}

export default Home;