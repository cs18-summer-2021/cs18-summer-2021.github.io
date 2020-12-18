import React from 'react';

import './AssignmentsCard.scss';

class AssignmentsCard extends React.Component {
	renderLinks() {
		return this.props.links.map((l) => <a href={l.link}>{l.icon}</a>)
	}

	render() {
		const inactiveStyle = this.props.active ? "" : " assignments-inactive"
		return (
			<div className={"assignments-card" + inactiveStyle}>
				<div className="assignments-card-heading">
					<p className="assignments-card-number">{this.props.label}{this.props.number}</p>
					<p className="assignments-card-title">{this.props.title}</p>
				</div>
				{this.renderLinks()}
			</div>
		)
	}
}

AssignmentsCard.defaultProps = {
	number: 1,
	title: "Assignment",
	active: "false",
	dueDate: new Date(),
	links: [],
	label: "H"
}

export default AssignmentsCard;