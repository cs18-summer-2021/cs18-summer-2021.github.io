import { FaFileAlt, FaYoutube, FaFilePowerpoint, FaPencilRuler, FaWrench, FaBook, FaMapMarkedAlt, FaCogs, FaMap } from 'react-icons/fa';

const staticBasePath = "/static/classes";

const iconType = {
	SETUP: "Setup/Prep",
	NOTES: "Notes",
	VIDEO: "Video",
	PRACTICE: "Practice"
}

/**
 * Makes an IconLink for a Class card.
 * @param {string} type the type of icon to make (see above definition) 
 * @param {string} url the url to link to
 * @returns an icon link of a certain type linking to the given url
 */
function makeIcon(type, url) {
	let iconToUse // default icon if provided type unknown
	switch (type) {
		case iconType.SETUP:
			iconToUse = <FaMap />
			break;
		case iconType.NOTES:
			iconToUse = <FaFileAlt />
			break;
		case iconType.VIDEO:
			iconToUse = <FaYoutube />
			break;
		case iconType.PRACTICE:
			iconToUse = <FaCogs />
			break;
		default:
			iconToUse = <FaFileAlt />
			break;
	}
	return {
		icon: iconToUse,
		link: url,
		label: type
	};
}

/**
 * Helper that makes a url to link a static file in our public/static/classes folder. This link will only work if the file
 * is placed in the appropriate folder for its class, so if it is not, just make your own link.
 * @param {number} classNumber the class number
 * @param {string} fileName the name of the file
 * @returns a url to that file
 */
function makeUrl(classNumber, fileName) {
	return `${staticBasePath}/${classNumber}/${fileName}`;
}

const classes = [
    {
	number: 1, title: "Intro and Classes", outDate: "May 12", active: true,
	links: [
	    makeIcon(iconType.SETUP, makeUrl(1, "dillo.ml")),
	    makeIcon(iconType.NOTES, makeUrl(1, "01classes.pdf")),
	    makeIcon(iconType.VIDEO, "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=ebcf6e7a-354d-463d-921c-ad26010b74aa"),
	    makeIcon(iconType.PRACTICE, makeUrl(1, "01classes-practice.pdf")),
	],
	tags: ["Classes"]
    },
    {
	number: 2, title: "Methods and Testing", outDate: "May 14", active: true,
	links: [
	    makeIcon(iconType.SETUP, "https://hackmd.io/@cs18-spring-2021/lec02setup"),
	    makeIcon(iconType.NOTES, makeUrl(2, "02methods.pdf")),
	    makeIcon(iconType.VIDEO, "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=9824c93e-7fbd-4aad-8de7-ad28010b24c9"),
	    makeIcon(iconType.PRACTICE, makeUrl(2, "02methods-practice.pdf")),
	],
	tags: ["Memory Diagram"]
    },
    {
	number: 3, title: "Interfaces and Types", outDate: "May 17", active: true,
	links: [
	    makeIcon(iconType.SETUP, "https://hackmd.io/@cs18-spring-2021/lec03setup"),
	    makeIcon(iconType.NOTES, makeUrl(3, "03interfaces.pdf")),
	    makeIcon(iconType.VIDEO, "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=390f60ec-9112-4550-9122-ad2b010ce733"),
	    makeIcon(iconType.PRACTICE, makeUrl(3, "03interfaces-practice.pdf")),
	],
	tags: []
    },
    {
	number: 4, title: "Abstract Classes", outDate: "May 19", active: true,
	links: [
	    makeIcon(iconType.SETUP, "https://hackmd.io/@cs18-spring-2021/lec04setup-sum"),
	    makeIcon(iconType.NOTES, makeUrl(4, "04abs-classes.pdf")),
	    makeIcon(iconType.VIDEO, "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=46342dfd-23a2-4591-9132-ad2d010b4057"),
	    makeIcon(iconType.PRACTICE, makeUrl(4, "04tracing.pdf")),
	],
	tags: []
    }
]

export default classes;
