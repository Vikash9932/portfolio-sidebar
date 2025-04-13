import { useState, useEffect } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { BiLinkExternal } from 'react-icons/bi';
import './Projects.css';
import projectsList from '../../helpers/projectsList';
import { getProjectsFilter } from '../../services/firestore';

const Projects = () => {
  const [projects, setProjects] = useState(projectsList);
  const [filter, setFilter] = useState('All');
  const [filters, setFilters] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadFilters = async () => {
      try {
        const fetchedFilters = await getProjectsFilter();
        setFilters(fetchedFilters);
      } catch (error) {
        console.error('Error loading filters:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadFilters();
  }, []);

  const handleFilter = (filterVal: string) => {
    setFilter(filterVal);
    if (filterVal === 'All') {
      setProjects(projectsList);
    } else {
      const tempList = projectsList.filter((item) =>
        item.techStack.includes(filterVal)
      );
      setProjects(tempList);
    }
  };

  if (isLoading) {
    return <div className='projects'>Loading...</div>;
  }

  return (
    <div className='projects'>
      <h2 className='projects--heading'>Projects</h2>
      <div className='projects__list'>
        <div className='projects__list--filterHeader'>
          {filters.map((item) => (
            <button
              key={item}
              className='projects__list__filterHeader--item'
              onClick={() => handleFilter(item)}
              style={{
                backgroundColor: filter === item ? 'rgb(101, 205, 170)' : '',
              }}>
              {item}
            </button>
          ))}
        </div>
        <div className='projects__list--filterHeader1'>
          <select
            className='projects__list__filterHeader1--item'
            value={filter}
            onChange={(e) => handleFilter(e.target.value)}>
            {filters.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className='projects__list--content'>
          {projects.map((project) => (
            <div className='projects__list__content--item' key={project.id}>
              <img
                src={project.image}
                alt={`Preview of ${project.name}`}
                className='projects__list__content__item--image'
              />
              <div className='projects__list__content__item--links'>
                <a
                  target='_blank'
                  rel='noreferrer'
                  href={project.githubLink}
                  className='projects__list__content__item__links--git'>
                  <AiFillGithub size={30} />
                </a>
                <a
                  target='_blank'
                  rel='noreferrer'
                  href={project.deployLink}
                  className='projects__list__content__item__links--deploy'>
                  <BiLinkExternal size={30} />
                </a>
              </div>
              <div className='projects__list__content__item--name'>
                {project.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
