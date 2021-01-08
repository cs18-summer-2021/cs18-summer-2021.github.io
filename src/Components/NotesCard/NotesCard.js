import React from 'react';
import IconLink from '../../Components/IconLink/IconLink';

import './NotesCard.scss';

class NotesCard extends React.Component {
	renderLinks() {
		return this.props.links.map((l) => <IconLink link={l.link} icon={l.icon} label={l.label}/>)
	}

	renderTags() {
		return this.props.tags.map((l) => <p className="notes-card-tag">{l}</p>)
	}

	formatDate() {
		const months = ["Jan.", "Feb.", "Mar.", "Apr.", "May"]

		const date = new Date(this.props.outDate)
		const year = date.getFullYear().toString().substr(-2)
		const month = date.getMonth()
		const day = date.getDate()

		return `${month + 1}/${day}/${year}, 11:59 PM EST`
	}

	render() {
		const inactiveStyle = this.props.active ? "" : " notes-inactive"
		const inactiveText = this.props.active ? <></> : <div className="notes-inactive-text"><p>Coming soon!</p></div>
		return (
			<div className={"notes-card" + inactiveStyle}>
				<div className="notes-card-heading">
					<p className="notes-card-number">{this.props.number}</p>
					<p className="notes-card-title">{this.props.title}</p>
				</div>
				{this.props.tags !== undefined ? <div className="notes-card-tags">{this.renderTags()}</div> : <></>}
				<div className="notes-card-links">{this.renderLinks()}</div>
				<div className="notes-card-out-date">{this.formatDate()}</div>
				{inactiveText}
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