import React from 'react';
import project1 from '../public/assets/projects/Giggos/Goggeri_es_1.PNG';
import project1_2 from '../public/assets/projects/Giggos/Goggeri_es_3.PNG';
import project1_3 from '../public/assets/projects/Giggos/Goggeri_es_4.PNG';
import project1_4 from '../public/assets/projects/Giggos/Goggeri_es_5.PNG';
import project1_5 from '../public/assets/projects/Giggos/Goggeri_es_6.PNG';
import ProjectItem from './ProjectItem';
import { projects } from './constants';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1800px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-purple-800 to-blue-800'>
          Projects
        </p>
        <h2 className='py-4 '>My Projects : </h2>



        <div className='grid md:grid-cols-3 gap-8'>

          <ProjectItem
            title={projects[0].title}
            backgroundImg={project1}
            projectUrl={projects[0].projecturl}
            tech={projects[0].tech}
          />
          <ProjectItem
            title={projects[0].title}
            backgroundImg={project1_2}
            projectUrl={projects[0].projecturl}
            tech={projects[0].tech}
          />
                    <ProjectItem
            title={projects[0].title}
            backgroundImg={project1_3}
            projectUrl={projects[0].projecturl}
            tech={projects[0].tech}
          />
                    <ProjectItem
            title={projects[0].title}
            backgroundImg={project1_4}
            projectUrl={projects[0].projecturl}
            tech={projects[0].tech}
          />
                    <ProjectItem
            title={projects[0].title}
            backgroundImg={project1_5}
            projectUrl={projects[0].projecturl}
            tech={projects[0].tech}
          />
                    <ProjectItem
            title={projects[0].title}
            backgroundImg={project1_2}
            projectUrl={projects[0].projecturl}
            tech={projects[0].tech}
          />          

        </div>
      </div>
    </div>
  );
};

export default Projects;
