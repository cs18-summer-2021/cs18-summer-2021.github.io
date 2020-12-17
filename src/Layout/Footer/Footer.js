import React from 'react';
import './Footer.scss';

class Footer extends React.Component {
	render() {
		const resizeStyle = this.props.resize ? " footer-resize" : ""

		return (
			<div className={"footer-wrapper" + resizeStyle}>
				<div className="footer-text">
					CS17 2021 :)
				</div>
			</div>
		);
	}
}

export default Footer;