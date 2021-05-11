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
		number: 1, title: "Object-Oriented Design", dueDate: "May 19-20", active: false,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1Rr6jxELllMUV9dJKGTWmadtfOVKm6U-N/view?usp=sharing", label: "Handout" },
			{ icon: <FaCode />, link: "https://drive.google.com/file/d/1R77Qt0Ya_-vW4rho2Oby_6KJKUIohRUS/view?usp=sharing", label: "Source Code" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1OyIHlxVeNfSC9_ZXpdcorC6zQTv-WvyUwtPm1b8m0YM/edit?usp=sharing", label: "Slides" },
		]
	},
	{
		number: 2, title: "For-While Loops/Oracle", dueDate: "May 26-27", active: false,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1h-7cghV5qIr98iJeddcmz_7ImXDQONo5/view?usp=sharing", label: "Handout" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1ColymQG6aOgZl1zLxJB9H_r6y4J-dCAYLvnhruOJhIA/edit?usp=sharing", label: "Slides" },
		]
	},
	{
		number: 3, title: "Debugging", dueDate: "June 2-3", active: false,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1X2P956LNMJ46HPJ3fapaMlcwcPIUF__6/view?usp=sharing", label: "Handout" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1rgQ-q0S0E3pbXjAhwGPDu9VF-Opf3w304Cs9eAAMR0U/edit?usp=sharing", label: "Slides" },
		]
	},
	{
		number: 4, title: "File I/O", dueDate: "June 9-10", active: false,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/101DymqcjKYvSI_QLo58HhKaOq_CoHA_e/view?usp=sharing", label: "Handout" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1fOq3U8yFAvVJgyv0yVC8GPCi6rFfqGP_3IU_SOQ-aA0/edit?usp=sharing", label: "Slides" },
		]
	},
	{
		number: 5, title: "Regular Expressions", dueDate: "June 16-17", active: false,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1Dn7MQBcO0ste21fsa8u_aqSksWfzuRrw/view?usp=sharing", label: "Handout" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1DPVvaAQ8jsN1JzGVw-VSygZW-CKLYAOEq_fJhaeGf_s/edit?usp=sharing", label: "Slides" },
		]
	},
	{
		number: 6, title: "Optimization", dueDate: "June 23-24", active: false,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1Rleua9k28ilyYN-IUEZ4awN61CIocLXo/view?usp=sharing", label: "Handout" },
			{ icon: <FaCode />, link: "https://drive.google.com/drive/folders/1yk6N0b7CFMyErYxoYkqQYz_C7JQJ8jcV?usp=sharing", label: "Source Code" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1CgvgaUe6JGKUfiXIfKhXAoddJ_lK42W-USuWCwKjUqk/edit?usp=sharing", label: "Slides" },
		]
	},
	{
		number: 7, title: "Introduction to Scala", dueDate: "June 30-July 1", active: false,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1V8PyChitw9Wuy5ouHiBPAp-i4JoKPKg9/view?usp=sharing", label: "Handout" },
			{ icon: <FaCode />, link: "https://drive.google.com/drive/folders/10YO1f-b_EtsUfSBNMMVJaZHH1Sqi5f3f?usp=sharing", label: "Source Code" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/17MblxNUvy5dRQUOdoE1dxj750_EubRRSwc-RFERlPng/edit?usp=sharing", label: "Slides" },
		]
	},
	{
		number: 8, title: "Understanding PageRank", dueDate: "July 7-8", active: false,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1_lAjEfLPdAOLMFZYfRBbwTC4LuYFNBY_/view?usp=sharing", label: "Handout" },
			{ icon: <FaCode />, link: "https://drive.google.com/drive/folders/1OAAfhS8bRr0smxQLK0mksKx4dF3_oo19?usp=sharing", label: "Source Code" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1Ys8RP1Mtr9HxxlGv4aHUBkkXys6TR45-JWR6O7x_yxk/edit?usp=sharing", label: "Slides" },
		]
	},
	{
		number: 9, title: "Dynamic Programming", dueDate: "July 14-15", active: false,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1mLvFgTRgKgD1PPCIY7-PGQzwqwmgbGyF/view?usp=sharing", label: "Handout" },
			{ icon: <FaCode />, link: "https://drive.google.com/drive/folders/11hNP3X9_xtg7kcx8_5VIN13mw1OEvqwa?usp=sharing", label: "Source Code" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/10j1e7SrPOYDoraIQ9OPZaMo43wYgmJMdZzL3ogp0SqE/edit?usp=sharing", label: "Slides" },
		]
	},
	{
		number: 10, title: "Understanding Dijkstra's Algorithm", dueDate: "July 21-22", active: false,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1mLvFgTRgKgD1PPCIY7-PGQzwqwmgbGyF/view?usp=sharing", label: "Handout" },
			{ icon: <FaCode />, link: "https://drive.google.com/drive/folders/11hNP3X9_xtg7kcx8_5VIN13mw1OEvqwa?usp=sharing", label: "Source Code" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/10j1e7SrPOYDoraIQ9OPZaMo43wYgmJMdZzL3ogp0SqE/edit?usp=sharing", label: "Slides" },
		]
	},
	{
		number: 11, title: "Garbage Collection", dueDate: "July 28-29", active: false,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1mLvFgTRgKgD1PPCIY7-PGQzwqwmgbGyF/view?usp=sharing", label: "Handout" },
			{ icon: <FaCode />, link: "https://drive.google.com/drive/folders/11hNP3X9_xtg7kcx8_5VIN13mw1OEvqwa?usp=sharing", label: "Source Code" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/10j1e7SrPOYDoraIQ9OPZaMo43wYgmJMdZzL3ogp0SqE/edit?usp=sharing", label: "Slides" },
		]
	},
]

export default labs;