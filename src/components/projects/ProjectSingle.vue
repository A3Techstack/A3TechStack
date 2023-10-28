<script>
export default {
	props: ['project'],
};
</script>

<template>
	<router-link
		to="/projects/single-project"
		class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
		aria-label="Single Project"
	>
		<div >
			<img
				:src="project.img"
				:alt="project.title"
				class="rounded-t-xl border-none"
			/>
	</router-link>
		</div>
		<div class="text-center px-4 py-6">
			<p
				class="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2"
			>
				{{ project.title }}
			</p>
			<!-- Render the website link if it exists in the project data -->
			<a
				v-if="project.website"
				:href="project.website"
				target="_blank"
				class="font-general-medium text-lg text-ternary-dark dark:text-ternary-light hover:underline"
			>
				Click to Preview
			</a>
			<!-- <span
				class="font-general-medium text-lg text-ternary-dark dark:text-ternary-light"
				>{{ project.website }}</span
			> -->
		</div>
</template>

<style lang="scss" scoped>

</style>
