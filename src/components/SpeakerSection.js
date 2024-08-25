import React from 'react';
import SpeakerCard from './SpeakerCard';

const speakers = [
  {
    name: 'Kavya Patel',
    title: 'Frontend Developer',
    shortBio: 'Expert in React and JavaScript.',
    fullBio: 'With over 5 years of experience in frontend development, Kavya has worked on numerous projects that have improved user experience and increased conversion rates. Her expertise in React and JavaScript has enabled her to build fast, scalable, and maintainable applications. She is passionate about staying up-to-date with the latest trends and technologies in the industry.',
  },
  {
    name: 'Aarav Sharma',
    title: 'Backend Engineer',
    shortBio: 'Specialist in Node.js and databases.',
    fullBio: 'As a seasoned backend engineer, Aarav has designed and developed scalable and efficient backend systems that have handled high traffic and large datasets. His expertise in Node.js and databases has enabled him to build robust and secure APIs that have improved system performance and reliability. He is committed to delivering high-quality solutions that meet business requirements.',
  },
  {
    name: 'Ananya Reddy',
    title: 'UI/UX Designer',
    shortBio: 'Designs intuitive user experiences.',
    fullBio: 'With a passion for creating user-centered designs, Ananya has developed intuitive and visually appealing interfaces that have improved user engagement and conversion rates. Her expertise in UI/UX design has enabled her to craft designs that are both functional and aesthetically pleasing. She is dedicated to staying up-to-date with the latest design trends and technologies.',
  },
  {
    name: 'Rohan Gupta',
    title: 'DevOps Engineer',
    shortBio: 'Automating development processes.',
    fullBio: 'As a DevOps engineer, Rohan has implemented automated development pipelines that have improved deployment efficiency and reduced errors. His expertise in DevOps has enabled him to design and implement scalable and secure infrastructure that has improved system reliability and performance. He is committed to delivering high-quality solutions that meet business requirements.',
  },
  {
    name: 'Meera Nair',
    title: 'Data Scientist',
    shortBio: 'Data-driven decision maker.',
    fullBio: 'With a strong background in statistics and machine learning, Meera has developed predictive models that have driven business growth and improved decision-making. Her expertise in data science has enabled her to extract insights from large datasets and communicate complex results to stakeholders. She is passionate about staying up-to-date with the latest advancements in AI and machine learning.',
  },
];

const SpeakerSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
      {speakers.map((speaker, index) => (
        <SpeakerCard key={index} speaker={speaker} />
      ))}
    </div>
  );
};

export default SpeakerSection;