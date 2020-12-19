import { MdDescription, MdMovie, MdSlideshow } from 'react-icons/md';

const lectures = [
	{ 
		number: 1, title: "lect1", dueDate: "01-21-2021", active: true,
		links: [
			{ icon: <MdDescription/>, link: "" },
			{ icon: <MdMovie/>, link: "" },
			{ icon: <MdSlideshow/>, link: "" },
		]
	},
	{ 
		number: 2, title: "lect2", dueDate: "01-21-2021", active: false,
		links: [
			{ icon: <MdDescription/>, link: "" },
			{ icon: <MdMovie/>, link: "" },
			{ icon: <MdSlideshow/>, link: "" },
		]
	},
]

export default lectures;