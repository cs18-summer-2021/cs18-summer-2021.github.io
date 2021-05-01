import React from 'react';

import './StaffPage.scss';

import Page from '../../Layout/Page/Page';
import Staff from '../../Info/Staff/Staff.js';

import { MdCake, MdLocationCity, MdFace } from 'react-icons/md';
import { FaBirthdayCake, FaCity, FaUserCircle } from 'react-icons/fa';
import { FaExclamation } from 'react-icons/fa';

class StaffCard extends React.Component {
	render() {
		const bgStyle = { backgroundImage: `url(${this.props.image})` }
		return (
			<div className="staff-card" style={bgStyle} onMouseOver={() => this.props.setCurrent(this.props.info)}>
				{this.props.name}
			</div>
		);
	}
}

class StaffPage extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			currentStaff: Staff[0]
		}
		this.renderAllStaff = this.renderAllStaff.bind(this)
		this.setCurrent = this.setCurrent.bind(this)
	}

	renderAllStaff() {
		return Staff.map((s) => <StaffCard info={s} name={s.name} image={s.image} setCurrent={this.setCurrent} />)
	}

	setCurrent(s) {
		this.setState({ currentStaff: s })
	}

	render() {
		const cur = this.state.currentStaff;
		const curBgStyle = { backgroundImage: `url(${cur.image})` }
		const allStaff = this.renderAllStaff();

		return (
			<Page activeTab="Staff" resizeStyle="staff-resize">
				<div className="staff-wrapper">
					<div className="staff-left-wrapper">
						<div className="staff-main-image" style={curBgStyle} />
						<div className="staff-main-info">
							<p className="staff-main-name">{cur.name} ({cur.login})</p>
							<div className="staff-subtitle-info">
								<p className="staff-main-birthday">{cur.birthday}</p><p />
								<p className="staff-main-hometown">{cur.hometown}</p><p />
								<p className="staff-main-pronouns">{cur.pronouns}</p>
							</div>
							<p className="staff-main-bio">{cur.bio}</p>
						</div>
						{/* <div className="staff-contact-description">
							<div><FaExclamation /></div>
							<p>Email <a href="mailto:kfisler@cs.brown.edu" target="_blank" rel="noreferrer noopener">Kathi</a> for grade questions, extenuating circumstances, and extension requests. Email the <a href="mailto:cs0180headtas@lists.brown.edu" target="_blank" rel="noreferrer noopener"> HTA List </a> for private course logistical questions, e.g. problems with partners, gradescope submission problems.</p>
						</div> */}
					</div>
					<div className="staff-right-wrapper">
						<div className="staff-grid">
							{allStaff}
						</div>
					</div>
				</div>
			</Page>
		);
	}
}

export default StaffPage;