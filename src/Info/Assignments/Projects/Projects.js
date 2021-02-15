import { FaFileAlt, FaCode, FaFilePowerpoint, FaYoutube } from 'react-icons/fa';

const projects = [
	{ 
		number: 1, title: "Bignum", dueDate: "2/25/2021 11:00 PM EST", active: true,
		notes: "",
		links: [
			{ icon: <FaFileAlt/>, link: "https://drive.google.com/file/d/1eLKa8fre_OL8OsuFG2t9gRN23uFUpiom/view?usp=sharing", label: "Handout" },
			{ icon: <FaCode/>, link: "https://drive.google.com/file/d/1xlnQasswzvYxEPTvehiytYrxfmd0WijR/view?usp=sharing", label: "Source Code" },
			{ icon: <FaFilePowerpoint/>, link: "https://docs.google.com/presentation/d/1C-lK2Uo86h1m_cl7l0o54v3mdrYtF__BqjPMDcu4Bg4/edit?usp=sharing", label: "Gearup Slides" },
			{ icon: <FaYoutube/>, link: "https://drive.google.com/file/d/1kZZk8k2OKRQhM4EtXdsrO1ypn7hcIjpm/view?usp=sharing", label: "Gearup Recording"}
		]
	},
	{ 
		number: 2, title: "Rackette", dueDate: "03/26/2021 11:00 PM EST", active: false,
		notes: "",
		links: [
			{ icon: <FaFileAlt/>, link: "", label: "Handout" },
			{ icon: <FaCode/>, link: "", label: "Source Code" },
		]
	},
	{ 
		number: 3, title: "Game", dueDate: "04/08/2021 11:00 PM EST", active: false,
		notes: "",
		links: [
			{ icon: <FaFileAlt/>, link: "", label: "Handout" },
			{ icon: <FaCode/>, link: "", label: "Source Code" },
		]
	}
]

export default projects;