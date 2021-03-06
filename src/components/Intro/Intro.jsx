import React from "react";
import { Link } from 'react-scroll';
import Fade from 'react-reveal/Fade';

let Intro = () => {
  return (
		<div className="App-intro">
			{/*<Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">*/}
			<Fade left duration={1000} delay={500} distance="30px">
				<div className="App-intro-container">
					<div className="App-intro-title-container">
						<div className="App-intro-name">Raphael Pinto Gregorio</div>
						<div className="App-intro-job">JS Full Stack Developer</div>
					</div>
				</div>
			</Fade>
			<Fade bottom duration={1000} delay={1000} distance="30px">
				<div className="App-intro-menu-container">
					{/*<Link to="info" smooth duration={1000}>
	          <div className="App-intro-menu-item" >More info</div>
	        </Link>*/}
	        <Link to="project-list" smooth duration={1000}>
	          <div className="App-intro-menu-item" >Projects</div>
	        </Link>
	        <Link to="contact" smooth duration={1000}>
	          <div className="App-intro-menu-item-2" >Contact</div>
	        </Link>
          <a className="App-intro-menu-item-3" href="https://raw.githubusercontent.com/raphaelpg/resume/master/Raphael_Pinto_JS_Full_Stack.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
				</div>
			</Fade>
	  </div>
  );
};

export default Intro;