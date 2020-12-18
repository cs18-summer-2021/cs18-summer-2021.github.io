import { MdDescription, MdCode, MdSlideshow } from 'react-icons/md';

const projects = [
	{ 
		number: 1, title: "bignum", dueDate: new Date('01 Jan 2021 00:00:00 EST'), 
		links: [
			{ icon: <MdDescription/>, link: "" },
			{ icon: <MdCode/>, link: "" },
		]
	},
	{ 
		number: 2, title: "rackette", dueDate: new Date('08 Feb 2021 00:00:00 EST'), 
		links: [
			{ icon: <MdDescription/>, link: "" },
			{ icon: <MdCode/>, link: "" },
		]
	},
	{ 
		number: 3, title: "game", dueDate: new Date('08 Feb 2021 00:00:00 EST'), 
		links: [
			{ icon: <MdDescription/>, link: "" },
			{ icon: <MdCode/>, link: "" },
		]
	},
]

export default projects;