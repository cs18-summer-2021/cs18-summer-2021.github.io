import React from "react";

import "./HomePage.scss";

import { Link } from "react-router-dom";
import { FaExclamation } from "react-icons/fa";

import Page from "../../Layout/Page/Page";
import AnimatedImage from "../../Components/AnimatedImage/AnimatedImage";
import { ReactComponent as CIT_Illustration } from "../../Assets/CIT_Logo/cs18blueno.svg";
import { ReactComponent as CIT_Logo_1 } from "../../Assets/CIT_Logo/CIT_Logo_1.svg";
import AssignmentsCard from "../../Components/AssignmentsCard/AssignmentsCard";

import Homeworks from "../../Info/Assignments/Homeworks/Homeworks";
import Projects from "../../Info/Assignments/Projects/Projects";
import Labs from "../../Info/Assignments/Labs/Labs";
import { ImportantLinks } from "../../Info/Resources/Resources";

class HomePage extends React.Component {
	getAssignments() {
		const activeH = Homeworks.filter((h) => h.active);
		let curH;
		if (activeH.length === 0) {
			curH = Homeworks.filter((h) => !h.active)[0];
		} else {
			curH = activeH[activeH.length - 1];
		}

		const activeL = Labs.filter((l) => l.active);
		let curL;
		if (activeL.length === 0) {
			curL = Labs.filter((l) => !l.active)[0];
		} else {
			curL = activeL[activeL.length - 1];
		}

		const activeP = Projects.filter((p) => p.active);
		let curP;
		if (activeP.length === 0) {
			curP = Projects.filter((p) => !p.active)[0];
		} else {
			curP = activeP[activeP.length - 1];
		}

		return [
			{ name: "Homework", content: curH, navigation: "/homeworks" },
			{ name: "Lab", content: curL, navigation: "/labs" },
			{ name: "Project", content: curP, navigation: "/projects" },
		];
	}

	renderHomeLinks() {
		return ImportantLinks.map((l) => (
			<div className="home-link">
				<div>
					<p className="home-link-icon">{l.icon}</p>
				</div>
				<a href={l.link} target="_blank" rel="noopener noreferrer">
					{l.label}
				</a>
				<p></p>
				<div>
					<p className="home-link-description">{l.description}</p>
				</div>
			</div>
		));
	}

	renderDueSoonCards() {
		const curA = this.getAssignments();
		return (
			<div className="home-due-soon-content">
				{curA.map(({ name, content, navigation }) => {
					return (
						<div className="home-due-soon-section">
							<div className="home-due-soon-label">
								<p>{name}</p>
								<Link to={navigation}>See all...</Link>
							</div>
							<AssignmentsCard
								number={content.number}
								title={content.title}
								active={content.active}
								dueDate={content.dueDate}
								links={content.links}
							/>
						</div>
					);
				})}
			</div>
		);
	}

	render() {
		return (
			<Page activeTab="Home" resizeStyle="home-resize">
				<div className="home-wrapper">
					<div className="home-left-wrapper">
						<div className="home-intro-images">
							<CIT_Illustration className="cit-illustration" />
						</div>
						<div className="home-intro-text">
							{/* <h1>Welcome to CS18 :D</h1> */}
							<p>
								Welcome!! :D We hope you're having a good day!
								We want to make a welcoming environment for everyone
                				who wants to learn CS – fill out our{" "}
								<a
									href="https://cs.brown.edu/courses/cs018/feedback"
									target="_blank"
									rel="noopener noreferrer"
								>
									anonymous feedback form
                </a>{" "}
                to let us know if we can do anything better!
              </p>
						</div>
						<div className="home-links">
							<h1>Important Links</h1>
							{this.renderHomeLinks()}
						</div>
					</div>
					<div className="home-announcement">
						<div>
							<div>
								<FaExclamation />
							</div>
							<p>
								<mark>Announcement:</mark> The first class will be held at{" "}
								<mark>11 a.m. EDT, May 12</mark>&nbsp;
                				<a href="https://cs18-summer-2021.github.io/">on Zoom</a>!
              				</p>
						</div>
					</div>
					<div className="home-due-soon">
						<h1>Current Assignments</h1>
						{this.renderDueSoonCards()}
					</div>
					<div className="home-hours">
						<iframe
							title={"Google Calendar"}
							src="https://calendar.google.com/calendar/embed?src=c_go4ruve51ln77qucucambr79n0%40group.calendar.google.com&amp;&ctz=America%2FNew_York&mode=WEEK&amp;&showPrint=0&showCalendars=0&color=%23B1365F"
							style={{ border: 0 }}
							frameborder="0"
							scrolling="no"
						></iframe>
					</div>
				</div>
			</Page>
		);
	}
}

export default HomePage;
