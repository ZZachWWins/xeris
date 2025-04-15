import React from 'react';

function About() {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">We are Xeris</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="https://res.cloudinary.com/demo/image/upload/v1698765432/sample.jpg"
              alt="Team"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <p className="text-lg">
              We're a passionate duo dedicated to crafting exceptional web experiences. With expertise in modern technologies like React and Tailwind CSS, we bring your ideas to life with creativity and precision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;