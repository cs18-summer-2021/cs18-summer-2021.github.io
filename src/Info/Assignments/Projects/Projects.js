import { FaFileAlt, FaCode, FaFilePowerpoint, FaYoutube } from 'react-icons/fa';

const projects = [
	{
		number: 1, title: "Recommender", dueDate: "2/25/2021 11:00 p.m. EDT", active: false,
		notes: "",
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1eLKa8fre_OL8OsuFG2t9gRN23uFUpiom/view?usp=sharing", label: "Handout" },
			{ icon: <FaCode />, link: "https://drive.google.com/file/d/1xlnQasswzvYxEPTvehiytYrxfmd0WijR/view?usp=sharing", label: "Source Code" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1C-lK2Uo86h1m_cl7l0o54v3mdrYtF__BqjPMDcu4Bg4/edit?usp=sharing", label: "Gearup Slides" },
			{ icon: <FaYoutube />, link: "https://drive.google.com/file/d/1kZZk8k2OKRQhM4EtXdsrO1ypn7hcIjpm/view?usp=sharing", label: "Gearup Recording" }
		]
	},
	{
		number: 2, title: "Search", dueDate: "03/26/2021 11:00 p.m. EDT", active: false,
		notes: "",
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1PreiLyxN5YiRN_G9zPEKwCpRhwYqHprJ/view?usp=sharing", label: "Handout" },
			{ icon: <FaCode />, link: "https://drive.google.com/drive/folders/1BFtO38_OYq_pIyqOqFSliYWrk5cNg1B0?usp=sharing", label: "Source Code" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1cJTa3k8l2qRlfg80qu_GRxPyh00woBwB5LXOBkJSPDE/edit?usp=sharing", label: "Gearup Slides" },
			{ icon: <FaYoutube />, link: "https://drive.google.com/file/d/1QD3tdYnT4hXjCJWc03l6xjqDNiARzbcU/view?usp=sharing", label: "Gearup Recording" }
		]
	},
	{
		number: 3, title: "Model Checking", dueDate: "04/08/2021 11:00 p.m. EDT", active: false,
		notes: "",
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1Fb6ZI5hRme9EPHQPZym5TighM7Sz7OM1/view?usp=sharing", label: "Handout" },
			{ icon: <FaCode />, link: "https://drive.google.com/drive/folders/1wUMVBjvzwI32j3sOLHnbMH2PR877Z7WH?usp=sharing", label: "Source Code" },
		]
	}
]

export default projects;