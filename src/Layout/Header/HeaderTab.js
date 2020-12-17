import React from 'react';
import './Header.scss';

import { Link } from 'react-router-dom';

class HeaderTab extends React.Component {
	renderChildren() {
		if (this.props.children.length === 0) { return }
		return (<div className="tab-children">
			{this.props.children.map((child) =>
				<Link to={child.navigation}>
					<div className="tab-children-text">
						{child.label}
					</div>
				</Link>
			)}
		</div>)
	}

	render() {
		const activeStyle = this.props.active ? " active" : ""
		return (
			<Link to={this.props.navigation}>
				<div className={"tab-wrapper" + activeStyle}>
					{this.props.label}
					{this.renderChildren()}
				</div>
			</Link>
		);
	}
}

HeaderTab.defaultProps = {
	active: false
}

export default HeaderTab;
