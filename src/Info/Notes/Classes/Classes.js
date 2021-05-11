import { FaFileAlt, FaYoutube, FaFilePowerpoint } from 'react-icons/fa';

const classes = [
	{
		number: 1, title: "Welcome", outDate: "May 12", active: false,
		links: [
			{ icon: <FaFileAlt />, link: "", label: "Notes" },
			{ icon: <FaYoutube />, link: "", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "", label: "Slides" },
		],
		tags: []
	},
]

export default classes;
