import React from 'react';

import './NotesPage.scss';

import { Link } from 'react-router-dom';

import Page from '../../Layout/Page/Page';
import NotesCard from '../../Components/NotesCard/NotesCard';

class NotesPage extends React.Component {
	renderCards(notes) {
		return notes.map((n) => <NotesCard number={n.number} title={n.title} dueDate={n.dueDate} active={n.active} links={n.links}/>)
	}

	render() {
		return (
			<Page activeTab="Notes" resizeStyle="notes-resize">
				<div className="notes-wrapper">
					<div className="notes-left-wrapper">
						<div className="notes-nav-bar">
							<div className="notes-link-wrapper">
								<Link to="/lectures"><p className={"notes-link" + (this.props.activeTab == "Lectures" ? " notes-active-link" : "")}>Lectures</p></Link>
								<p className="notes-link-description">these do be the lectures tho</p>
							</div>
							<div className="notes-link-wrapper">
								<Link to="/workshops"><p className={"notes-link" + (this.props.activeTab == "Workshops" ? " notes-active-link" : "")}>Workshops</p></Link>
								<p className="notes-link-description">this link go to workshops page!!</p>
							</div>
						</div>
					</div>
					<div className="notes-right-wrapper">
						{this.renderCards(this.props.notes)}
					</div>
				</div>
			</Page>
		);
	}
}

export default NotesPage;