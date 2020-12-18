import React from 'react';

import './HomePage.scss';

import { Link } from 'react-router-dom';

import Page from '../../Layout/Page/Page';
import AnimatedImage from '../../Components/AnimatedImage/AnimatedImage';
import { ReactComponent as CIT_Illustration } from '../../Assets/CIT_Logo/CIT_Illustration.svg';
import AssignmentsCard from '../../Components/AssignmentsCard/AssignmentsCard';

import Homeworks from '../../Info/Assignments/Homeworks/Homeworks';
import Projects from '../../Info/Assignments/Projects/Projects';
import Labs from '../../Info/Assignments/Labs/Labs';

class HomePage extends React.Component {
	render() {
		const curH_section = (Homeworks[Homeworks.length - 1]).assignments; const curH = curH_section[curH_section.length - 1]
		const curL = Labs[Labs.length - 1]
		const curP = Projects[Projects.length - 1]

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
							<div className="home-link">Gradescope</div>
							<div className="home-link">Piazza</div>
							<div className="home-link">SignMeUp</div>
							<div className="home-link">Gather.town</div>
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
									<p>Project</p>
									<Link to="/projects">See all...</Link>
								</div>
								<div className="home-due-soon-label">
									<p>Lab</p>
									<Link to="/labss">See all...</Link>
								</div>
							</div>
							<div className="home-due-soon-cards">
								<AssignmentsCard number={curH.number} title={curH.title} active={curH.active} dueDate={curH.dueDate} links={curH.links}/>
								<AssignmentsCard number={curL.number} title={curL.title} active={curL.active} dueDate={curL.dueDate} links={curL.links}/>
								<AssignmentsCard number={curP.number} title={curP.title} active={curP.active} dueDate={curP.dueDate} links={curP.links}/>
							</div>
						</div>
						<div className="home-hours"></div>
					</div>
				</div>
			</Page>
		);
	}
}

export default HomePage;