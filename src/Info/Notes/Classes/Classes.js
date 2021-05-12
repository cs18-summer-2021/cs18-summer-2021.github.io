import { FaFileAlt, FaYoutube, FaFilePowerpoint, FaPencilRuler, FaWrench, FaBook } from 'react-icons/fa';

const staticBasePath = "/static/classes";
const classes = [
    {
		number: 1, title: "Intro and Classes", outDate: "May 12", active: true,
		links: [
		    { icon: <FaBook />,
		      link: `${staticBasePath}/1/dillo.ml`,
		      label: "Setup/Prep" },
		    { icon: <FaFileAlt />,
		      link: `${staticBasePath}/1/lec01.pdf`,
		      label: "Notes" },
		    { icon: <FaYoutube />,
		      link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=ebcf6e7a-354d-463d-921c-ad26010b74aa",
		      label: "Video" },
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
		tags: [ "Java", "Classes" ]
	},
]

export default classes;
