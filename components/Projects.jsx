
import React from 'react';
import nikeImg from '../public/assets/projects/nike.png';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Nike E-commerce Store'
            backgroundImg={nikeImg}
            projectUrl='/nike'
            tech='React JS, Vite JS'
          />
          
        </div>
      </div>
    </div>
  );
};

export default Projects;
