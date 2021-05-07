import { FaFileAlt, FaCode, FaFilePowerpoint, FaYoutube } from 'react-icons/fa';

const projects = [
	{
		number: 1, title: "Recommender", dueDate: "June 18 (AoE)", active: false,
		notes: "",
		links: [
			{ icon: <FaFileAlt />, link: "https://hackmd.io/@cs18-spring-2021/BJVuAueu_", label: "Handout" },
			{ icon: <FaCode />, link: "", label: "Source Code" },
			// { icon: <FaFilePowerpoint />, link: "", label: "Gearup Slides" },
			// { icon: <FaYoutube />, link: "", label: "Gearup Recording" }
		]
	},
	{
		number: 2, title: "Search", dueDate: "July 16 (AoE)", active: false,
		notes: "",
		links: [
			{ icon: <FaFileAlt />, link: "https://hackmd.io/@cs18-spring-2021/Bk3CR_xuO", label: "Handout" },
			{ icon: <FaCode />, link: "", label: "Source Code" },
			// { icon: <FaFilePowerpoint />, link: "", label: "Gearup Slides" },
			// { icon: <FaYoutube />, link: "", label: "Gearup Recording" }
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