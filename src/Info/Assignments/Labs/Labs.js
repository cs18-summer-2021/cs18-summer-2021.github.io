import { FaFileAlt, FaCode, FaFilePowerpoint } from 'react-icons/fa';

const labs = [
	{ 
		number: 1, title: "Setup", dueDate: "1/24/2021 - 1/26/2021", active: true,
		links: [
			{ icon: <FaFileAlt/>, link: "https://drive.google.com/file/d/164fsB4VnpFYxO26LPWP2wqbSO8ozt6J9/view?usp=sharing", label: "Handout" },
			{ icon: <FaCode/>, link: "https://drive.google.com/file/d/1ysv_aD4zL0UkXhC4ojvVS12pO2_kdvXu/view?usp=sharing", label: "Source Code" },
			{ icon: <FaFilePowerpoint/>, link: "https://docs.google.com/presentation/d/1gR2_EKUr31w1vl8q8-wUb66OejRIN2xTDbXixwoGNtI/edit?usp=sharing", label: "Slides" },
		]
	},
	{ 
		number: 2, title: "Racket Introduction", dueDate: "1/30/2021 - 2/1/2021", active: true,
		links: [
			{ icon: <FaFileAlt/>, link: "https://drive.google.com/file/d/1Rr6jxELllMUV9dJKGTWmadtfOVKm6U-N/view?usp=sharing", label: "Handout" },
			{ icon: <FaCode/>, link: "https://drive.google.com/file/d/1R77Qt0Ya_-vW4rho2Oby_6KJKUIohRUS/view?usp=sharing", label: "Source Code" },
			{ icon: <FaFilePowerpoint/>, link: "https://docs.google.com/presentation/d/1OyIHlxVeNfSC9_ZXpdcorC6zQTv-WvyUwtPm1b8m0YM/edit?usp=sharing", label: "Slides" },
		]
	},
	{ 
		number: 3, title: "Recursion", dueDate: "2/7/2021 - 2/9/2021", active: true,
		links: [
			{ icon: <FaFileAlt/>, link: "https://drive.google.com/file/d/1h-7cghV5qIr98iJeddcmz_7ImXDQONo5/view?usp=sharing", label: "Handout" },
			{ icon: <FaFilePowerpoint/>, link: "https://docs.google.com/presentation/d/1ColymQG6aOgZl1zLxJB9H_r6y4J-dCAYLvnhruOJhIA/edit?usp=sharing", label: "Slides" },
		]
	},

]

export default labs;