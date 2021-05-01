import React from 'react';
import './Footer.scss';

class Footer extends React.Component {
	render() {
		const resizeStyle = this.props.resize ? " footer-resize" : ""

		return (
			<div className={"footer-wrapper" + resizeStyle}>
				<div>Copyright © 2021 CS18</div>
				<div>Submit feedback at our anonymous form <a href="https://forms.gle/dySMFrVgVo1iKz9Y8" target="_blank" rel="noreferrer noopener">here!</a></div>
			</div>
		);
	}
}

export default Footer;