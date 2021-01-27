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