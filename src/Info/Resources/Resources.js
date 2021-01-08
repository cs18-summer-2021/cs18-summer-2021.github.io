import { FaQuestion, FaSchool, FaShoePrints, FaComment, FaVideo, FaFileAlt } from 'react-icons/fa';

export const ImportantLinks = [
	{ label: "Syllabus", icon: <FaFileAlt/>, link: "", description: "" },
	{ label: "Zoom Link", icon: <FaVideo/>, link: "", description: "" },
	{ label: "Gradescope", icon: <FaSchool/>, link: "", description: "" },
	{ label: "Piazza", icon: <FaQuestion/>, link: "https://piazza.com/brown/spring2021/csci0170", description: "" },
	{ label: "SignMeUp", icon: <FaComment/>, link: "https://signmeup.cs.brown.edu/", description: "" },
	{ label: "Gather.town", icon: <FaShoePrints/>, link: "", description: "" },
]

export const Resources = [
	{ section: "Course Documentation", links: 
		[
			{ label: "Course Policies/Collaboration Policy", link: "" }, { label: "Guide to TA Hours", link: "" },
			{ label: "Pair Programming Guide", link: "" }, { label: "Design Recipe Guide", link: "" },
			{ label: "Piazza Guide", link: "" }
		]
	},
	{ section: "CS17 Language Guides", links: 
		[
			{ label: "CS17 General Style Guide", link: "" }, { label: "CS17 Racket Style Guide", link: "" },
			{ label: "Racket to ReasonML", link: "" }, { label: "CS17 ReasonML Style Guide", link: "" },
			{ label: "ReasonML Debugging", link: "" }, { label: "CS17 Racket Built-in Procedures and Data", link: "" },
		]
	},
	{ section: "Supplementary Material", links: 
		[
			{ label: "Ergonomics Guide", link: "" }, { label: "Linux Commands", link: "" },
			{ label: "Introduction to LaTeX2e", link: "" }, { label: "LaTeX Symbols", link: "" },
			{ label: "Frequently Used Math Symbols", link: "" }, { label: "ReasonML Library Reference", link: "" },
		]
	},
	{ section: "Working from Home", links: 
		[
			{ label: "Work from Home Guide", link: "" }, { label: "SSH Guide", link: "" },
			{ label: "Download DrRacket", link: "" }, { label: "CS17 Racket Teachpack", link: "" },
			{ label: "CS17 ReasonML Teachpack", link: "" }, { label: "ReasonML Installation and Compilation Guide", link: "" },
		]
	},
]