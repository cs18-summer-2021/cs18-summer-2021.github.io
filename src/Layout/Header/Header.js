import React from 'react';
import './Header.scss';

import HeaderTab from './HeaderTab';
import { Link } from 'react-router-dom';
import tree from '../WebsiteTree';
import AnimatedImage from '../../Components/AnimatedImage/AnimatedImage.js';

import { FaBars } from 'react-icons/fa';

const resizeRatio = 1;

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = { open: false }
	}

	renderTabs() {
		return tree.map((tab) => {
			return <HeaderTab 
				resize={this.props.resize}
				active={this.props.active === tab.label} 
				label={tab.label} 
				style={tab.style}
				navigation={tab.navigation} 
				children={tab.children}
		/>});
	}

	render() {
		if (this.props.aspectRatio < resizeRatio) {
			const openStyle = this.state.open ? " header-open" : ""
			const fillStyle = this.state.open ? " header-fill" : ""

			return (
					<div className="header-wrapper header-resize">
						<div className={"header-background-fill" + fillStyle} onClick={() => this.setState({ open: false })}/>
						<FaBars className="header-hamburger" onClick={() => this.setState({ open: true })} />
						<Link to="/">
							<div className="logo-wrapper">
								<AnimatedImage/>
							</div>
						</Link>
						<div className={"tabs-wrapper" + openStyle}>
							{this.renderTabs()}
						</div>
					</div>
			)
		} else {
			if (this.state.open) { this.setState({open: false}) };

			return (
				<div className="header-wrapper">
					<Link to="/">
						<div className="logo-wrapper">
							<AnimatedImage/>
						</div>
					</Link>
					<div className="tabs-wrapper">
						{this.renderTabs()}
					</div>
				</div>
			);
		}
	}
}

export default Header;