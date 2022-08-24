import React, { useState, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ContextFile from './context';

const Home = lazy(() => import('./pages/Home/Home'));
const About = lazy(() => import('./pages/About/About'));
const Work = lazy(() => import('./pages/Work/Work'));
const Projects = lazy(() => import('./pages/Projects/Projects'));
const Contact = lazy(() => import('./pages/Contact/Contact'));
const Sidebar = lazy(() => import('./pages/Sidebar/Sidebar'));

function App() {
  const [path, setPath] = useState('/');
  const [icon, setIcon] = useState(true);
  return (
    <div className='app'>
      <ContextFile.Provider value={{ path, setPath, icon, setIcon }}>
        <BrowserRouter>
          <Sidebar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/work' element={<Work />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </ContextFile.Provider>
    </div>
  );
}

export default App;
