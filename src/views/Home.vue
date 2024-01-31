<script>
import AppBanner from '@/components/shared/AppBanner';
import ProjectsGrid from '../components/projects/ProjectsGrid.vue';
import Button from '../components/reusable/Button.vue';

export default {
	name: 'Home',
	components: {
		AppBanner,
		ProjectsGrid,
		Button,
	},
};
</script>

<template>
	<div class="container mx-auto">
		<!-- Banner -->
		<AppBanner class="mb-5 sm:mb-8" />

		<!-- Skills -->
		<div class="mb-8 text-center">
			<h2 class="text-2xl font-bold mb-4">My Skills</h2>
			<div class="flex flex-wrap justify-center">
				<!-- Add your individual skill components or icons here -->
				<div class="bg-gradient-to-r from-orange-500 to-brown-500 p-4 rounded-lg text-white w-full sm:w-auto mb-4 sm:mb-0 sm:mr-4">
				PHP
				</div>
				<div class="bg-gradient-to-r from-orange-500 to-brown-500 p-4 rounded-lg text-white w-full sm:w-auto mb-4 sm:mb-0 sm:mr-4">
				VUE.JS
				</div>
				<div class="bg-gradient-to-r from-orange-500 to-brown-500 p-4 rounded-lg text-white w-full sm:w-auto mb-4 sm:mb-0 sm:mr-4">
				JavaScript
				</div>
				<div class="bg-gradient-to-r from-orange-500 to-brown-500 p-4 rounded-lg text-white w-full sm:w-auto mb-4 sm:mb-0 sm:mr-4">
				MySQL
				</div>
				<div class="bg-gradient-to-r from-orange-500 to-brown-500 p-4 rounded-lg text-white w-full sm:w-auto mb-4 sm:mb-0 sm:mr-4">
				HTML
				</div>
				<div class="bg-gradient-to-r from-orange-500 to-brown-500 p-4 rounded-lg text-white w-full sm:w-auto mb-4 sm:mb-0 sm:mr-4">
				CSS
				</div>
				<div class="bg-gradient-to-r from-orange-500 to-brown-500 p-4 rounded-lg text-white w-full sm:w-auto mb-4 sm:mb-0 sm:mr-4">
				BOOTSTRAP
				</div>
				<div class="bg-gradient-to-r from-orange-500 to-brown-500 p-4 rounded-lg text-white w-full sm:w-auto mb-4 sm:mb-0 sm:mr-4">
				JQuery
				</div>
				<div class="bg-gradient-to-r from-orange-500 to-brown-500 p-4 rounded-lg text-white w-full sm:w-auto mb-4 sm:mb-0 sm:mr-4">
				Firebase
				</div>
				<div class="bg-gradient-to-r from-orange-500 to-brown-500 p-4 rounded-lg text-white w-full sm:w-auto mb-4 sm:mb-0 sm:mr-4">
				Supabase
				</div>
				<!-- Add more skills as needed -->
			</div>
		</div>




		<!-- Projects -->
		<ProjectsGrid />

		<!-- Load more projects button -->
		<div class="mt-10 sm:mt-20 flex justify-center">
			<router-link
				to="/projects"
				class="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
				aria-label="More Projects"
			>
				<Button title="More Projects" />
			</router-link>
		</div>
	</div>
</template>

<style scoped></style>
