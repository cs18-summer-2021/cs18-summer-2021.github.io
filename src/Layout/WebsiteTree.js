import { MdNotificationsNone } from "react-icons/md";

const tree = [
	{ label: "Home", navigation: "/", children: [] },
	{ label: "Notes", navigation: "/lectures", children: 
		[
			{ label: "Lectures", navigation: "/lectures", children: [] },
			{ label: "Workshops", navigation: "/workshops", children: [] },
		] 
	},
	{ label: "Assignments", navigation: "/homeworks", children: 
		[
			{ label: "Homeworks", navigation: "/homeworks", children: [] },
			{ label: "Labs", navigation: "/labs", children: [] },
			{ label: "Projects", navigation: "/projects", children: [] },
		] 
	},
	{ label: "Resources", navigation: "/resources", children: [] },
	{ label: "Staff", navigation: "/staff", children: [] }
]

export default tree;