import { FaFileAlt, FaCode, FaFilePowerpoint } from 'react-icons/fa';

const labs = [
	{ 
		number: 1, title: "Setup", dueDate: "1/24/2021 - 1/26/2021", active: true,
		links: [
			{ icon: <FaFileAlt/>, link: "https://drive.google.com/file/d/164fsB4VnpFYxO26LPWP2wqbSO8ozt6J9/view?usp=sharing", label: "Handout" },
			{ icon: <FaCode/>, link: "https://drive.google.com/file/d/1ysv_aD4zL0UkXhC4ojvVS12pO2_kdvXu/view?usp=sharing", label: "Source Code" },
			{ icon: <FaFilePowerpoint/>, link: "https://docs.google.com/presentation/d/1gR2_EKUr31w1vl8q8-wUb66OejRIN2xTDbXixwoGNtI/edit?usp=sharing", label: "Slides" },
		]
	},
	{ 
		number: 2, title: "Racket Introduction", dueDate: "1/30/2021 - 2/1/2021", active: true,
		links: [
			{ icon: <FaFileAlt/>, link: "https://drive.google.com/file/d/1Rr6jxELllMUV9dJKGTWmadtfOVKm6U-N/view?usp=sharing", label: "Handout" },
			{ icon: <FaCode/>, link: "https://drive.google.com/file/d/1R77Qt0Ya_-vW4rho2Oby_6KJKUIohRUS/view?usp=sharing", label: "Source Code" },
			{ icon: <FaFilePowerpoint/>, link: "https://docs.google.com/presentation/d/1OyIHlxVeNfSC9_ZXpdcorC6zQTv-WvyUwtPm1b8m0YM/edit?usp=sharing", label: "Slides" },
		]
	},
	{ 
		number: 3, title: "Recursion", dueDate: "2/7/2021 - 2/9/2021", active: true,
		links: [
			{ icon: <FaFileAlt/>, link: "https://drive.google.com/file/d/1h-7cghV5qIr98iJeddcmz_7ImXDQONo5/view?usp=sharing", label: "Handout" },
			{ icon: <FaFilePowerpoint/>, link: "https://docs.google.com/presentation/d/1ColymQG6aOgZl1zLxJB9H_r6y4J-dCAYLvnhruOJhIA/edit?usp=sharing", label: "Slides" },
		]
	},
	{ 
		number: 4, title: "Natural Number Recursion", dueDate: "2/14/2021 - 2/17/2021", active: true,
		links: [
			{ icon: <FaFileAlt/>, link: "https://drive.google.com/file/d/1X2P956LNMJ46HPJ3fapaMlcwcPIUF__6/view?usp=sharing", label: "Handout" },
			{ icon: <FaFilePowerpoint/>, link: "https://docs.google.com/presentation/d/1rgQ-q0S0E3pbXjAhwGPDu9VF-Opf3w304Cs9eAAMR0U/edit?usp=sharing", label: "Slides" },
		]
	},
	{ 
		number: 5, title: "Search", dueDate: "2/21/2021 - 2/23/2021", active: true,
		links: [
			{ icon: <FaFileAlt/>, link: "https://drive.google.com/file/d/101DymqcjKYvSI_QLo58HhKaOq_CoHA_e/view?usp=sharing", label: "Handout" },
			{ icon: <FaFilePowerpoint/>, link: "https://docs.google.com/presentation/d/1fOq3U8yFAvVJgyv0yVC8GPCi6rFfqGP_3IU_SOQ-aA0/edit?usp=sharing", label: "Slides" },
		]
	},
	{ 
		number: 6, title: "Reason", dueDate: "2/28/2021 - 3/2/2021", active: true,
		links: [
			{ icon: <FaFileAlt/>, link: "https://drive.google.com/file/d/1Dn7MQBcO0ste21fsa8u_aqSksWfzuRrw/view?usp=sharing", label: "Handout" },
			{ icon: <FaFilePowerpoint/>, link: "https://docs.google.com/presentation/d/1DPVvaAQ8jsN1JzGVw-VSygZW-CKLYAOEq_fJhaeGf_s/edit?usp=sharing", label: "Slides" },
		]
	},
	{ 
		number: 7, title: "Environments", dueDate: "3/7/2021 - 3/9/2021", active: true,
		links: [
			{ icon: <FaFileAlt/>, link: "https://drive.google.com/file/d/1Rleua9k28ilyYN-IUEZ4awN61CIocLXo/view?usp=sharing", label: "Handout" },
			{ icon: <FaCode/>, link: "https://drive.google.com/drive/folders/1yk6N0b7CFMyErYxoYkqQYz_C7JQJ8jcV?usp=sharing", label: "Source Code" },
			{ icon: <FaFilePowerpoint/>, link: "https://docs.google.com/presentation/d/1CgvgaUe6JGKUfiXIfKhXAoddJ_lK42W-USuWCwKjUqk/edit?usp=sharing", label: "Slides" },
		]
	},
	{ 
		number: 8, title: "ADTs", dueDate: "3/14/2021 - 3/16/2021", active: true,
		links: [
			{ icon: <FaFileAlt/>, link: "https://drive.google.com/file/d/1V8PyChitw9Wuy5ouHiBPAp-i4JoKPKg9/view?usp=sharing", label: "Handout" },
			{ icon: <FaCode/>, link: "https://drive.google.com/drive/folders/10YO1f-b_EtsUfSBNMMVJaZHH1Sqi5f3f?usp=sharing", label: "Source Code" },
			{ icon: <FaFilePowerpoint/>, link: "https://docs.google.com/presentation/d/17MblxNUvy5dRQUOdoE1dxj750_EubRRSwc-RFERlPng/edit?usp=sharing", label: "Slides" },
		]
	},
	{ 
		number: 9, title: "Sort", dueDate: "3/21/2021 - 3/23/2021", active: true,
		links: [
			{ icon: <FaFileAlt/>, link: "https://drive.google.com/file/d/1_lAjEfLPdAOLMFZYfRBbwTC4LuYFNBY_/view?usp=sharing", label: "Handout" },
			{ icon: <FaCode/>, link: "https://drive.google.com/drive/folders/1OAAfhS8bRr0smxQLK0mksKx4dF3_oo19?usp=sharing", label: "Source Code" },
			{ icon: <FaFilePowerpoint/>, link: "https://docs.google.com/presentation/d/1Ys8RP1Mtr9HxxlGv4aHUBkkXys6TR45-JWR6O7x_yxk/edit?usp=sharing", label: "Slides" },
		]
	},
]

export default labs;