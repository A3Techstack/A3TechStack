// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'E-Commerce Store',
		category: 'Web Application',
		img: require('@/assets/images/project-2.png'),
		website: 'http://atechstack.aiveai.com',
		
	},
	{
		id: 2,
		title: 'Ai Api App',
		category: 'Web Appplication',
		img: require('@/assets/images/project-5.jpg'),
		website: 'https://www.aiveai.com',
	},
	{
		id: 3,
		title: 'Leave Management',
		category: 'Web Appplication',
		img: require('@/assets/images/project-3.jpg'),
		website: 'https://www.linkedin.com/in/akorede-adaraloye-385440271/',
	},
	// {
	// 	id: 4,
	// 	title: 'Cloud Storage Platform',
	// 	category: 'UI/UX Design',
	// 	img: require('@/assets/images/ui-project-2.jpg'),
	// },
	{
		id: 4,
		title: 'Chat App',
		category: 'Web Appplication',
		img: require('@/assets/images/project-4.jpg'),
		website: 'https://vue-firechat-8bfdb.web.app',
	},
	// {
	// 	id: 6,
	// 	title: 'Apple Design System',
	// 	category: 'Web Application',
	// 	img: require('@/assets/images/web-project-1.jpg'),
	// },
];

export default projects;
