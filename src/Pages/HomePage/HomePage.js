import React from 'react';

import './HomePage.scss';

import { Link } from 'react-router-dom';
import { FaQuestion, FaSchool, FaShoePrints, FaComment } from 'react-icons/fa';

import Page from '../../Layout/Page/Page';
import AnimatedImage from '../../Components/AnimatedImage/AnimatedImage';
import { ReactComponent as CIT_Illustration } from '../../Assets/CIT_Logo/CIT_Illustration.svg';
import AssignmentsCard from '../../Components/AssignmentsCard/AssignmentsCard';

import Homeworks from '../../Info/Assignments/Homeworks/Homeworks';
import Projects from '../../Info/Assignments/Projects/Projects';
import Labs from '../../Info/Assignments/Labs/Labs';


class HomePage extends React.Component {
	getAssignments() {
		const activeH = Homeworks.filter((h) => h.active); 
		let curH;
		if (activeH.length == 0) {
			curH = Homeworks.filter((h) => !h.active)[0]; 
		} else { curH = activeH[activeH.length - 1]; }
			
		const activeL = Labs.filter((l) => l.active); 
		let curL;
		if (activeL.length == 0) {
			curL = Labs.filter((l) => !l.active)[0];
		} else { curL = activeL[activeL.length - 1] }

		const activeP = Projects.filter((p) => p.active); 
		let curP;
		if (activeP.length == 0) {
			curP = Projects.filter((p) => !p.active)[0];
		} else { curP = activeP[activeP.length - 1]; }

		return {curH, curL, curP}
	}

	render() {
		const curA = this.getAssignments();
		let curH = curA.curH; let curL = curA.curL; let curP = curA.curP; 

		return (
			<Page activeTab="Home" resizeStyle="home-resize">
				<div className="home-wrapper">
					<div className="home-left-wrapper">
						<div className="home-intro-images">
							<CIT_Illustration className="cit-illustration"/>
							<AnimatedImage/>
						</div>
						<div className="home-intro-text">
							<h1>Welcome to CS17 :)</h1>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
						</div>
						<div className="home-links">
							<h1>Important Links</h1>
							<div className="home-link">
								<p className="home-link-icon"><FaSchool/></p>
								<a href="" target="_blank" rel="noopener noreferrer">Gradescope</a>
								<p className="home-link-description">This is where we do grading.</p>
							</div>
							<div className="home-link">
							<p className="home-link-icon"><FaQuestion/></p>
								<a href="" target="_blank" rel="noopener noreferrer">Piazza</a>
								<p className="home-link-description">This is where we answer qusetions.</p>
							</div>
							<div className="home-link">
								<p className="home-link-icon"><FaComment/></p>
								<a href="" target="_blank" rel="noopener noreferrer">SignMeUp</a>
								<p className="home-link-description">This is where u do hours and shit.</p>
							</div>
							<div className="home-link">
								<p className="home-link-icon"><FaShoePrints/></p>
								<a href="" target="_blank" rel="noopener noreferrer">Gather.town</a>
								<p className="home-link-description">This is where we gather.</p>
							</div>
						</div>
					</div>
					<div className="home-right-wrapper">
						<div className="home-due-soon">
							<h1>Current Assignments</h1>
							<div className="home-due-soon-labels">
								<div className="home-due-soon-label">
									<p>Homework</p>
									<Link to="/homeworks">See all...</Link>
								</div>
								<div className="home-due-soon-label">
									<p>Lab</p>
									<Link to="/labs">See all...</Link>
								</div>
								<div className="home-due-soon-label">
									<p>Project</p>
									<Link to="/projects">See all...</Link>
								</div>
							</div>
							<div className="home-due-soon-cards">
								<AssignmentsCard number={curH.number} title={curH.title} active={curH.active} dueDate={curH.dueDate} links={curH.links}/>
								<AssignmentsCard number={curL.number} title={curL.title} active={curL.active} dueDate={curL.dueDate} links={curL.links}/>
								<AssignmentsCard number={curP.number} title={curP.title} active={curP.active} dueDate={curP.dueDate} links={curP.links}/>
							</div>
						</div>
						<div className="home-hours">
							<iframe src="https://calendar.google.com/calendar/embed?src=brown.edu_fechjhecobm9ec4c23lp12nfuk%40group.calendar.google.com&ctz=America%2FChicago" style={{border: 0}} frameborder="0" scrolling="no"></iframe>
						</div>
						<div className="home-contact">
							<div>Copyright © 2020 CS17</div>
							<div>Email the <a href="mailto:cs0170headtas@lists.brown.edu" target="_blank" rel="noreferrer noopener">HTA Mailing List</a> with any questions!</div>
						</div>
					</div>
				</div>
			</Page>
		);
	}
}

export default HomePage;