import { FaFileAlt, FaYoutube, FaFilePowerpoint } from 'react-icons/fa';

const classes = [
	{ 
		number: 1, title: "Welcome", outDate: "1/20/2021", active: true,
		links: [
			{ icon: <FaFileAlt/>, link: "https://drive.google.com/file/d/1WwjwOg_BqxoTCqSYvFrWZlUIXMyrv8Q2/view?usp=sharing", label: "Notes" },
			{ icon: <FaYoutube/>, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=5407b5b3-9976-4b50-bcd1-acb6011d1f9c",  label: "Recording" },
			{ icon: <FaFilePowerpoint/>, link: "https://drive.google.com/file/d/1yDSxs9cmu0kmaiuWbqdovtrhtpTLC1WT/view?usp=sharing",  label: "Slides" },
		],
		tags: ["Intro", "Racket"]
	},
	// { 
	// 	number: 2, title: "lect2", outDate: "01-21-2021", active: true,
	// 	links: [
	// 		{ icon: <FaFileAlt/>, link: "" },
	// 		{ icon: <MdMovie/>, link: "" },
	// 		{ icon: <FaFilePowerpoint/>, link: "" },
	// 	],
	// 	tags: ["Racket"]
	// },
]

export default classes;