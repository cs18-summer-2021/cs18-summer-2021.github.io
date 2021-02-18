import React from 'react';
import './IconLink.scss';

class IconLink extends React.Component {
	render() {
		return (
			<a className="icon-link" href={this.props.link} target="_blank" rel="noopener noreferrer" title={this.props.label}>
				{this.props.icon}
				<p className="icon-tooltip">{this.props.label}</p>
			</a>
		);
	}
}

export default IconLink;