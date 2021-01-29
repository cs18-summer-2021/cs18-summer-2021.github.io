import React from 'react';

import './HomePage.scss';

import { Link } from 'react-router-dom';
import { FaExclamation } from 'react-icons/fa';

import Page from '../../Layout/Page/Page';
import AnimatedImage from '../../Components/AnimatedImage/AnimatedImage';
import { ReactComponent as CIT_Illustration } from '../../Assets/CIT_Logo/CIT_Illustration.svg';
import { ReactComponent as CIT_Logo_1 } from '../../Assets/CIT_Logo/CIT_Logo_1.svg';
import AssignmentsCard from '../../Components/AssignmentsCard/AssignmentsCard';

import Homeworks from '../../Info/Assignments/Homeworks/Homeworks';
import Projects from '../../Info/Assignments/Projects/Projects';
import Labs from '../../Info/Assignments/Labs/Labs';
import { ImportantLinks } from '../../Info/Resources/Resources';

class HomePage extends React.Component {
	getAssignments() {
		const activeH = Homeworks.filter((h) => h.active);
		let curH;
		if (activeH.length === 0) {
			curH = Homeworks.filter((h) => !h.active)[0];
		} else { curH = activeH[activeH.length - 1]; }

		const activeL = Labs.filter((l) => l.active);
		let curL;
		if (activeL.length === 0) {
			curL = Labs.filter((l) => !l.active)[0];
		} else { curL = activeL[activeL.length - 1] }

		const activeP = Projects.filter((p) => p.active);
		let curP;
		if (activeP.length === 0) {
			curP = Projects.filter((p) => !p.active)[0];
		} else { curP = activeP[activeP.length - 1]; }

		return [
			{name: 'Homework', content: curH, navigation: "/homeworks"},
			{name: 'Lab', content: curL, navigation: "/labs"},
			{name: 'Project', content: curP, navigation: "/projects"},
		]
	}

	renderHomeLinks() {
		return ImportantLinks.map((l) => <div className="home-link">
			<p className="home-link-icon">{l.icon}</p>
			<a href={l.link} target="_blank" rel="noopener noreferrer">{l.label}</a>
			<p className="home-link-description">{l.description}</p>
		</div>
		)
	}

	renderDueSoonCards() {
		const curA = this.getAssignments();
		return (
			<div className='home-due-soon-content'>
				{curA.map(({name, content, navigation}) => {
					return (
						<div className="home-due-soon-section">
							<div className="home-due-soon-label">
								<p>{name}</p>
								<Link to={navigation}>See all...</Link>
							</div>
							<AssignmentsCard number={content.number} title={content.title} active={content.active} dueDate={content.dueDate} links={content.links}/>
						</div>
					)
				})}
			</div>
		)
	}

	render() {
		return (
			<Page activeTab="Home" resizeStyle="home-resize">
				<div className="home-wrapper">
					<div className="home-left-wrapper">
						<div className="home-intro-images">
							<CIT_Illustration className="cit-illustration"/>
							{/* <AnimatedImage images={[<CIT_Logo_1/>]}/> */}
							<AnimatedImage/>
						</div>
						<div className="home-intro-text">
							<h1>Welcome to CS17 :)</h1>
							<h4>Will the class be fully online?</h4>
							<p>All of the lectures will be recorded, so you are not required to show up for any live lectures — however, the class will still meet over Zoom during the scheduled time (MWF 11-11:50 a.m. EST) where Spike will present material, interleaved with students collaborating in small groups. We highly recommend coming to these sessions, as one of the best parts about CS17 and college in general is interacting with your peers and professors!</p>
							<h4>Does that mean I can take another class that has lecture at the same time as CS17?</h4>
							<p>Yes. But if you want to do so, Banner may object, in which case you should sign up for Section 2 of the course, which is listed as "asynchronous" (i.e., it has no official class hour). That requires instructor permission, which can probably be requested from within Banner, or you can email Spike (the professor) directly at jfh@cs.brown.edu. Because the lectures are recorded, you are free to take classes with conflicting times on CAB, but note that you will lose out on helpful discussions during the scheduled class time! If you go this direction, we recommend finding a "class buddy" with whom to view the classes so that you can do the work-together exercises as the class unfolds.</p>
							<h4>I don't have any background in CS. Can I still take this class?</h4>
							<p>Absolutely!! This is an introductory Computer Science course and requires no pre-requisite knowledge. We welcome anyone interested in exploring Computer Science! We have an awesome staff of Teaching Assistants that's ready to help you learn as much as possible, many of whom had no experience in CS before the class either :)</p>
							<h4>I have prior CS experience. Is this class appropriate for me?</h4>
							<p>Yes, but take a look through the website and come to the first lecture to make sure this class fits your needs. CS17 takes a different approach to teaching computer science than most high school CS classes (such as AP CS) and many students with prior experience often find CS17 valuable because of this. You'll find students in CS17 with varying levels of experience in CS, but everyone starts at the same place and learns a lot throughout the course!</p>
							<h4>Wait, what are Teaching Assistants (TAs)? What do they do?</h4>
							<p>TAs are a group of undergraduate students who are there to help you through the course — they hold hours every week to answer questions about class and assignments. All the TAs have taken CS17 previously; many of them took it just last year.</p>
						</div>
						<div className="home-links">
							<h1>Important Links</h1>
							{this.renderHomeLinks()}
						</div>
					</div>
					<div className="home-announcement">
						<div>
							<div><FaExclamation/></div>
							<p><mark>Announcement:</mark> Lectures will be held&nbsp;<a href="https://brown.zoom.us/j/96484496047">on Zoom</a>! Please use your Brown email address to join!</p>
						</div>
					</div>
					<div className="home-due-soon">
						<h1>Current Assignments</h1>
						{this.renderDueSoonCards()}
					</div>
					<div className="home-hours">
						<iframe title={"Google Calendar"} src="https://calendar.google.com/calendar/embed?src=brown.edu_fechjhecobm9ec4c23lp12nfuk%40group.calendar.google.com&ctz=America%2FNew_York" style={{border: 0}} frameborder="0" scrolling="no"></iframe>
					</div>
				</div>
			</Page>
		);
	}
}

export default HomePage;
