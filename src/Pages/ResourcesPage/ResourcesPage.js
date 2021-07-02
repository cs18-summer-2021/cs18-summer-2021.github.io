import React from 'react';

import './ResourcesPage.scss';

import { Link } from 'react-router-dom';
import { FaQuestion, FaSchool, FaShoePrints, FaComment, FaVideo, FaExclamation, FaFileAlt } from 'react-icons/fa';

import Page from '../../Layout/Page/Page';
import { ImportantLinks, Resources } from '../../Info/Resources/Resources';

class ResourcesPage extends React.Component {
	renderImportantLinks() {
		return ImportantLinks.map((l) => <div className="resources-important-link">
			<p className="resources-important-link-icon">{l.icon}</p>
			<a href={l.link} target="_blank" rel="noopener noreferrer">{l.label}</a>
			{l.description != "" && <p className="resources-important-link-description">{l.description}</p>}
		</div>
		)
	}

	renderResources() {
		return Resources.map((s) => <div className="resources-section">
			<div className="resources-section-title">{s.section}</div>
			{s.note != "" && <div className="resources-section-note">{s.note}</div>}
			<div className="resources-section-links">
				{s.links.map((r) => <a target="_blank" rel="noopener noreferrer" className="resources-section-link" href={r.link}>{r.label}</a>)}
			</div>
		</div>)
	}

	render() {
		return (
			<Page activeTab="Resources" resizeStyle="resources-resize">
				<div className="resources-wrapper">
					<div className="resources-left-wrapper">
						<div className="resources-important-links">
							<h1>Important Links</h1>
							{this.renderImportantLinks()}
						</div>
					</div>
					<div className="resources-right-wrapper">
						{this.renderResources()}
					</div>
				</div>
			</Page>
		);
	}
}

export default ResourcesPage;