import React from 'react';

import './Page.scss';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const resizeRatio = 1.2;

class Page extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			width: window.innerWidth, 
			height: window.innerHeight,
		};

		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}

	componentDidMount() { this.updateWindowDimensions(); window.addEventListener('resize', this.updateWindowDimensions); }
	componentWillUnmount() { window.removeEventListener('resize', this.updateWindowDimensions); }
	updateWindowDimensions() { this.setState({ width: window.innerWidth, height: window.innerHeight }); }

	render() {
		const aspectRatio = (this.state.width / this.state.height);
		const resize = (aspectRatio < resizeRatio);
		const resizeStyle = resize ? this.props.resizeStyle : ""

		return (
			<div className="page-wrapper">
				<Header active={this.props.activeTab} resize={resize}/>
				{/*<div className={"main-content" + " " + resizeStyle}>
					{this.props.children}
				</div>
				<Footer resize={resize}/>*/}
			</div>
		);
	}
}

Page.defaultProps = {
	activeTab: "",
	resizeStyle: "main-content-resize"
}

export default Page;