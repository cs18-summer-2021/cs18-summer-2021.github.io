import React from 'react';

import './NotesCard.scss';

class NotesCard extends React.Component {
	renderLinks() {
		return this.props.links.map((l) => <a className="notes-card-link" href={l.link}>{l.icon}</a>)
	}

	formatDate() {
		const months = ["Jan.", "Feb.", "Mar.", "Apr.", "May"]

		const date = new Date(this.props.outDate)
		const year = date.getFullYear().toString().substr(-2)
		const month = date.getMonth()
		const day = date.getDate()

		console.log(date)

		return `${month + 1}/${day}/${year}, 11:59 PM AOE`
	}

	render() {
		const inactiveStyle = this.props.active ? "" : " notes-inactive"
		return (
			<div className={"notes-card" + inactiveStyle}>
				<div className="notes-card-heading">
					<p className="notes-card-number">{this.props.number}</p>
					<p className="notes-card-title">{this.props.title}</p>
				</div>
				<div className="notes-card-links">{this.renderLinks()}</div>
				<div className="notes-card-out-date">{this.formatDate()}</div>
			</div>
		)
	}
}

NotesCard.defaultProps = {
	number: 1,
	title: "Assignment",
	active: "false",
	outDate: "01-01-2021",
	links: []
}

export default NotesCard;