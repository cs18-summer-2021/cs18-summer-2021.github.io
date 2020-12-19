import { MdSlideshow } from 'react-icons/md';

const workshops = [
	{ 
		number: 1, title: "workshop1", dueDate: "01-21-2021", active: true,
		links: [
			{ icon: <MdSlideshow/>, link: "" },
		]
	},
	{ 
		number: 2, title: "workshop2", dueDate: "01-21-2021", active: false,
		links: [
			{ icon: <MdSlideshow/>, link: "" },
		]
	},
]

export default workshops;