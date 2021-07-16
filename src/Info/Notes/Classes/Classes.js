import { FaFileAlt, FaYoutube, FaFilePowerpoint, FaPencilRuler, FaWrench, FaBook, FaMapMarkedAlt, FaCogs, FaMap, FaCode } from 'react-icons/fa';

const staticBasePath = "/static/classes";

const iconType = {
	SETUP: "Setup/Prep",
	NOTES: "Notes",
	VIDEO: "Video",
    PRACTICE: "Practice",
    CODE: "Code"
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
    case iconType.CODE:
	iconToUse = <FaCode />
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
    },
    {
	number: 5, title: "Implementing Lists", outDate: "May 21", active: true,
	links: [
	    makeIcon(iconType.SETUP, "https://hackmd.io/@cs18-spring-2021/lec05setup-sum"),
	    makeIcon(iconType.NOTES, makeUrl(5, "05listsfunctional.pdf")),
	    makeIcon(iconType.VIDEO, "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=2d037cda-6d4a-4308-a000-ad2f010bf450"),
	    makeIcon(iconType.CODE, makeUrl(5, "lec05final.zip"))
	],
	tags: ["Class Hierarchies"]
    },
    {
	number: 6, title: "Changing Fields and Equality", outDate: "May 24", active: true,
	links: [
	    makeIcon(iconType.SETUP, "https://hackmd.io/@cs18-spring-2021/lec06setup"),
	    makeIcon(iconType.NOTES, makeUrl(6, "06equality.pdf")),
	    makeIcon(iconType.VIDEO, "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=574f31ce-be05-4e11-8bce-ad32010a6c53")
	],
	tags: ["Memory Diagram"]
    }, 
    {
	number: 7, title: "Java's Built-In Lists", outDate: "May 26", active: true,
	links: [
	    makeIcon(iconType.SETUP, "https://hackmd.io/@cs18-spring-2021/lec07setup"),
	    makeIcon(iconType.NOTES, makeUrl(7, "07javalists.pdf")),
	    makeIcon(iconType.VIDEO, "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=fe0ffbf5-ef76-421c-be6f-ad3401108611")
	],
	tags: ["Loops", "Grading"]
    },
    {
	number: 8, title: "Implementing Java Lists", outDate: "May 28", active: true,
	links: [
	    makeIcon(iconType.SETUP, "https://hackmd.io/@cs18-spring-2021/lec08setup-sum"),
	    makeIcon(iconType.NOTES, makeUrl(8, "08mutablelists.pdf")),
	    makeIcon(iconType.VIDEO, "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=9524be5f-e0f3-4b66-8c2e-ad36010abbab")
	],
	tags: ["Memory Diagram"]
    },
    {
	number: "N/A", title: "No Class", outDate: "May 31", active: true
    },
    {
	number: 9, title: "Optimizing List Methods", outDate: "Jun 2", active: true,
	links: [
	    makeIcon(iconType.SETUP, "https://hackmd.io/@cs18-spring-2021/lec09setup-sum"),
	    makeIcon(iconType.NOTES, makeUrl(9, "09listsoptimize.pdf")),
	    makeIcon(iconType.VIDEO, "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=f6414aa1-0cbd-4a2c-b4f0-ad3b010b2cf0"),
	    makeIcon(iconType.CODE, makeUrl(9, "lec09final.zip"))
	],
	tags: []
    },
    {
	number: 10, title: "Arrays", outDate: "Jun 4", active: true,
	links: [
	    makeIcon(iconType.SETUP, "https://hackmd.io/@cs18-spring-2021/lec10setup-sum"),
	    makeIcon(iconType.NOTES, makeUrl(10, "10arrays.pdf")),
	    makeIcon(iconType.VIDEO, "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=9b004d25-7365-43b8-9afa-ad3d010ca360")
	],
	tags: ["Memory"]
    },
    {
	number: 11, title: "Dynamic Arrays", outDate: "Jun 7", active: true,
	links: [
	    makeIcon(iconType.SETUP, "https://hackmd.io/@cs18-spring-2021/lec11setup"),
	    makeIcon(iconType.NOTES, makeUrl(11, "11dynArrays.pdf")),
	    makeIcon(iconType.VIDEO, "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=8885c2ef-d138-4cae-ae27-ad40010b14ab")
	],
	tags: ["Memory"]
    },
    {
	number: 12, title: "Wrap-Around Dynamic Arrays", outDate: "Jun 9", active: true,
	links: [
	    makeIcon(iconType.SETUP, "https://hackmd.io/@cs18-spring-2021/lec12setup-sum"),
	    makeIcon(iconType.NOTES, makeUrl(12, "12dynArraysWrap.pdf")),
	    makeIcon(iconType.VIDEO, "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=ea0cb545-4ac7-4643-9495-ad42010c131b")
	],
	tags: []
    },
    {
	number: 13, title: "Enabling For Loops (Iterators)", outDate: "Jun 11", active: true,
	links: [
	    makeIcon(iconType.SETUP, "https://hackmd.io/@cs18-spring-2021/lec13setup-sum"),
	    makeIcon(iconType.NOTES, makeUrl(13, "13iterators.pdf")),
	    makeIcon(iconType.VIDEO, "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=c130d30b-a985-48da-9607-ad44010f0728")
	],
	tags: []
    },
    {
	number: 14, title: "Access Modifiers and Program Design", outDate: "Jun 14", active: true,
	links: [
	    makeIcon(iconType.SETUP, "https://hackmd.io/@cs18-spring-2021/lec14setup-sum"),
	    makeIcon(iconType.NOTES, makeUrl(14, "14accessEncap.pdf")),
	    makeIcon(iconType.VIDEO, "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=2849d09c-877a-4f04-82e5-ad47010d5e1a")
	],
	tags: []
    },
    {
	number: "N/A", title: "Midterm Prep Guide", outDate: "Jun 14", active: true,
	links: [
	    makeIcon(iconType.SETUP, "https://hackmd.io/@cs18-spring-2021/midterm-prep-sum2021")
	],
	tags: []
    },
    {
	number: 15, title: "Exceptions and Model-View-Controller", outDate: "Jun 16", active: true,
	links: [
	    makeIcon(iconType.SETUP, "https://hackmd.io/@cs18-spring-2021/lec15setup-sum"),
	    makeIcon(iconType.NOTES, makeUrl(15, "15mvcExceptions.pdf")),
	    makeIcon(iconType.VIDEO, "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=702172bc-80b3-4291-bb0c-ad49010be3f2")
	],
	tags: ["throw", "try/catch"]
    },
    {
	number: 16, title: "Intro to Hashtables", outDate: "Jun 18", active: true,
	links: [
	    makeIcon(iconType.SETUP, "https://hackmd.io/@cs18-spring-2021/lec16setup-sum"),
	    makeIcon(iconType.NOTES, makeUrl(16, "16hashtables.pdf")),
	    makeIcon(iconType.VIDEO, "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=c6abe0c7-ed8f-4a95-80db-ad4b010bc695")
	],
	tags: []
    },
    {
	number: 17, title: "Implementing Hashtables", outDate: "Jun 21", active: true,
	links: [
	    makeIcon(iconType.SETUP, "https://hackmd.io/@cs18-spring-2021/lec17setup-sum"),
	    makeIcon(iconType.NOTES, makeUrl(17, "17hashtableimpl.pdf")),
	    makeIcon(iconType.VIDEO, "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=d928e795-7f53-44ef-99ac-ad4e010b8a8e")
	],
	tags: []
    },
    {
	number: 18, title: "In-place sorting and memory usage", outDate: "Jun 23", active: true,
	links: [
	    makeIcon(iconType.SETUP, "https://hackmd.io/@cs18-spring-2021/lec18setup-sum"),
	    makeIcon(iconType.NOTES, makeUrl(18, "18memoryusage.pdf")),
	    makeIcon(iconType.VIDEO, "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=cf947f09-775f-4666-985a-ad50010d7acc")
	],
	tags: []
    },
    {
	number: 19, title: "Designing for SRC", outDate: "Jun 25", active: true,
	links: [
	    makeIcon(iconType.NOTES, makeUrl(19, "19slidedeck.pdf")),
	    makeIcon(iconType.VIDEO, "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=570a4de6-546b-415e-80e4-ad52010b8061")
	],
	tags: []
    },
    {
	number: 20, title: "Scala: Functional", outDate: "Jun 28", active: true,
	links: [
	    makeIcon(iconType.SETUP, "https://hackmd.io/@cs18-spring-2021/lec20setup-sum"),
	    makeIcon(iconType.NOTES, makeUrl(20, "20scalaIntro.pdf")),
            makeIcon(iconType.VIDEO, "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=3fbf7ceb-4118-4164-8dd1-ad55010b0507")
	],
	tags: []
    },
    {
    	number: 21, title: "Scala: OO and Traits", outDate: "Jun 30", active: true,
	links: [
	    makeIcon(iconType.SETUP, "https://hackmd.io/@cs18-spring-2021/lec21setup-sum"),
	    makeIcon(iconType.NOTES, makeUrl(21, "21scalatraits.pdf")),
            makeIcon(iconType.VIDEO, "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=d54d67d3-73f3-4438-9ce6-ad57010b33e5")
	],
	tags: []
    },
    {
        number: 22, title: "Scala: Private and Mutable Vars (NO PREP)", outDate: "Jul 2", active: true,
	links: [
	    makeIcon(iconType.NOTES, makeUrl(22, "22scalaMutable.pdf")),
            makeIcon(iconType.VIDEO, "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=44a767b7-8398-40d9-9324-ad59010b4f1d"),
	    makeIcon(iconType.CODE, makeUrl(22, "Bookings.scala"))
	],
	tags: []
    },
    {
    	number: 23, title: "Heaps (Data Structure)", outDate: "July 7", active: true,
	links: [
	    makeIcon(iconType.SETUP, "https://hackmd.io/@cs18-spring-2021/lec22setup"),
	    makeIcon(iconType.NOTES, makeUrl(23, "23heaps.pdf")),
	    makeIcon(iconType.VIDEO, "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=d49937fa-3477-4564-8920-ad5e010994d6")
	],
	tags: []
    },
    {
    	number: 24, title: "Implementing Heaps", outDate: "July 9", active: true,
	links: [
	    makeIcon(iconType.SETUP, "https://hackmd.io/@cs18-spring-2021/lec23setup"),
	    makeIcon(iconType.NOTES, makeUrl(24, "24heapimpl.pdf")),
	    makeIcon(iconType.VIDEO, "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=edb1fc4f-d9a1-4a8f-8ea7-ad60010a1835")
	],
	tags: ["Arrays"]
    },
    {
    	number: 25, title: "Using Heaps", outDate: "July 12", active: true,
	links: [
	    makeIcon(iconType.SETUP, "https://hackmd.io/@cs18-spring-2021/lec24setup"),
	    makeIcon(iconType.NOTES, makeUrl(25, "heapusage.pdf")),
	    makeIcon(iconType.VIDEO, "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=091e21bf-31d5-4c0e-b1b9-ad6301097756")
	],
	tags: []
    },
    {
    	number: 26, title: "Dynamic Programming 1", outDate: "July 14", active: true,
	links: [
	    makeIcon(iconType.SETUP, "https://hackmd.io/@cs18-spring-2021/lec26setup"),
	    makeIcon(iconType.NOTES, makeUrl(26, "26slides.pptx")),
	    makeIcon(iconType.VIDEO, "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=cc1ba70e-efb9-405f-81f9-ad65010cf221")
	],
	tags: []
    },
    {
    	number: 27, title: "Dynamic Programming 2", outDate: "July 16", active: true,
	links: [
	    makeIcon(iconType.NOTES, makeUrl(27, "dp2.pdf")),
	    makeIcon(iconType.VIDEO, "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=16526eba-bc31-4e79-be70-ad670108ca71")
	],
	tags: []
    }
]

export default classes;

