import { MdDescription, MdCode, MdSlideshow } from 'react-icons/md';

const labs = [
	{ 
		number: 1, title: "warmup", dueDate: new Date('01 Jan 2021 00:00:00 EST'), 
		links: [
			{ icon: <MdDescription/>, link: "" },
			{ icon: <MdCode/>, link: "" },
			{ icon: <MdSlideshow/>, link: "" },
		]
	},
	{ 
		number: 2, title: "functions + procedures", dueDate: new Date('08 Feb 2021 00:00:00 EST'), 
		links: [
			{ icon: <MdDescription/>, link: "" },
			{ icon: <MdCode/>, link: "" },
			{ icon: <MdSlideshow/>, link: "" },
		]
	},
	{ 
		number: 3, title: "recursion", dueDate: new Date('08 Feb 2021 00:00:00 EST'), 
		links: [
			{ icon: <MdDescription/>, link: "" },
			{ icon: <MdCode/>, link: "" },
			{ icon: <MdSlideshow/>, link: "" },
		]
	},
	{ 
		number: 4, title: "more recursion", dueDate: new Date('08 Feb 2021 00:00:00 EST'), 
		links: [
			{ icon: <MdDescription/>, link: "" },
			{ icon: <MdCode/>, link: "" },
			{ icon: <MdSlideshow/>, link: "" },
		]
	},
]

export default labs;