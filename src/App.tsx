import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Sidebar from './pages/Sidebar/Sidebar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Work from './pages/Work/Work';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';

import ContextFile from './context';

function App() {
  const [path, setPath] = useState('/');
  const [icon, setIcon] = useState(true);

  return (
    <div className='app'>
      <ContextFile.Provider value={{ path, setPath, icon, setIcon }}>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/work' element={<Work />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </ContextFile.Provider>
    </div>
  );
}

export default App;
