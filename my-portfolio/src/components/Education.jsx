import React from 'react';

const EducationCard = ({ school, program, years, achievements, icon }) => {
  return (
    <div className="bg-[#2C302E] p-6 rounded-lg">
      <h3 className="text-xl font-bold mb-2">{school}</h3>
      <div className="text-gray-300 space-y-2">
        <p>{program}</p>
        <p className="text-sm text-gray-400">{years}</p>
        <div className="flex items-center space-x-2 mt-4">
          {icon && <span className="text-gray-400">{icon}</span>}
          <p className="text-sm">{achievements}</p>
        </div>
      </div>
    </div>
  );
};

const Education = () => {
  const educationData = [
    {
      school: "Brebeuf Highschool",
      program: "IB program",
      years: "2014 - 2019",
      achievements: "Captain of Chess Team",
      icon: "♟️"
    },
    {
      school: "Marianopolis College",
      program: "Pure and Applied Sciences",
      years: "2019 - 2021",
      achievements: "Jungler for the eSports team",
      icon: "🎮"
    },
    {
      school: "McGill University",
      program: "Major in Computer Science, Bachelor of Science",
      years: "2021 - 2024",
      achievements: "Member of Design Club",
      icon: "🎨"
    }
  ];

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8">Education</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {educationData.map((edu, index) => (
          <EducationCard
            key={index}
            school={edu.school}
            program={edu.program}
            years={edu.years}
            achievements={edu.achievements}
            icon={edu.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default Education;