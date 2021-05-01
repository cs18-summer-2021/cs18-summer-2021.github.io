import React from 'react';
import './AnimatedImage.scss';

import { ReactComponent as CS18_Logo_1 } from '../../Assets/CS18_Logo/CS18_Logo_1.svg';
import { ReactComponent as CS18_Logo_2 } from '../../Assets/CS18_Logo/CS18_Logo_2.svg';
import { ReactComponent as CS18_Logo_3 } from '../../Assets/CS18_Logo/CS18_Logo_3.svg';

class AnimatedImage extends React.Component {
	constructor(props) {
		super(props);
		this.state = { images: [], currentImage: 0 }
		this.switchImage = this.switchImage.bind(this)
	}

	switchImage() {
		this.setState({
			currentImage: ((this.state.currentImage + 1) % this.state.images.length)
		});
	}

	componentDidMount() {
		this.setState({ images: this.props.images })
		setInterval(this.switchImage, 200);
	}

	render() {
		return (
			<div className="animated-image-wrapper">
				{this.state.images[this.state.currentImage]}
			</div>
		)
	}
}

AnimatedImage.defaultProps = {
	images: [<CS18_Logo_1 />, <CS18_Logo_2 />, <CS18_Logo_3 />]
}

export default AnimatedImage;