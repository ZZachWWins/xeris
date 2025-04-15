import React from 'react';

function Projects() {
  const projects = [
    {
      title: 'E-Commerce Site',
      description: 'A fully responsive online store with seamless checkout. Videos with paywall, and full automated email of products/services.',
      image: 'https://res.cloudinary.com/demo/image/upload/v1698765432/sample.jpg',
    },
    {
      title: 'Portfolio Platform',
      description: 'What you see here. A sleek showcase for creatives to display their work.',
      image: 'https://res.cloudinary.com/demo/image/upload/v1698765432/sample.jpg',
    },
    {
      title: 'Forum Site, With Video Logic (likes, views, search, upload, etc.)',
      description: 'A dynamic blog with engaging content and animations.',
      image: 'https://res.cloudinary.com/demo/image/upload/v1698765432/sample.jpg',
    },
  ];

  return (
    <section id="projects" className="bg-gray-200 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;