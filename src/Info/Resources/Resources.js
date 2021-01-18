import { FaQuestion, FaSchool, FaShoePrints, FaComment, FaVideo, FaFileAlt } from 'react-icons/fa';

export const ImportantLinks = [
	{ label: "Syllabus", icon: <FaFileAlt/>, link: "https://drive.google.com/file/d/1bq2CtI6MPb-UBnYUYjGlamD-Y673cAJ5/view?usp=sharing", description: "" },
	{ label: "Zoom Link", icon: <FaVideo/>, link: "", description: "" },
	{ label: "Gradescope", icon: <FaSchool/>, link: "https://www.gradescope.com/", description: "" },
	{ label: "Piazza", icon: <FaQuestion/>, link: "https://piazza.com/brown/spring2021/csci0170", description: "" },
	{ label: "SignMeUp", icon: <FaComment/>, link: "https://signmeup.cs.brown.edu/", description: "" },
	{ label: "Gather.town", icon: <FaShoePrints/>, link: "https://gather.town/app/25flyuQ4CU2Z94O1/cs17lab", description: "" },
]

export const Resources = [
	{ section: "Course Documentation", links: 
		[
			{ label: "Course Policies/Collaboration Policy", link: "https://drive.google.com/file/d/1hWf7SbiKzixyK3B3H1Jryd9CgYajsOyZ/view?usp=sharing" }, 
			{ label: "Guide to TA Hours", link: "https://drive.google.com/file/d/1cABC3l7NfIcoGJJ4v1kX9biy60creX8-/view?usp=sharing" },
			{ label: "Pair Programming Guide", link: "https://drive.google.com/file/d/1tsxOA-v8KdLKRk3-gSnWMJpvSD5EmS_T/view?usp=sharing" }, 
			{ label: "Design Recipe Guide", link: "https://drive.google.com/file/d/1SYMB8NLh5BptdaSnlPTbdwNokszjNN1X/view?usp=sharing" },
			{ label: "Piazza Guide", link: "https://drive.google.com/file/d/1FhanZKhjaixiW3huPNS9uD8OyVgipLY0/view?usp=sharing" }
		]
	},
	{ section: "CS17 Language Guides", links: 
		[
			{ label: "General Style Guide", link: "https://drive.google.com/file/d/1vpQYJOJzFr5lUkodyuxzn_u-KVXAMAX1/view?usp=sharing" }, 
			{ label: "Racket to ReasonML", link: "https://drive.google.com/file/d/1kk7qKwy7NLLZx-gqyZRSbw9MiTF5ExVP/view?usp=sharing" }, 
			{ label: "Racket Style Guide", link: "https://drive.google.com/file/d/1CHuEpQ01N6LSUBeyZer5Di1QxFDIUsvl/view?usp=sharing" },
			{ label: "ReasonML Debugging", link: "https://drive.google.com/file/d/1SvePYEiHwqP6DMkdAcrus8UEZg3oe3QC/view?usp=sharing" }, 
			{ label: "ReasonML Style Guide", link: "https://drive.google.com/file/d/1olLwJEND7l6UR_NvehxaG1yzdPq3lmZ6/view?usp=sharing" }
			// { label: "CS17 Racket Built-in Procedures and Data", link: "https://drive.google.com/file/d/1Aosl7flOkF0jdolTfrDABwrBVp2SSiQI/view?usp=sharing" },
		]
	},
	{ section: "Working from Home", links: 
		[
			// { label: "Work from Home Guide", link: "https://cs.brown.edu/about/system/connecting/ssh/" }, 
			// { label: "SSH Guide", link: "https://drive.google.com/file/d/1PD9C5Bh7uT0dsLY0dhryPF5Kc1KG0GO_/view?usp=sharing" },
			{ label: "Download DrRacket", link: "https://racket-lang.org/download/" }, 
			{ label: "ReasonML Installation and Compilation Guide", link: "https://drive.google.com/file/d/15EEZHR86owNFpyPWo2gVkimf4XrrrdOW/view?usp=sharing" },
			{ label: "CS17 Racket Installation Video Guide (Mac)", link: "https://drive.google.com/file/d/1wy482mD0ZCqfl8Jcz_25sKV7FeBBGML6/view?usp=sharing" },
			{ label: "CS17 ReasonML Installation Video Guide (Mac)", link: "https://drive.google.com/file/d/1OS-7KPUnBxAquAZsez1L7N_RhjEjtjoT/view?usp=sharing" },
			{ label: "CS17 Racket Installation Video Guide (Windows)", link: "https://drive.google.com/file/d/1GfrL5xz7HQhBbkTxKvHJ5yH4lfQk3lpv/view?usp=sharing" },
			{ label: "CS17 ReasonML Installation Video Guide (Windows)", link: "https://drive.google.com/file/d/1v5Iwvu5hI-w8aKkEWQHB-ZGgKqGO35iw/view?usp=sharing" },
			{ label: "CS17 Racket Teachpack", link: "https://drive.google.com/file/d/1Yc0e6P3WH-2iSKeCHqTImzAME13CkEAM/view?usp=sharing" },
			// { label: "CS17 ReasonML Teachpack", link: "https://drive.google.com/file/d/1v31kqpdPbmUX15kUSTwcp2hm0hYv_a35/view?usp=sharing" }, 
		]
	},	
	{ section: "Supplementary Material", links: 
		[
			{ label: "Ergonomics Guide", link: "https://cs.brown.edu/systems/ergo/" }, 
			{ label: "Linux Commands", link: "https://drive.google.com/file/d/1_W0HBpP9M1p3C0Tf8Wz2V36swxxFYHzA/view?usp=sharing" },
			{ label: "Introduction to LaTeX2e", link: "http://www.cs.brown.edu/system/software/latex/doc/lshort.pdf" }, 
			{ label: "LaTeX Symbols", link: "http://www.cs.brown.edu/system/software/latex/doc/symbols.pdf" },
			{ label: "Frequently Used Math Symbols", link: "https://drive.google.com/file/d/1DWTzHQ8NHLYlVSSBq5yI0DclMqY3dtC8/view?usp=sharing" }, 
			{ label: "ReasonML Library Reference", link: "https://reasonml.github.io/docs/en/overview" },
		]
	},
	{ section: "Departmental Resources", links:
		[
			{ label: "Diversity and Inclusion Student Advocates", link: "https://cs.brown.edu/about/diversity/student-advocates-diversity-and-inclusion/" },
			{ label: "Health and Wellness Student Advocates", link: "https://cs.brown.edu/about/diversity/health-wellness-student-advocates/" },
			{ label: "Other Resources", link: "http://cs.brown.edu/about/diversity/resources/" },
		]
	}
]