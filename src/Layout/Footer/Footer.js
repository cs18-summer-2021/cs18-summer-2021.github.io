import React from 'react';
import './Footer.scss';

class Footer extends React.Component {
	render() {
		const resizeStyle = this.props.resize ? " footer-resize" : ""

		return (
			<div className={"footer-wrapper" + resizeStyle}>
				<div>Copyright © 2020 CS17</div>
				<div>Email the <a href="mailto:cs0170headtas@lists.brown.edu" target="_blank" rel="noreferrer noopener">HTA Mailing List</a> with any questions!</div>
			</div>
		);
	}
}

export default Footer;