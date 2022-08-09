import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Sidebar from './pages/Sidebar/Sidebar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Resume from './pages/Resume/Resume';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';

import ContextFile from './context';

function App() {
  const [path, setPath] = useState('/');
  return (
    <div className='app'>
      <ContextFile.Provider value={[path, setPath]}>
        <BrowserRouter>
          <Sidebar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/resume' element={<Resume />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </ContextFile.Provider>
    </div>
  );
}

export default App;
