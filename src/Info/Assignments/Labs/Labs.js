import { FaFileAlt, FaCode, FaFilePowerpoint } from 'react-icons/fa';

const labs = [
	{
		number: 0, title: "Intellij/Scala Tester Setup Help (Optional)", dueDate: "May 12-13", active: false,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/164fsB4VnpFYxO26LPWP2wqbSO8ozt6J9/view?usp=sharing", label: "Handout" },
			{ icon: <FaCode />, link: "https://drive.google.com/file/d/1ysv_aD4zL0UkXhC4ojvVS12pO2_kdvXu/view?usp=sharing", label: "Source Code" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1gR2_EKUr31w1vl8q8-wUb66OejRIN2xTDbXixwoGNtI/edit?usp=sharing", label: "Slides" },
		]
	},
	{
		number: 1, title: "Object-Oriented Design", dueDate: "May 19-20", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1puH4CxJNpUsVO__d94UnqPw-gWZCGmCv/view?usp=sharing", label: "Handout" },
			{ icon: <FaFilePowerpoint />, link: "https://drive.google.com/file/d/1iJGBdzm5TBJS7IoyZkn4DLIJKEbqO5Pi/view?usp=sharing", label: "Slides" },
			{ icon: <FaFileAlt />, link: "https://edstem.org/us/courses/5623/discussion/485735", label: "Solution"},
		]
	},
	{
		number: 2, title: "For-While Loops/Oracle", dueDate: "May 26-27", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1kCg7XsqezDra83HEdz6OgawoSgWtBLxf/view?usp=sharing", label: "Solution (For Loops)" },
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1yjGD15-kCz3lpKxMPbxfUkgiubFRN6Ng/view?usp=sharing", label: "Solution (Oracle)" },
			{ icon: <FaFilePowerpoint />, link: "https://drive.google.com/file/d/1qOG3YFhfzu2VmMODpnw2_1Zbfn-eHs9z/view?usp=sharing", label: "Slides" },
		]
	},
	{
		number: 3, title: "Debugging", dueDate: "June 2-3", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1VXdOZR83d0qhvQPz_ir5kNmvjeKlhYjP/view?usp=sharing", label: "Handout" },
			{ icon: <FaFilePowerpoint />, link: "https://drive.google.com/file/d/1j6wPzd4lI3u21d7CwTotKM3zyrmF4rmD/view?usp=sharing", label: "Slides" },
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1Jg-Hcmtcl8FwmttIzNu38c1VKUOeBWll/view?usp=sharing", label: "Solution"},
		]
	},
	{
		number: 4, title: "File I/O", dueDate: "June 9-10", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://hackmd.io/l2gYNy1SSdWUW1XLMOxCMQ", label: "Handout" },
			{ icon: <FaFilePowerpoint />, link: "https://drive.google.com/file/d/1Sjq_R5M6TOOGFU5NjY5pvYsqxppJ3Y29/view?usp=sharing", label: "Slides" },
			{ icon: <FaFileAlt />, link: "https://hackmd.io/nF6x0tNDT0KuQUrNgSVvDA", label: "Solution"},
		]
	},
	{
		number: 5, title: "Regular Expressions", dueDate: "June 16-17", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1PvlrieKVeZy13U5m3fYk0Rh8_DnHns9V/view?usp=sharing", label: "Handout" },
			{ icon: <FaFilePowerpoint />, link: "https://drive.google.com/file/d/1XkzWuIn85rtRuLJQn7D1drjVEUW2I2T7/view?usp=sharing", label: "Slides" },
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/14i7AQFdneoz90XHAfFXq5deg5HnZFWdm/view?usp=sharing", label: "Solution"},
		]
	},
	{
		number: 6, title: "Optimization", dueDate: "June 23-24", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1Fs0RXG5P9tx7wN6OhhF6jU99FWgWTc8F/view?usp=sharing", label: "Handout" },
			{ icon: <FaFilePowerpoint />, link: "https://drive.google.com/file/d/1yeZFuxoBa1wXzoe1_ZP8PQCcSW7HjC8M/view?usp=sharing", label: "Slides" },
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1D0m6u2JRzru-5R-wT82QUoKPaX12O4Cw/view?usp=sharing", label: "Solution"},
		]
	},
	{
		number: 7, title: "Introduction to Scala", dueDate: "June 30-July 1", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/13HcqqdzRyy9RBwfM2tCFeVt25NVF0u1u/view?usp=sharing", label: "Handout" },
			{ icon: <FaFilePowerpoint />, link: "https://drive.google.com/file/d/1mrHfucRuRQMLxaA9H9Sa5DYbfR3woHq7/view?usp=sharing", label: "Slides" },
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1xg_LwhcdT30Tg3ZjDYqfWj3CAAg5q7jS/view?usp=sharing", label: "Solution"},
		]
	},
	{
		number: 8, title: "Understanding PageRank and REPLs", dueDate: "July 7-8", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1KWvGr2Yb5HAHoFQHg9fBcQsHIADDNNvA/view?usp=sharing", label: "Handout" },
			{ icon: <FaFilePowerpoint />, link: "https://drive.google.com/file/d/1RW4Vf_Ux4XMUV-dfVtj7FhwjMK4ax8dd/view?usp=sharing", label: "Slides" },
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1bm2nma99NKDU2yfmC7EVC2NQf6x5p7DQ/view?usp=sharing", label: "Solution"},

		]
	},
	{
		number: 9, title: "Dynamic Programming", dueDate: "July 14-15", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/13ZqzUKtq1gLxdmU9lTkZ6Vv-9O1Yh54d/view?usp=sharing", label: "Handout" },
			{ icon: <FaFilePowerpoint />, link: "https://drive.google.com/file/d/1YBYKEZmonA4BB7i8XG6M19VQrAPko1et/view?usp=sharing", label: "Slides" },
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1Xrqu1Cq8hSUP4oUuXGZr0Ow9Iv84MIB_/view?usp=sharing", label: "Solution"},
		]
	},
	{
		number: 10, title: "Understanding Dijkstra's Algorithm", dueDate: "July 21-22", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1Nt40fnpGLNxCOVy0axmDQCzSohwp2FSE/view?usp=sharing", label: "Handout" },
			{ icon: <FaFilePowerpoint />, link: "https://drive.google.com/file/d/1xgoBUT2fmIwEvLeecSkJ1wew677ayOfh/view?usp=sharing", label: "Slides" },
		]
	},
	{
		number: 11, title: "Garbage Collection", dueDate: "July 28-29", active: false,
		links: [
			{ icon: <FaFileAlt />, link: "", label: "Handout" },
			{ icon: <FaFilePowerpoint />, link: "", label: "Slides" },
		]
	},
]

export default labs;