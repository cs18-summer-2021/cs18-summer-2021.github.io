import { MdDescription, MdCode, MdSlideshow } from 'react-icons/md';

const projects = [
	{ 
		number: 1, title: "Bignum", dueDate: "2/25/2021 10:59 PM EST", active: false,
		notes: "",
		links: [
			{ icon: <MdDescription/>, link: "", label: "Handout" },
			{ icon: <MdCode/>, link: "", label: "Source Code" },
		]
	},
	{ 
		number: 2, title: "Rackette", dueDate: "03/26/2021 10:59 PM EST", active: false,
		notes: "",
		links: [
			{ icon: <MdDescription/>, link: "", label: "Handout" },
			{ icon: <MdCode/>, link: "", label: "Source Code" },
		]
	},
	{ 
		number: 3, title: "Game", dueDate: "04/08/2021 10:59 PM EST", active: false,
		notes: "",
		links: [
			{ icon: <MdDescription/>, link: "", label: "Handout" },
			{ icon: <MdCode/>, link: "", label: "Source Code" },
		]
	}
]

export default projects;