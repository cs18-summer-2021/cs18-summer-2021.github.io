import React from 'react';

import './HomePage.scss';

import Page from '../../Layout/Page/Page';
import AnimatedImage from '../../Components/AnimatedImage/AnimatedImage.js';

class HomePage extends React.Component {
	render() {
		return (
			<Page activeTab="Home" resizeStyle="home-resize">
				<div className="home-wrapper">
					<div className="home-left-wrapper">
						<div className="home-intro-images">
							<AnimatedImage/>
						</div>
						<div className="home-intro-text">
							<h1>Welcome to CS17 :)</h1>
							<p>Though we are remote this semester, taking CS17 makes you a part of the Brown CS community as equally as any other year. Welcome to Brown CS! And if you’re a first-year: welcome to Brown!!!!!</p>
						</div>
					</div>
					<div className="home-right-wrapper">
						<div className="home-due-soon"></div>
						<div className="home-hours"></div>
					</div>
				</div>
			</Page>
		);
	}
}

export default HomePage;