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
		number: 1, title: "Classes and Methods", dueDate: "May 21 (AoE)", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://hackmd.io/@cs18-spring-2021/hwk1-summer", label: "Handout" },
			{ icon: <FaCode />, link: "https://classroom.github.com/a/MDq3vz6o", label: "Source Code" },
		]
	},
	{
		number: 2, title: "Abstract Classes, Lists, and Mutation", dueDate: "May 28 (AoE)", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://hackmd.io/@cs18-spring-2021/hwk2-summer", label: "Handout" },
			{ icon: <FaCode />, link: "https://classroom.github.com/a/qdDdc9V-", label: "Source Code" },
		]
	},
	{
		number: 3, title: "Doubly-Linked Lists", dueDate: "June 4 (AoE)", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://hackmd.io/@cs18-spring-2021/hwk3-summer", label: "Handout" },
			{ icon: <FaCode />, link: "", label: "Source Code" },
		]
	},
	{
		number: 4, title: "Hashtables", dueDate: "June 28 (AoE)", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://hackmd.io/@cs18-spring-2021/summer-hw4", label: "Handout" },
			{ icon: <FaCode />, link: "https://classroom.github.com/a/1_5j8sUZ", label: "Source Code" },
		]
	},
	{
		number: 5, title: "Scala", dueDate: "July 7 (AoE)", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://hackmd.io/@cs18-spring-2021/hwk5-summer", label: "Handout" },
			{ icon: <FaCode />, link: "https://classroom.github.com/a/DI2HNDbE", label: "Source Code" },
		]
	},
	{
		number: 6, title: "Dynamic Programming, SRC", dueDate: "July 23 (AoE)", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://hackmd.io/@cs18-spring-2021/hwk6-summer", label: "Handout" },
			{ icon: <FaCode />, link: "https://classroom.github.com/a/VtiQgv9u", label: "Source Code" },
		]
	},
]

export default homeworks;
