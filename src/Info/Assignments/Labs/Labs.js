import { FaFileAlt, FaCode, FaFilePowerpoint } from 'react-icons/fa';

const labs = [
	{ 
		number: 1, title: "Setup", dueDate: "1/24/2021 - 1/26/2021", active: false,
		links: [
			{ icon: <FaFileAlt/>, link: "", label: "Handout" },
			{ icon: <FaCode/>, link: "", label: "Source Code" },
			{ icon: <FaFilePowerpoint/>, link: "", label: "Slides" },
		]
	},
	// { 
	// 	number: 2, title: "functions + procedures", dueDate: "01-21-2021", active: false,
	// 	links: [
	// 		{ icon: <FaFileAlt/>, link: "", label: "Handout" },
	// 		{ icon: <FaCode/>, link: "", label: "Source Code" },
	// 		{ icon: <FaFilePowerpoint/>, link: "", label: "Slides" },
	// 	]
	// },
	// { 
	// 	number: 3, title: "recursion", dueDate: "01-21-2021", active: false,
	// 	links: [
	// 		{ icon: <FaFileAlt/>, link: "", label: "Handout" },
	// 		{ icon: <FaCode/>, link: "", label: "Source Code" },
	// 		{ icon: <FaFilePowerpoint/>, link: "", label: "Slides" },
	// 	]
	// },
	// { 
	// 	number: 4, title: "more recursion", dueDate: "01-21-2021", active: false,
	// 	links: [
	// 		{ icon: <FaFileAlt/>, link: "", label: "Handout" },
	// 		{ icon: <FaCode/>, link: "", label: "Source Code" },
	// 		{ icon: <FaFilePowerpoint/>, link: "", label: "Slides" },
	// 	]
	// },
]

export default labs;