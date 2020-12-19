import { MdDescription, MdCode, MdSlideshow } from 'react-icons/md';

const projects = [
	{ 
		number: 1, title: "Bignum", dueDate: "01-21-2021", active: false,
		notes: "",
		links: [
			{ icon: <MdDescription/>, link: "" },
			{ icon: <MdCode/>, link: "" },
		]
	},
	{ 
		number: 2, title: "Rackette", dueDate: "01-21-2021", active: false,
		notes: "",
		links: [
			{ icon: <MdDescription/>, link: "" },
			{ icon: <MdCode/>, link: "" },
		]
	},
	{ 
		number: 3, title: "Game", dueDate: "01-21-2021", active: false,
		notes: "",
		links: [
			{ icon: <MdDescription/>, link: "" },
			{ icon: <MdCode/>, link: "" },
		]
	},
]

export default projects;