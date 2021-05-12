import { FaQuestion, FaSchool, FaShoePrints, FaComment, FaVideo, FaFileAlt } from 'react-icons/fa';

export const ImportantLinks = [
	{ label: "Syllabus", icon: <FaFileAlt />, link: "https://hackmd.io/@cs18-spring-2021/syllabus-summer", description: "For late day and grading policy" },
	{ label: "Zoom Link", icon: <FaVideo />, link: "https://brown.zoom.us/j/97494424082?pwd=QW1EckRVU2lPVVhZbnRFdnAxVjBDZz09", description: "" },
	{ label: "Gradescope", icon: <FaSchool />, link: "https://www.gradescope.com/", description: "Submit homework, projects, and exams" },
	{ label: "EdStem", icon: <FaQuestion />, link: "https://edstem.org/us/courses/5623/discussion/", description: "Ask clarification, debugging, and conceptual questions" },
	{ label: "SignMeUp", icon: <FaComment />, link: "https://signmeup.cs.brown.edu/", description: "Sign up for TA hours" },
	{ label: "Lab Switch", icon: <FaShoePrints />, link: "https://forms.gle/kpVmeVpzYx5dohoj7", description: "Make a temporary or permanent lab switch" },
]

export const Resources = [
	{
		section: "Course Documentation", note: "", links:
			[
				{ label: "Syllabus", link: "https://hackmd.io/@cs18-spring-2021/syllabus-summer" },
				{ label: "Collaboration Policy", link: "https://hackmd.io/@cs18-spring-2021/H1bI7WX1d" },
				{ label: "TA Hours Guide", link: "https://hackmd.io/@cs18-spring-2021/H1-qgOkkO" },
				{ label: "Pair Programming Guide", link: "https://hackmd.io/@cs18-spring-2021/rk1u3BZk_" },
				{ label: "Debugging Guide", link: "https://hackmd.io/@cs18-spring-2021/rkkNS5kkd" },
			]
	},
	{
		section: "Software Installation And Setup", note: "", links:
			[
				{ label: "IntelliJ Setup Guide", link: "https://hackmd.io/@cs18-spring-2021/rkqhvPyy_" },
				{ label: "Github Guide", link: "https://hackmd.io/@cs18-spring-2021/BkfI_Pky_" },
				{ label: "IntelliJ Common Problems", link: "https://hackmd.io/@cs18-spring-2021/SJgen0L_d" },
				{ label: "Download tester.jar (If prompted, press 'Keep')", link: "" },
				{ label: "Connecting to Department Machines", link: "https://cs.brown.edu/about/system/connecting/ssh/" },
			]
	},
	{
		section: "Coding Guidelines", note: "", links:
			[
				{ label: "Java Good Coding Practices", link: "https://hackmd.io/@cs18-spring-2021/S1H3RpLd_" },
				{ label: "Scala Good Coding Practices", link: "" },
				{ label: "Java Style Guide", link: "https://hackmd.io/@cs18-spring-2021/Sy7vHMuuu" },
				{ label: "Scala Style Guide", link: "" },
				{ label: "Java Documentation", link: "https://docs.oracle.com/javase/8/docs/api/" },
				{ label: "Scala Documentation", link: "http://www.scala-lang.org/api/current/index.html" },
				{ label: "Tester Documentation", link: "https://course.ccs.neu.edu/cs2510/tester-doc.html" },
			]
	},
	{
		section: "Supplementary Material", note: "", links:
			[
				{ label: "Ergonomics Guide", link: "https://cs.brown.edu/systems/ergo/" },
				{ label: "Using the Terminal / vim / git", link: "https://hackmd.io/@cs18-spring-2021/H1Ss36L_d" },
				{ label: "Introduction to LaTeX2e", link: "http://www.cs.brown.edu/system/software/latex/doc/lshort.pdf" },
				{ label: "Detailed Linux Commands", link: "https://drive.google.com/file/d/1_W0HBpP9M1p3C0Tf8Wz2V36swxxFYHzA/view?usp=sharing" },
				{ label: "LaTeX Symbols", link: "http://www.cs.brown.edu/system/software/latex/doc/symbols.pdf" },
				{ label: "RegEx Guide", link: "https://drive.google.com/file/d/1KbEclOrZHuH9TusaprXqcC4IoTymcA8d/view?usp=sharing" },
			]
	},
	{
		section: "Departmental Resources",
		note: "If you need accommodation for your physical and mental health, please reach out to Professor Fisler at kfisler@cs.brown.edu — we want to support you as much as we can in the most comfortable way for you. It is important to note that TAs should not be handling health and accomodations information, so inquiries should be directed towards the professor only.",
		links:
			[
				{ label: "Undergraduate Missive", link: "http://cs.brown.edu/courses/ta/pubs/ugrad_missive.pdf" },
				{ label: "Information on Accommodations", link: "https://cs.brown.edu/media/filer_public/03/0a/030a6a2e-7a61-4c30-98c1-dce87b9d9899/brown_cs_health_and_wellness_resources.pdf" },
				{ label: "Diversity and Inclusion Student Advocates", link: "https://cs.brown.edu/about/diversity/student-advocates-diversity-and-inclusion/" },
				{ label: "Health and Wellness Student Advocates", link: "https://cs.brown.edu/about/diversity/health-wellness-student-advocates/" },
				{ label: "Women in Computer Science", link: "https://cs.brown.edu/people/orgs/wics/" },
				{ label: "MOSAIC+", link: "https://mosaic-plus-brown.github.io/mosaic/" },
				{ label: "Other Resources", link: "http://cs.brown.edu/about/diversity/resources/" },
			]
	}
]