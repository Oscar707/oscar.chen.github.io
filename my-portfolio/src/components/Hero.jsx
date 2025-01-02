import React from 'react';

const Hero = () => {
  return (
    <section className="bg-[#909590] rounded-lg p-8 mb-12 text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8">Hi, I'm Oscar</h1>
        <p className="text-xl mb-12">
          Computer Science student at McGill University with a passion for building creative and user-friendly web applications. Currently seeking opportunities in software development and creative technology.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <EducationCard 
            school="Brebeuf Highschool"
            program="IB program"
            years="2014 - 2019"
            achievements={["Captain of Chess Team"]}
          />
          <EducationCard 
            school="Marianopolis College"
            program="Pure and Applied Sciences"
            years="2019 - 2021"
            achievements={["Jungler for the eSports team"]}
          />
          <EducationCard 
            school="McGill University"
            program="Major in Computer Science"
            years="2021 - 2024"
            achievements={["Member of Design Club"]}
          />
        </div>
      </div>
    </section>
  );
};

const EducationCard = ({ school, program, years, achievements }) => {
  return (
    <div className="bg-[#2C302E] p-6 rounded-lg">
      <h3 className="text-xl font-bold mb-2">{school}</h3>
      <p className="text-gray-300 mb-2">{program}</p>
      <p className="text-gray-400 mb-4">{years}</p>
      <ul className="list-disc list-inside">
        {achievements.map((achievement, index) => (
          <li key={index} className="text-gray-300">{achievement}</li>
        ))}
      </ul>
    </div>
  );
};

export default Hero;