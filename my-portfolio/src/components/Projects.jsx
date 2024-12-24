import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "AI-powered Note Taking App",
      description: "A React-based note-taking application with AI capabilities for smart organization and content suggestions.",
      technologies: {
        frontend: "React",
        backend: "XAMPP",
        database: "MySQL"
      },
      image: "/path-to-project-gif.gif"
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="mb-12">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ title, description, technologies, image }) => {
  return (
    <div className="bg-[#2C302E] rounded-lg overflow-hidden">
      <div className="h-64 bg-green-400 relative">
        {/* Replace with actual project image/gif */}
        <div className="absolute inset-0 flex items-center justify-center text-black font-bold">
          Project Demo
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="text-sm text-gray-400">
          <p>Front end: {technologies.frontend}</p>
          <p>Back end: {technologies.backend}</p>
          <p>Database: {technologies.database}</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;