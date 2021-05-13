import { FaFileAlt, FaCode } from "react-icons/fa";

const homeworks = [
	{
		number: 0.1, title: "Background Survey", dueDate: "May 16 (AoE)", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://docs.google.com/forms/d/e/1FAIpQLSdLOa2GsyH8KwcB1dEJGgT8emAJH7s19jw2owFTOQp5LMtSIw/viewform?usp=sf_link", label: "Survey" },
		]
	},
        {
		number: 0.2, title: "Socially Responsible Computing", dueDate: "May 21 (AoE)", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://hackmd.io/@cs18-spring-2021/hwk0-src-summer", label: "Handout" },
		]
	},
	{
		number: 1, title: "Classes and Methods", dueDate: "May 21 (AoE)", active: false,
		links: [
			{ icon: <FaFileAlt />, link: "https://hackmd.io/@cs18-spring-2021/HkwD8Zxd_", label: "Handout" },
			{ icon: <FaCode />, link: "", label: "Source Code" },
		]
	},
	{
		number: 2, title: "Interfaces, Lists, and Testing for Mutation", dueDate: "May 28 (AoE)", active: false,
		links: [
			{ icon: <FaFileAlt />, link: "https://hackmd.io/@cs18-spring-2021/S1OY7ExOd", label: "Handout" },
			{ icon: <FaCode />, link: "", label: "Source Code" },
		]
	},
	{
		number: 3, title: "Doubly-Linked Lists", dueDate: "June 4 (AoE)", active: false,
		links: [
			{ icon: <FaFileAlt />, link: "https://hackmd.io/@cs18-spring-2021/Hy9rvuguO", label: "Handout" },
			{ icon: <FaCode />, link: "", label: "Source Code" },
		]
	},
	{
		number: 4, title: "Hashtables, Iterator", dueDate: "June 28 (AoE)", active: false,
		links: [
			{ icon: <FaFileAlt />, link: "https://hackmd.io/@cs18-spring-2021/rydGGMX_d", label: "Handout" },
			{ icon: <FaCode />, link: "", label: "Source Code" },
		]
	},
	{
		number: 5, title: "Scala", dueDate: "July 5 (AoE)", active: false,
		links: [
			{ icon: <FaFileAlt />, link: "https://hackmd.io/@cs18-spring-2021/rJFRSrxdd", label: "Handout" },
			{ icon: <FaCode />, link: "", label: "Source Code" },
		]
	},
	{
		number: 6, title: "Dynamic Programming, SRC", dueDate: "July 23 (AoE)", active: false,
		links: [
			{ icon: <FaFileAlt />, link: "https://hackmd.io/@cs18-spring-2021/r1bmtSgdd", label: "Handout" },
			{ icon: <FaCode />, link: "", label: "Source Code" },
		]
	},
]

export default homeworks;
