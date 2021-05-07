import { FaQuestion, FaSchool, FaShoePrints, FaComment, FaVideo, FaFileAlt } from 'react-icons/fa';

export const ImportantLinks = [
	{ label: "Syllabus", icon: <FaFileAlt />, link: "", description: "" },
	{ label: "Zoom Link", icon: <FaVideo />, link: "", description: "" },
	{ label: "Gradescope", icon: <FaSchool />, link: "https://www.gradescope.com/", description: "" },
	{ label: "Piazza", icon: <FaQuestion />, link: "https://piazza.com/brown/summer2021/csci0180", description: "" },
	{ label: "SignMeUp", icon: <FaComment />, link: "https://signmeup.cs.brown.edu/", description: "" },
	{ label: "Lab Assignments", icon: <FaShoePrints />, link: "", description: "" },
]

export const Resources = [
	{
		section: "Course Documentation", links:
			[
				{ label: "Syllabus", link: "" },
			]
	},
	{
		section: "Software Installation And Setup", links:
			[
				{ label: "IntelliJ Setup Guide", link: "https://hackmd.io/@cs18-spring-2021/rkqhvPyy_" },
				{ label: "Github Guide", link: "https://hackmd.io/@cs18-spring-2021/BkfI_Pky_" },
				{ label: "Download tester.jar (If prompted, press 'Keep')", link: "" },
				{ label: "Connecting to Department Machines", link: "https://cs.brown.edu/about/system/connecting/ssh/" },
			]
	},
	{
		section: "Working from Home", links:
			[
				// { label: "Work from Home Guide", link: "https://cs.brown.edu/about/system/connecting/ssh/" }, 
				// { label: "SSH Guide", link: "https://drive.google.com/file/d/1PD9C5Bh7uT0dsLY0dhryPF5Kc1KG0GO_/view?usp=sharing" },
				{ label: "Download DrRacket", link: "https://racket-lang.org/download/" },
				{ label: "ReasonML Installation and Compilation Guide", link: "https://drive.google.com/file/d/15EEZHR86owNFpyPWo2gVkimf4XrrrdOW/view?usp=sharing" },
				{ label: "CS17 Racket Installation Video Guide (Mac)", link: "https://drive.google.com/file/d/1wy482mD0ZCqfl8Jcz_25sKV7FeBBGML6/view?usp=sharing" },
				{ label: "CS17 ReasonML Installation Video Guide (Mac)", link: "https://drive.google.com/file/d/1OS-7KPUnBxAquAZsez1L7N_RhjEjtjoT/view?usp=sharing" },
				{ label: "CS17 Racket Installation Video Guide (Windows)", link: "https://drive.google.com/file/d/1GfrL5xz7HQhBbkTxKvHJ5yH4lfQk3lpv/view?usp=sharing" },
				{ label: "CS17 ReasonML Installation Video Guide (Windows)", link: "https://drive.google.com/file/d/15Sw2_5MRtTy5vBe373VP8M4g84LCImSy/view?usp=sharing" },
				{ label: "CS17 Racket Teachpack", link: "https://drive.google.com/file/d/1Yc0e6P3WH-2iSKeCHqTImzAME13CkEAM/view?usp=sharing" },
				// { label: "CS17 ReasonML Teachpack", link: "https://drive.google.com/file/d/1v31kqpdPbmUX15kUSTwcp2hm0hYv_a35/view?usp=sharing" }, 
			]
	},
	{
		section: "Supplementary Material", links:
			[
				{ label: "Ergonomics Guide", link: "https://cs.brown.edu/systems/ergo/" },
				{ label: "Linux Commands", link: "https://drive.google.com/file/d/1_W0HBpP9M1p3C0Tf8Wz2V36swxxFYHzA/view?usp=sharing" },
				{ label: "Introduction to LaTeX2e", link: "http://www.cs.brown.edu/system/software/latex/doc/lshort.pdf" },
				{ label: "LaTeX Symbols", link: "http://www.cs.brown.edu/system/software/latex/doc/symbols.pdf" },
				{ label: "Frequently Used Math Symbols", link: "https://drive.google.com/file/d/1DWTzHQ8NHLYlVSSBq5yI0DclMqY3dtC8/view?usp=sharing" },
				{ label: "ReasonML Library Reference", link: "https://reasonml.github.io/docs/en/overview" },
				{ label: "RegEx Guide", link: "https://drive.google.com/file/d/1KbEclOrZHuH9TusaprXqcC4IoTymcA8d/view?usp=sharing"},
			]
	},
	{
		section: "Departmental Resources", links:
			[
				{ label: "Diversity and Inclusion Student Advocates", link: "https://cs.brown.edu/about/diversity/student-advocates-diversity-and-inclusion/" },
				{ label: "Health and Wellness Student Advocates", link: "https://cs.brown.edu/about/diversity/health-wellness-student-advocates/" },
				{ label: "Other Resources", link: "http://cs.brown.edu/about/diversity/resources/" },
			]
	}
]