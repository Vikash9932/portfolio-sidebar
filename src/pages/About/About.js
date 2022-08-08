import React from 'react';
import './About.css';
import skills from '../../assets/skills';

const About = () => {
  return (
    <div className='about'>
      <div className='about--heading'>About</div>
      <div className='about--summary'>
        Overall 5 years of experience in the software industry, with passion to
        code and a zeal to learn new technologies. Keen interest in developing
        new websites, components, making them stable and improve performance.
      </div>
      <div className='about--heading'>Skills</div>
      <div className='about__skills'>
        <div className='about__skills__all'>
          {skills.map((skill) => (
            <div key={skill.name} className='about__skills__all__each'>
              <div className='about__skills__all__each__bar--heading'>
                {skill.name}
              </div>
              <div className='about__skills__all__each__bar--progress'>
                <div
                  className='about__skills__all__each__bar__progress--value'
                  style={{ width: `${skill.progress}%` }}></div>
              </div>
              <span className='about__skills__all__each--progress'>
                {skill.progress}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
