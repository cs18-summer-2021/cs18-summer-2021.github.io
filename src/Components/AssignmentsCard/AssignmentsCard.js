import React from 'react';
import IconLink from '../../Components/IconLink/IconLink';

import './AssignmentsCard.scss';

class AssignmentsCard extends React.Component {
	renderLinks() {
		return this.props.links.map((l) => <IconLink link={l.link} icon={l.icon} label={l.label} />)
	}

	formatDate() {
		const months = ["Jan.", "Feb.", "Mar.", "Apr.", "May"]
		// the .replace thing is needed for dates to work on Safari
		const date = new Date(this.props.dueDate.replace(/-/g, "/"))
		const year = date.getFullYear().toString().substr(-2)
		const month = date.getMonth()
		const day = date.getDate()

		return `${month + 1}/${day}/${year}, 11:00 p.m. EDT`
	}

	render() {
		const inactiveStyle = this.props.active ? "" : " assignments-inactive"
		const inactiveText = this.props.active ? <></> : <div className="assignments-inactive-text"><p>&nbsp;&nbsp;Coming soon!&nbsp;&nbsp;</p></div>
		return (
			<div className={"assignments-card" + inactiveStyle}>
				<div className="assignments-card-heading">
					<p className="assignments-card-number">{this.props.number}</p>
					<p className="assignments-card-title">{this.props.title}</p>
				</div>
				<div className="assignments-card-links">{this.renderLinks()}</div>
				<div className="assignments-card-due-date">{this.props.dueDate}</div>
				{inactiveText}
			</div>
		)
	}
}

AssignmentsCard.defaultProps = {
	number: 1,
	title: "Assignment",
	active: "false",
	dueDate: "01-01-2021",
	links: []
}

export default AssignmentsCard;