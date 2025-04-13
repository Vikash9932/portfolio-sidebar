import { useContext, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from 'react-icons/ai';
import { MdWorkOutline, MdOutlineWeb, MdClose } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { BsCloudDownload } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';

import './Sidebar.css';
import ContextFile from '../../context';

const Me = require('../../assets/me.jpg');
const CV = require('../../assets/cv.pdf');

const SideBarContent = () => {
  const { path, setPath, icon, setIcon } = useContext(ContextFile);
  const location = useLocation();

  // console.log('path inside sidebar', path, icon);
  useEffect(() => {
    setPath(location.pathname);
    //eslint-disable-next-line
  }, [location]);

  return (
    <div className={icon ? 'hide sidebar' : 'sidebar'}>
      <div className='sidebar--image'>
        <img src={Me} alt='Me' />
      </div>
      <div className='sidebar--cancel'>
        <MdClose color='lightGreen' size='35' onClick={() => setIcon(!icon)} />
      </div>
      <div className='sidebar--name'>Vikash Kumar</div>
      <div className='sidebar--social'>
        <a
          href='https://github.com/vikash9932'
          target='_blank'
          rel='noreferrer'>
          <AiOutlineGithub size='25' />
        </a>
        <a
          href='https://www.linkedin.com/in/vikash-kumar-729702103'
          target='_blank'
          rel='noreferrer'>
          <AiOutlineLinkedin size='25' />
        </a>
        <a href={CV} download>
          <BsCloudDownload size='25' />
        </a>
      </div>
      <div className='sidebar--nav'>
        <Link
          to='/'
          className={path === '/' ? 'selectedRoute' : 'notSelectedRoute'}
          onClick={() => setIcon(true)}>
          <div>
            <AiOutlineHome size='25' />
          </div>
          <p>Home</p>
        </Link>
        <Link
          to='/about'
          className={path === '/about' ? 'selectedRoute' : 'notSelectedRoute'}
          onClick={() => setIcon(true)}>
          <div>
            <CgProfile size='25' />
          </div>
          <p>About</p>
        </Link>

        <Link
          to='/work'
          className={path === '/work' ? 'selectedRoute' : 'notSelectedRoute'}
          onClick={() => {
            setPath('/work');
            setIcon(true);
          }}>
          <div>
            <MdWorkOutline size='25' />
          </div>
          <p>Work</p>
        </Link>

        <Link
          to='/projects'
          className={
            path === '/projects' ? 'selectedRoute' : 'notSelectedRoute'
          }
          onClick={() => setIcon(true)}>
          <div>
            <MdOutlineWeb size='25' />
          </div>
          <p>Projects</p>
        </Link>
        <Link
          to='/contact'
          className={path === '/contact' ? 'selectedRoute' : 'notSelectedRoute'}
          onClick={() => setIcon(true)}>
          <div>
            <AiOutlineMail size='25' />
          </div>
          <p>Contact</p>
        </Link>
      </div>
    </div>
  );
};

const Sidebar = () => {
  const { icon, setIcon } = useContext(ContextFile);
  // console.log('path inside sidebar', path);

  return (
    <>
      <div className='sidebar--logo' onClick={() => setIcon(!icon)}>
        {icon && <GiHamburgerMenu color='lightGreen' size='35' />}
      </div>
      {/* {!icon && <SideBarContent />}
      <div className='show'> */}
      <SideBarContent />
      {/* </div> */}
    </>
  );
};

export default Sidebar;
