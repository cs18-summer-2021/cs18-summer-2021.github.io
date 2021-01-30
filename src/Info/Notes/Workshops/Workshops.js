import { FaFilePowerpoint } from "react-icons/fa";

const workshops = [
	{ 
		number: 2, title: "Expressions, Types, and Procedures", outDate: "1/29 - 1/30/2021", active: true,
		links: [
			{ icon: <FaFilePowerpoint/>, link: "https://docs.google.com/presentation/d/1ZDpJO509XxH8qsu2HnPc7qV3zRCXuQdS0x_QAz-3_Xs/edit?usp=sharing", label: "Slides" },
		]
	},
	{ 
		number: 1, title: "Learning CS and Fun with DrRacket", outDate: "1/23/2021", active: true,
		links: [
			{ icon: <FaFilePowerpoint/>, link: "https://docs.google.com/presentation/d/13YCPuSVxMijjb-KoQMlPngVf5g_jh122XAMQ4TlJvcw/edit?usp=sharing", label: "Slides" },
		]
	},
]

export default workshops;