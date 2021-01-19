import React, { useState,useEffect } from 'react';
import '../style/App.css';
import Intro from './Intro/Intro';
import Projects from './Projects/Projects';
import Links from './Links/Links';
import Fade from 'react-reveal/Fade';

import { projectsData, stackLogos } from '../data/data';

const App = () => {
  const [projects, setProjects] = useState([]);
  const [logos, setLogos] = useState([]);

  useEffect(() => {
    setProjects([...projectsData]);
    setLogos(stackLogos);
  }, [])

  return (
    <div className='App'>
      <header className='App-header'></header>
      <main className='App-main'>
        <Fade duration={2000}>
          <Intro/>
        </Fade>
        <Projects 
          projects={ projects }
          logos={ logos }
        />
      </main>
      <footer className='App-footer'>
        <Links/>
      </footer>
    </div>
  );
}

export default App;