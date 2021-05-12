import { FaFileAlt, FaYoutube, FaFilePowerpoint } from 'react-icons/fa';

const classes = [
    {
		number: 1, title: "Intro and Classes", outDate: "May 12", active: true,
		links: [
		    { icon: <FaMap />,
		      link: "https://brown-cs18-master.github.io/content/lectures/01intro/dillo.ml",
		      label: "Setup/Prep" },
		    { icon: <FaFileAlt />,
		      link: "https://cs18-summer-2021.github.io/src/Info/Notes/Classes/lec01.pdf",
		      label: "Notes" },
		    { icon: <FaYoutube />,
		      link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=ebcf6e7a-354d-463d-921c-ad26010b74aa",
		      label: "Video" },
		     { icon: <FaCogs />,
		      link: "https://brown-cs18-master.github.io/content/practice/01classes.pdf",
		      label: "Practice Probs" },
		],
		tags: []
    },
    {
		number: 2, title: "Methods and Testing", outDate: "May 14", active: true,
		links: [
		    { icon: <FaFileAlt />,
		      link: "https://hackmd.io/@cs18-spring-2021/lec02setup",
		      label: "Setup/Prep" },
		    //{ icon: <FaFileAlt />,
		    //  link: "https://cs18-summer-2021.github.io/src/Info/Notes/Classes/lec01.pdf",
		    //  label: "Notes" },
		    //{ icon: <FaYoutube />,
		    //  link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=ebcf6e7a-354d-463d-921c-ad26010b74aa",
		    //  label: "Video" },
		],
		tags: []
	},
]

export default classes;
