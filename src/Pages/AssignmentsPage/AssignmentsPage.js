import React from 'react';

import './AssignmentsPage.scss';

import { Link } from 'react-router-dom';

import Page from '../../Layout/Page/Page';
import AssignmentsCard from '../../Components/AssignmentsCard/AssignmentsCard';

class AssignmentsPage extends React.Component {
	renderCards(assignments) {
		return assignments.map((a) => <AssignmentsCard number={a.number} title={a.title} dueDate={a.dueDate} active={a.active} links={a.links}/>)
	}

	render() {
		return (
			<Page activeTab="Assignments" resizeStyle="assignments-resize">
				<div className="assignments-wrapper">
					<div className="assignments-left-wrapper">
						<div className="assignments-nav-bar">
							<div className="assignments-link-wrapper">
								<Link to="/homeworks"><p className={"assignments-link" + (this.props.activeTab == "Homeworks" ? " assignments-active-link" : "")}>Homeworks</p></Link>
								{/* <p className="assignments-link-description">these do be the homeworks tho</p> */}
							</div>
							<div className="assignments-link-wrapper">
								<Link to="/labs"><p className={"assignments-link" + (this.props.activeTab == "Labs" ? " assignments-active-link" : "")}>Labs</p></Link>
								{/* <p className="assignments-link-description">this link go to labs page!!</p> */}
							</div>
							<div className="assignments-link-wrapper">
								<Link to="/projects"><p className={"assignments-link" + (this.props.activeTab == "Projects" ? " assignments-active-link" : "")}>Projects</p></Link>
								{/* <p className="assignments-link-description">this link go to projects page!!</p> */}
							</div>
						</div>
					</div>
					<div className="assignments-right-wrapper">
						{this.renderCards(this.props.assignments)}
					</div>
				</div>
			</Page>
		);
	}
}

export default AssignmentsPage;