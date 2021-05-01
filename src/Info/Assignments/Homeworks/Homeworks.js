import { FaFileAlt, FaCode } from "react-icons/fa";

const homeworks = [
	{
		number: 0, title: "Socially Responsible Computing", dueDate: "1/27/2021 11:00 p.m. EDT", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "", label: "Handout" },
		]
	},
	{
		number: 1, title: "Classes and Methods", dueDate: "1/27/2021 11:00 p.m. EDT", active: false,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1CM9UxSoXK7fYM6TWang9DvxJ2rKrIRCM/view?usp=sharing", label: "Handout" },
		]
	},
	{
		number: 2, title: "Interfaces, Lists, and Testing for Mutation", dueDate: "2/03/2021 11:00 p.m. EDT", active: false,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1zATcZwoJA3y5JVLWWEaaCIF3XyPNVRCI/view?usp=sharing", label: "Handout" },
		]
	},
	{
		number: 3, title: "Doubly-Linked Lists", dueDate: "2/10/2021 11:00 p.m. EDT", active: false,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1xWYOCZjZrEKMcjGuWUa_kR_aaOr3NfOB/view?usp=sharing", label: "Handout" },
		]
	},
	{
		number: 4, title: "Hashtables, Iterator", dueDate: "2/19/2021 11:00 p.m. EDT", active: false,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1Olrp-3y-nIH8BTB54FLVONYbLHqaOq7O/view?usp=sharing", label: "Handout" },
		]
	},
	{
		number: 5, title: "Scala", dueDate: "2/26/2021 11:00 p.m. EDT", active: false,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1HapsHQ6dLOiNT8vZmGaH3cAAt4bAYvii/view?usp=sharing", label: "Handout" },
		]
	},
	{
		number: 6, title: "Dynamic Programming, SRC", dueDate: "3/03/2021 11:00 p.m. EDT", active: false,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1qRpjRyraEz_bOsegEQprsdLaT-u4YObC/view?usp=sharing", label: "Handout" },
			{ icon: <FaCode />, link: "https://drive.google.com/file/d/1GJ-TgdlFINyXHE_mWBNd9giBVIJcoO1A/view?usp=sharing", label: "Source Code" },
		]
	},
]

export default homeworks;