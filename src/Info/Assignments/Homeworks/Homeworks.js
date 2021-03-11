import { FaFileAlt, FaCode } from "react-icons/fa";

const homeworks = [
	{ 
		number: 1, title: "Warmup", dueDate: "1/27/2021 11:00 PM EST", active: true,
		links: [
			{ icon: <FaFileAlt/>, link: "https://drive.google.com/file/d/1CM9UxSoXK7fYM6TWang9DvxJ2rKrIRCM/view?usp=sharing", label: "Handout" },
		]
	},
	{ 
		number: 2, title: "Functions & Procedures", dueDate: "2/03/2021 11:00 PM EST", active: true,
		links: [
			{ icon: <FaFileAlt/>, link: "https://drive.google.com/file/d/1zATcZwoJA3y5JVLWWEaaCIF3XyPNVRCI/view?usp=sharing", label: "Handout" },
		]
	},
	{ 
		number: 3, title: "Recursion", dueDate: "2/10/2021 11:00 PM EST", active: true,
		links: [
			{ icon: <FaFileAlt/>, link: "https://drive.google.com/file/d/1xWYOCZjZrEKMcjGuWUa_kR_aaOr3NfOB/view?usp=sharing", label: "Handout" },
		]
	},
	{ 
		number: 4, title: "More Recursion", dueDate: "2/19/2021 11:00 PM EST", active: true,
		links: [
			{ icon: <FaFileAlt/>, link: "https://drive.google.com/file/d/1Olrp-3y-nIH8BTB54FLVONYbLHqaOq7O/view?usp=sharing", label: "Handout" },
		]
	},
	{ 
		number: 5, title: "Higher-Order Procedures", dueDate: "2/26/2021 11:00 PM EST", active: true,
		links: [
			{ icon: <FaFileAlt/>, link: "https://drive.google.com/file/d/1HapsHQ6dLOiNT8vZmGaH3cAAt4bAYvii/view?usp=sharing", label: "Handout" },
		]
	},
	{ 
		number: 6, title: "Subsets", dueDate: "3/03/2021 11:00 PM EST", active: true,
		links: [
			{ icon: <FaFileAlt/>, link: "https://drive.google.com/file/d/1qRpjRyraEz_bOsegEQprsdLaT-u4YObC/view?usp=sharing", label: "Handout" },
			{ icon: <FaCode/>, link: "https://drive.google.com/file/d/1GJ-TgdlFINyXHE_mWBNd9giBVIJcoO1A/view?usp=sharing", label: "Source Code" },
		]
	},
	{ 
		number: 7, title: "ReasonML/Matrices", dueDate: "3/10/2021 11:00 PM EST", active: true,
		links: [
			{ icon: <FaFileAlt/>, link: "https://drive.google.com/file/d/13npD9kUxIshPn0ryVWxWWD9KTyguJ2gg/view?usp=sharing", label: "Handout" },
			{ icon: <FaCode/>, link: "https://drive.google.com/file/d/1Dz7DgCr6CmO__Olg5FKFmEVObe-hgpUS/view?usp=sharing", label: "Source Code" },
		]
	},
	{ 
		number: 8, title: "Rackettecita", dueDate: "3/17/2021 11:00 PM EST", active: true,
		links: [
			{ icon: <FaFileAlt/>, link: "https://drive.google.com/file/d/1uWx4kWP5LEePRNzDNrl8yJWzrnhHm5Z2/view?usp=sharing", label: "Handout" },
			{ icon: <FaCode/>, link: "https://drive.google.com/file/d/1rK9triCby7Kmh9snQdwkNhAr7nVVMak4/view?usp=sharing", label: "Source Code" },
		]
	},
	{ 
		number: 9, title: "Homework 9", dueDate: "3/24/2021 11:00 PM EST", active: false,
		links: [
			{ icon: <FaFileAlt/>, link: "", label: "Handout" },
			{ icon: <FaCode/>, link: "", label: "Source Code" },
		]
	},
	{ 
		number: 10, title: "Homework 10", dueDate: "3/31/2021 11:00 PM EST", active: false,
		links: [
			{ icon: <FaFileAlt/>, link: "", label: "Handout" },
			{ icon: <FaCode/>, link: "", label: "Source Code" },
		]
	},
	{ 
		number: 11, title: "Homework 11", dueDate: "4/07/2021 11:00 PM EST", active: false,
		links: [
			{ icon: <FaFileAlt/>, link: "", label: "Handout" },
			{ icon: <FaCode/>, link: "", label: "Source Code" },
		]
	}
]

export default homeworks;