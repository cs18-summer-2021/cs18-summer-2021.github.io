import React from 'react';

import './NotesPage.scss';

import { Link } from 'react-router-dom';

import Page from '../../Layout/Page/Page';
import NotesCard from '../../Components/NotesCard/NotesCard';

class NotesPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			allTags: [],
			activeTags: [],
			renderTags: false,
		}
		this.renderTags = this.renderTags.bind(this)
	}

	renderCards(notes) {
		return notes.map((n) => <NotesCard number={n.number} title={n.title} dueDate={n.dueDate} active={n.active} links={n.links} tags={n.tags}/>)
	}

	toggleTag(tag) {
		let activeTags = this.state.activeTags
		if (this.state.activeTags.includes(tag)) {
			activeTags = this.state.activeTags.filter((t) => t !== tag)
		} else { activeTags = activeTags.concat(tag); }
		this.setState({activeTags})
	}

	renderTags() {
		const tags = this.state.allTags;
		const active = this.state.activeTags;
		return tags.map((t) => 
			<p className={"notes-filter-tag" + (this.state.activeTags.includes(t) ? " active-filter-tag" : "")}
				onClick={() => this.toggleTag(t)}>{t}</p>
		)
	}

	resetTags() {
		const notes = this.props.notes;
		if (notes[0].tags !== undefined) {
			let allTags = notes.map((n) => n.tags).flat();
			allTags = [...new Set(allTags)];
			this.setState({allTags, renderTags: true});
		} else { this.setState({allTags: [], renderTags: false}) }
	}

	componentDidMount() {
		this.resetTags()
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.notes !== this.props.notes) {
			console.log("op")
			this.resetTags();
		}
	}

	render() {
		let filteredNotes = this.props.notes;
		if (this.state.activeTags.length > 0) { 
			filteredNotes = filteredNotes.filter((n) => n.tags.some((t) => this.state.activeTags.includes(t))); 
		}
		const renderedNotes = this.renderCards(filteredNotes);

		console.log(this.state.renderTags)

		return (
			<Page activeTab="Notes" resizeStyle="notes-resize">
				<div className="notes-wrapper">
					<div className="notes-left-wrapper">
						<div className="notes-nav-bar">
							<div className="notes-link-wrapper">
								<Link to="/classes"><p className={"notes-link" + (this.props.activeTab == "Classes" ? " notes-active-link" : "")}>Classes</p></Link>
								<p className="notes-link-description">these do be the classes tho</p>
							</div>
							<div className="notes-link-wrapper">
								<Link to="/workshops"><p className={"notes-link" + (this.props.activeTab == "Workshops" ? " notes-active-link" : "")}>Workshops</p></Link>
								<p className="notes-link-description">this link go to workshops page!!</p>
							</div>
						</div>
					</div>
					<div className="notes-right-wrapper">
						{
							this.state.renderTags ?
							<div className="notes-filter-wrapper">
								<p className="notes-filter-text">Filter by Tags</p>
								{this.renderTags()}
								<p className="notes-filter-clear" onClick={() => this.setState({activeTags: []})}>Clear...</p>
							</div>				
							:<></>
						}
						<div className="notes-cards-wrapper">
							{renderedNotes}
						</div>
					</div>
				</div>
			</Page>
		);
	}
}

export default NotesPage;