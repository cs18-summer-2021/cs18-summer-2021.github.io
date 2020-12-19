import React from 'react';

import './AssignmentsCard.scss';

class AssignmentsCard extends React.Component {
	renderLinks() {
		return this.props.links.map((l) => <a className="assignments-card-link" href={l.link}>{l.icon}</a>)
	}

	formatDate() {
		const months = ["Jan.", "Feb.", "Mar.", "Apr.", "May"]

		const date = new Date(this.props.dueDate)
		const year = date.getFullYear().toString().substr(-2)
		const month = date.getMonth()
		const day = date.getDate()

		console.log(date)

		return `${month + 1}/${day}/${year}, 11:59 PM AOE`
	}

	render() {
		const inactiveStyle = this.props.active ? "" : " assignments-inactive"
		return (
			<div className={"assignments-card" + inactiveStyle}>
				<div className="assignments-card-heading">
					<p className="assignments-card-number">{this.props.number}</p>
					<p className="assignments-card-title">{this.props.title}</p>
				</div>
				<div className="assignments-card-links">{this.renderLinks()}</div>
				<div className="assignments-card-due-date">{this.formatDate()}</div>
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