import { FaFilePowerpoint, FaYoutube } from "react-icons/fa";

const workshops = [
	{
		number: 10, title: "Final Exam Review", outDate: "4/19 - 3/20/2021", active: true,
		links: [
			{ icon: <FaFilePowerpoint/>, link: "https://docs.google.com/presentation/d/1SIS1vCOdcW4yANC9VSawF9izI9nUD9Nmff-jjewiAFU/edit?usp=sharing", label: "Slides" },
			{ icon: <FaYoutube/>, link: "https://drive.google.com/file/d/1Mkt8_oNfCLR5RZyqGgrFCWLmof2HxLWP/view?usp=sharing", label: "Recording" },
		]
	},
	{
		number: 9, title: "Debugging Tips, Modules, and Trees", outDate: "3/19 - 3/20/2021", active: true,
		links: [
			{ icon: <FaFilePowerpoint/>, link: "https://docs.google.com/presentation/d/11OrVTok8PDq7veWCr-jPw9GZECHc5QzOU_HL-fXEZgI/edit?usp=sharing", label: "Slides" },
		]
	},
	{
		number: 7, title: "More ReasonML", outDate: "3/5 - 3/6/2021", active: true,
		links: [
			{ icon: <FaFilePowerpoint/>, link: "https://docs.google.com/presentation/d/1cbcht4D5Lx5yo1Vi7srlV-rPFBVGELGog43K-jdFt64/edit?usp=sharing", label: "Slides" },
		]
	},
	{
		number: 6, title: "Let Expressions and Intro to ReasonML", outDate: "2/26 - 2/27/2021", active: true,
		links: [
			{ icon: <FaFilePowerpoint/>, link: "https://docs.google.com/presentation/d/1y6T1iZY_0-X0uRM2UgOpU92taVSzeU0HvHMVhPZr2lY/edit?usp=sharing", label: "Slides" },
		]
	},
	{
		number: 5, title: "Analysis, Lambda Expressions, and HOPs", outDate: "2/19 - 2/20/2021", active: true,
		links: [
			{ icon: <FaFilePowerpoint/>, link: "https://docs.google.com/presentation/d/1T5gniCdUjZDYBm-QCMQOAuuHWnqtxsI3dkKE8Sp4vBo/edit?usp=sharing", label: "Slides" },
		]
	},
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
