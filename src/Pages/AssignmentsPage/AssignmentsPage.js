import React from 'react';

import './AssignmentsPage.scss';

import { Link } from 'react-router-dom';

import Page from '../../Layout/Page/Page';
import Homeworks from '../../Info/Assignments/Homeworks/Homeworks';

class AssignmentsCard extends React.Component {
	renderLinks() {
		return this.props.links.map((l) => <a href={l.link}>{l.icon}</a>)
	}

	render() {
		const inactiveStyle = this.props.active ? "" : " assignments-inactive"
		return (
			<div className={"assignments-card" + inactiveStyle}>
				<div className="assignments-card-heading">
					<p className="assignments-card-number">{this.props.number}</p>
					<p className="assignments-card-title">{this.props.title}</p>
				</div>
				{this.renderLinks()}
			</div>
		)
	}
}

class AssignmentsPage extends React.Component {
	renderCards(hws) {
		return hws.map((h) => <AssignmentsCard number={h.number} title={h.title} dueDate={h.dueDate} active={h.active} links={h.links}/>)
	}

	renderSections() {
		return Homeworks.map((h) => 
			<div className="assignments-section">
				<p className="assignments-section-title">{h.section}</p>
				<div className="assignments-section-cards">{this.renderCards(h.assignments)}</div>
			</div>
		)
	}

	render() {
		return (
			<Page activeTab="Assignments" resizeStyle="assignments-resize">
				<div className="assignments-wrapper">
					<div className="assignments-left-wrapper">
						<div className="assignments-nav-bar">
							<div className="assignments-link-wrapper">
								<p className="assignments-link assignments-active-link">Homeworks</p>
								<p className="assignments-link-description">these do be the homeworks tho</p>
							</div>
							<div className="assignments-link-wrapper">
								<Link to="/labs"><p className="assignments-link">Labs</p></Link>
								<p className="assignments-link-description">this link go to labs page!!</p>
							</div>
							<div className="assignments-link-wrapper">
								<Link to="/projects"><p className="assignments-link">Projects</p></Link>
								<p className="assignments-link-description">this link go to projects page!!</p>
							</div>
						</div>
					</div>
					<div className="assignments-right-wrapper">
						{this.renderSections()}
					</div>
				</div>
			</Page>
		);
	}
}

export default AssignmentsPage;