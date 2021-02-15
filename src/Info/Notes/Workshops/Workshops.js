import { FaFilePowerpoint } from "react-icons/fa";

const workshops = [
	{
		number: 4, title: "Recurrence Relations", outDate: "2/12 - 2/13/2021", active: true,
		links: [
			{ icon: <FaFilePowerpoint/>, link: "https://docs.google.com/presentation/d/15SsYVNs1aV2Eya2-brOkwKRyhKtA6Yolu7z84wzVxA0/edit?usp=sharing", label: "Slides" },
		]
	},
	{
		number: 3, title: "Boolean Logic, Lists, and Recursion", outDate: "2/5 - 2/6/2021", active: true,
		links: [
			{ icon: <FaFilePowerpoint/>, link: "https://docs.google.com/presentation/d/1F3rYDxbBOER6mRnSLvLWqPZlKtMUGkcCjLijX3R10go/edit?usp=sharing", label: "Slides" },
		]
	},
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
