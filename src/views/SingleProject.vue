<script>
import feather from 'feather-icons';
import ProjectHeader from '../components/projects/ProjectHeader.vue';
import ProjectGallery from '../components/projects/ProjectGallery.vue';
import ProjectInfo from '../components/projects/ProjectInfo.vue';
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects.vue';

export default {
	name: 'Projects',
	components: {
		ProjectHeader,
		ProjectGallery,
		ProjectInfo,
		ProjectRelatedProjects,
	},
	data: () => {
		return {
			singleProjectHeader: {
				singleProjectTitle: 'Fullstack Developer',
				singleProjectDate: '5years Experience',
				singleProjectTag: 'Web Application',
			},
			projectImages: [
				{
					id: 1,
					title: 'Kabul Project Management UI',
					img: require('@/assets/images/project-3.jpg'),
				},
				{
					id: 2,
					title: 'Kabul Project Management UI',
					img: require('@/assets/images/project-2.png'),
				},
				{
					id: 3,
					title: 'Kabul Project Management UI',
					img: require('@/assets/images/project-5.jpg'),
				},
			],
			projectInfo: {
				clientHeading: 'About Me',
				companyInfos: [
					{
						id: 1,
						title: 'Name',
						details: 'A3TechStack',
					},
					{
						id: 2,
						title: 'Services',
						details: 'Full-stack Web Developement',
					},
					{
						id: 3,
						title: 'Website',
						details: 'https://www.linkedin.com/in/akorede-adaraloye-385440271/',
					},
					{
						id: 4,
						title: 'Phone',
						details: '07050636098',
					},
				],
				objectivesHeading: 'Objective',
				objectivesDetails:
					'"Experienced fullstack developer with a passion for crafting innovative web applications. Skilled in both frontend and backend technologies, I thrive on turning complex ideas into user-friendly solutions. Committed to continuous learning and staying updated with the latest trends in web development to deliver exceptional results."',
				technologies: [
					{
						title: 'Tools & Technologies',
						techs: [
							'HTML',
							'CSS',
							'JavaScript',
							'JQuery',
							'PHP',
							'Laravel',
							'MySQl',
							'VueJs',
							'Tailwind',
						],
					},
				],
				projectDetailsHeading: 'Challenge',
				projectDetails: [
					{
						id: 1,
						details:
							'Technological Advancements: Keeping up with the rapid pace of technological advancements and staying current with new programming languages, frameworks, and tools.',
					},
					{
						id: 2,
						details:
							'Security Concerns: Addressing cybersecurity threats and ensuring that the applications you develop are secure and protected against potential vulnerabilities.',
					},
					{
						id: 3,
						details:
							'Performance Optimization: Optimizing application performance to ensure responsiveness, fast load times, and a smooth user experience.',
					},
					{
						id: 4,
						details:
							'Scalability: Scaling applications to handle increased user traffic and data as they grow in popularity.',
					},
					{
						id: 5,
						details:
							'Legacy Systems: Integrating or migrating from legacy systems and dealing with outdated technologies.',
					},
					{
						id: 6,
						details:
							'Cross-Browser Compatibility: Ensuring that web applications work consistently across different browsers and platforms.',
					},
					{
						id: 7,
						details:
							'Debugging and Troubleshooting: Diagnosing and resolving complex issues in both frontend and backend code.',
					},
					{
						id: 8,
						details:
							'These challenges, while demanding, provide opportunities for growth and skill development. Full stack developers must be adaptable problem-solvers, ready to address a wide range of issues in both frontend and backend development. Embracing these challenges is a key part of professional development in the field.',
					},
				],
				socialSharingsHeading: 'Share This',
				socialSharings: [
					{
						id: 1,
						name: 'Twitter',
						icon: 'twitter',
						url: '',
					},
					{
						id: 2,
						name: 'Instagram',
						icon: 'instagram',
						url: 'https://instagram.com/tomiwa_._',
					},
					{
						id: 3,
						name: 'Facebook',
						icon: 'facebook',
						url: 'https://facebook.com/profile.php/id=100090514518521',
					},
					{
						id: 4,
						name: 'LinkedIn',
						icon: 'linkedin',
						url: 'https://www.linkedin.com/in/akorede-adaraloye-385440271/',
					},
				],
			},
			relatedProject: {
				relatedProjectsHeading: 'Related Projects',
				relatedProjects: [
					{
						id: 1,
						title: 'Web Application',
						img: require('@/assets/images/project-4.jpg'),
					},
					{
						id: 2,
						title: 'Web Application',
						img: require('@/assets/images/project-5.jpg'),
					},
					{
						id: 3,
						title: 'Web Application',
						img: require('@/assets/images/project-1.jpg'),
					},
					{
						id: 4,
						title: 'Web Application',
						img: require('@/assets/images/project-3.jpg'),
					},
				],
			},
		};
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
	methods: {},
};
</script>

<template>
	<div class="container mx-auto mt-10 sm:mt-20">
		<!-- Project header -->
		<ProjectHeader :singleProjectHeader="singleProjectHeader" />

		<!-- Project gallery -->
		<ProjectGallery :projectImages="projectImages" />

		<!-- Project information -->
		<ProjectInfo :projectInfo="projectInfo" />

		<!-- Project related projects -->
		<ProjectRelatedProjects :relatedProject="relatedProject" />
	</div>
</template>

<style scoped></style>
