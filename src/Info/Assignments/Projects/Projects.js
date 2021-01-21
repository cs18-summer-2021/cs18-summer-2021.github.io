import { FaFileAlt, FaCode, FaFilePowerpoint } from 'react-icons/fa';

const projects = [
	{ 
		number: 1, title: "Bignum", dueDate: "2/25/2021 11:00 PM EST", active: false,
		notes: "",
		links: [
			{ icon: <FaFileAlt/>, link: "", label: "Handout" },
			{ icon: <FaCode/>, link: "", label: "Source Code" },
		]
	},
	{ 
		number: 2, title: "Rackette", dueDate: "03/26/2021 11:00 PM EST", active: false,
		notes: "",
		links: [
			{ icon: <FaFileAlt/>, link: "", label: "Handout" },
			{ icon: <FaCode/>, link: "", label: "Source Code" },
		]
	},
	{ 
		number: 3, title: "Game", dueDate: "04/08/2021 11:00 PM EST", active: false,
		notes: "",
		links: [
			{ icon: <FaFileAlt/>, link: "", label: "Handout" },
			{ icon: <FaCode/>, link: "", label: "Source Code" },
		]
	}
]

export default projects;