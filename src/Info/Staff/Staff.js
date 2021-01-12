import staffImages from './StaffImages';

const staff = [
	{
		name: "John Hughes (Professor)", login: "jfh", image: staffImages,
		hometown: "city, state", birthday: "July 18th", pronouns: "pronoun/pronoun",
		bio: "hello dis me"
	},
	{
		name: "Alex Ryan (HTA)", login: "aryan8", image: staffImages.AlexRyan,
		hometown: "Sammamish, WA", birthday: "June 23rd", pronouns: "she/her/hers",
		bio: "Hi!! I'm a junior from Seattle studying computer science (although at this point I'm basically a polisci concentrator too). In my free time, I love solving crossword + sudoku puzzles and thinking about trains."
	},
	{
		name: "Isabel Lai (HTA)", login: "ilai2", image: staffImages.IsabelLai,
		hometown: "Springfield, MO", birthday: "July 18th", pronouns: "she/her/hers",
		bio: "Hi :D I'm Isabel!!! I'm a junior studying CS from Springfield, Missouri. I really, really LOVE TAing and helping people :D so seriously email me any time!!!! I love making stickers, doing crosswords, learning Turkish, the color yellow, meeting new people, and public speaking. So nice to meet you!!!!"
	},
	{
		name: "Sohum Gupta (HTA)", login: "sgupta46", image: staffImages.SohumGupta,
		hometown: "Aurora, IL", birthday: "July 18th", pronouns: "he/him/his",
		bio: "Hello!! I'm a junior from Aurora, IL (an hour out of Chicago) studying CS and Art History. I like to cook (ask me for recipes!), window shop for cool clothes online 😎, and listen to music in bed with the lights off. Please send me song recs or tasty things that you've cooked!"
	},
	{
		name: "Timothy Wang (HTA)", login: "twang78", image: staffImages.TimothyWang,
		hometown: "Andover, MA", birthday: "July 18th", pronouns: "he/him/his",
		bio: "Hey there - I’m a junior from the Boston Area studying APMA-CS. I’m super into puzzle-y things like Rubik’s cubes and crosswords, and recently I’ve started doing jigsaw puzzles (they’re really fun and relaxing, I would highly recommend them!!!). I also enjoy spending my freetime playing board games like Catan, so if you want to play sometime online, hit me up!"
	},
	{
		name: "Andy Delworth", login: "adelwort", image: staffImages.AndyDelworth,
		hometown: "Yardley, PA", birthday: "October 29th", pronouns: "he/him/his",
		bio: "Hey! I'm a sophomore from Yardley, PA (outside Philly) studying Applied Math and Computer Science. I really enjoy playing volleyball (indoor and outdoor), basketball, and spikeball, and you can often find me biking around campus or Providence. I'm super excited to be your TA :)"
	},
	{
		name: "Anna Dai", login: "adai10", image: staffImages.AnnaDai,
		hometown: "Acton, MA", birthday: "September 22nd", pronouns: "she/her/hers",
		bio: "Hello! I'm a sophomore from Boston, MA studying APMA-CS. In my free time I make food and eat food."
	},
	{
		name: "Arrington Harper", login: "aharper3", image: staffImages.ArringtonHarper,
		hometown: "Birmingham, AL", birthday: "June 1st", pronouns: "she/her/hers",
		bio: "I’m a sophomore possibly concentrating in computer science and linguistics. My hobbies include Animal Crossing and long walks on the beach. I'm in Mosaic+. My secret talent is that I can spin a pencil around my thumb."
	},
	{
		name: "Darren Fang", login: "dfang8", image: staffImages,
		hometown: "Taipei, Taiwan", birthday: "June 28th", pronouns: "he/him/his",
		bio: "Hey everyone, I'm a sophomore double-concentrating in CS and APMA-Econ (yes I know). I'm a major foodie so you'll often find me exploring food places and bars! (in Taipei). During the school year, I'm usually off competing at a debate tournament during the weekends :)"
	},
	{
		name: "Harisen Luby", login: "hluby", image: staffImages,
		hometown: "Phoenix, AZ", birthday: "November 18th", pronouns: "she/her/hers",
		bio: "Hi! I am a sophomore concentrating in CS. I like to watch really old movies and cooking videos (but never actually cook anything lol)! Super stoked to be your TA this semester :))"
	},
	{
		name: "Ian Layzer", login: "ilayzer", image: staffImages,
		hometown: "Durham, NC", birthday: "February 26th", pronouns: "he/him/his",
		bio: "Outside of pandemic times, I love being a mediocre ultimate frisbee player and a slightly less mediocre inner-tube water poloist. I also enjoy watching student theater on campus!"
	},
	{
		name: "Justin Sanders", login: "jsander8", image: staffImages.JustinSanders,
		hometown: "Seattle, WA", birthday: "January 4th", pronouns: "he/him/his",
		bio: "Howdy! I'm a Junior from Seattle studying Computational Biology, and in my free time you'll either find me up skiing or getting tilted playing chess online. I'm looking forward to being your TA this semester :)"
	},
	{
		name: "Kota Soda", login: "ksoda", image: staffImages,
		hometown: "Tokyo, Japan", birthday: "July 2nd", pronouns: "he/him/his",
		bio: "I'm a sophomore studying Apma-CS. I love anything baseball related and playing the guitar!"
	},
	{
		name: "Maceo Thompson", login: "mthomp13", image: staffImages.MaceoThompson,
		hometown: "Brooklyn, NY", birthday: "June 29th", pronouns: "he/him/his",
		bio: "Hey! My name is Maceo, and I'm from Brooklyn, NY. I'm double concentrating in CS and Music. I love to take photos, play the piano, and (badly) play soccer."
	},
	{
		name: "Sahil Bansal", login: "sbansa12", image: staffImages,
		hometown: "Riyadh, Saudi Arabia", birthday: "May 27th", pronouns: "he/him/his",
		bio: "Hi! I'm a sophomore concentrating in CS. I'm from the US and grew up in Saudi Arabia and India. I love reading manga, being with family and friends, and watching cooking shows but never actually cooking anything!"
	},
	{
		name: "Sean Zhan", login: "xzhan2", image: staffImages.SeanZhan,
		hometown: "Beijing, China", birthday: "March 19th", pronouns: "he/him/his",
		bio: "Hi! I'm a sophomore concentrating in APMA-CS. In my free time, I love playing the guitar, biking around Providence, and playing ultimate frisbee."
	},
	{
		name: "Stephanie Carrero", login: "scarrero", image: staffImages,
		hometown: "Bronx, New York", birthday: "September 21st", pronouns: "she/her/hers",
		bio: "Hi! I’m a senior from the Bronx, New York currently studying CS and biology. In my free time I love reading, playing ultimate frisbee, and dancing."
	},
	{
		name: "Stephen Chen", login: "schen211", image: staffImages.StephenChen,
		hometown: "Plymouth, MN", birthday: "September 29th", pronouns: "he/him/his",
		bio: "Hi! I am a sophomore from Plymouth, Minnesota studying CS. In my free time, you can probably find me playing League of Legends or listening to the same three Taylor Swift songs on loop."
	},
	{
		name: "Tali Bers", login: "tbers", image: staffImages.TaliBers,
		hometown: "Winchester, MA", birthday: "May 15th", pronouns: "she/her/hers",
		bio: "Hi! I'm Tali from outside Boston, I'm a junior studying computer science. While I'm not coding, I like to spend time at Hillel, exploring outside, and hanging out with friends."
	},
	{
		name: "Thet Htay Zaw", login: "tzaw", image: staffImages.ThetHtayZaw,
		hometown: "Brooklyn, NY", birthday: "April 6th", pronouns: "he/him/his",
		bio: "Hi everyone! I'm a sophomore concentrating in CS and Education Studies. My favorite pastime is staying up way past midnight reading and listening to podcasts."
	},
]

export default staff;
