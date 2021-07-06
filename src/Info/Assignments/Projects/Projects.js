import { FaFileAlt, FaCode, FaFilePowerpoint, FaYoutube } from 'react-icons/fa';

const projects = [
	{
		number: 1, title: "Recommender", dueDate: "June 18 (AoE)", active: true,
		notes: "",
		links: [
			{ icon: <FaFileAlt />, link: "https://hackmd.io/@cs18-spring-2021/recommender", label: "Handout" },
		]
	},
	{
		number: 2, title: "Search", dueDate: "July 16 (AoE)", active: true,
		notes: "",
		links: [
			{ icon: <FaFileAlt />, link: "https://hackmd.io/QlXr9CCHSumgk5i-0vhldg", label: "Handout" },
		]
	},
	{
		number: 3, title: "Mini-Project: Model Checking", dueDate: "Aug. 6 (AoE)", active: false,
		notes: "",
		links: [
			{ icon: <FaFileAlt />, link: "https://hackmd.io/@cs18-spring-2021/rkkuytg_u", label: "Handout" },
			{ icon: <FaCode />, link: "", label: "Source Code" },
		]
	}
]

export default projects;