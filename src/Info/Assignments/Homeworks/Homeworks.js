import { MdDescription, MdCode } from 'react-icons/md';

const homeworks = [
	{ section: "Intro", assignments: 
		[
			{ 
				number: 1, title: "warmup", dueDate: new Date('01 Jan 2021 00:00:00 EST'), active: true,
				links: [
					{ icon: <MdDescription/>, link: "" },
					{ icon: <MdCode/>, link: "" },
				]
			},
			{ 
				number: 2, title: "functions + procedures", dueDate: new Date('08 Feb 2021 00:00:00 EST'), active: true,
				links: [
					{ icon: <MdDescription/>, link: "" },
					{ icon: <MdCode/>, link: "" },
				]
			},
		]
	},
	{ section: "Recursion", assignments: 
		[
			{ 
				number: 3, title: "recursion", dueDate: new Date('08 Feb 2021 00:00:00 EST'), active: true,
				links: [
					{ icon: <MdDescription/>, link: "" },
					{ icon: <MdCode/>, link: "" },
				]
			},
			{ 
				number: 4, title: "more recursion", dueDate: new Date('08 Feb 2021 00:00:00 EST'), active: false,
				links: [
					{ icon: <MdDescription/>, link: "" },
					{ icon: <MdCode/>, link: "" },
				]
			},
		]
	}
]

export default homeworks;