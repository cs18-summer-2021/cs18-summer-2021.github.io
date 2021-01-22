import { FaFileAlt, FaYoutube, FaFilePowerpoint } from 'react-icons/fa';

const classes = [
	// { 
	// 	number: 3, title: "Class 3", outDate: "1/25/2021", active: true,
	// 	links: [
	// 		{ icon: <FaFileAlt/>, link: "", label: "Notes" },
	// 		{ icon: <FaYoutube/>, link: "", label: "Recording" },
	// 		{ icon: <FaFilePowerpoint/>, link: "", label: "Slides" },
	// 	],
	// 	tags: ["Racket"]
	// },
	{ 
		number: 2, title: "BNF and Racket", outDate: "1/22/2021", active: true,
		links: [
			{ icon: <FaFileAlt/>, link: "https://drive.google.com/file/d/1F_EDAtYqw-DW_M1fgBbuILy2s9vowY6H/view?usp=sharing", label: "Notes" },
			{ icon: <FaYoutube/>, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=6ea4ad77-a7f7-4c7d-ba53-acb8011c934d", label: "Recording" },
			{ icon: <FaFilePowerpoint/>, link: "https://drive.google.com/file/d/1_gyZi5469rr-RotMh-Od8sbm3QMuc7CK/view?usp=sharing", label: "Slides" },
		],
		tags: ["Racket", "BNF"]
	},
	{ 
		number: 1, title: "Welcome", outDate: "1/20/2021", active: true,
		links: [
			{ icon: <FaFileAlt/>, link: "https://drive.google.com/file/d/1WwjwOg_BqxoTCqSYvFrWZlUIXMyrv8Q2/view?usp=sharing", label: "Notes" },
			{ icon: <FaYoutube/>, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=5407b5b3-9976-4b50-bcd1-acb6011d1f9c",  label: "Recording" },
			{ icon: <FaFilePowerpoint/>, link: "https://drive.google.com/file/d/1yDSxs9cmu0kmaiuWbqdovtrhtpTLC1WT/view?usp=sharing",  label: "Slides" },
		],
		tags: ["Intro", "Racket"]
	},
]

export default classes;