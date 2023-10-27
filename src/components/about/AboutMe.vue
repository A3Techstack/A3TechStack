<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						'Hello, I am Adaraloye Akorede Akintunde(A3TechStack), a passionate and dedicated full-stack web developer with a strong focus on creating interactive and user-friendly web applications. With a deep love for technology and a commitment to continuous learning, I am excited to share my journey and skills with you.',
				},
				{
					id: 3,
					bio: 'My Skill Set: My development journey is driven by a desire to create elegant, efficient, and dynamic web solutions. I specialize in the following technologies: Back-End: I am proficient in PHP and Laravel, providing robust server-side solutions that power web applications. My experience with MySQL ensures that your data is managed effectively and securely. Front-End: Vue.js and JavaScript are my tools for crafting engaging and responsive user interfaces. I am committed to enhancing the user experience through intuitive and dynamic front-end development. UI/UX: I am a fan of clean, visually appealing designs. I use HTML, CSS, Tailwind, and Bootstrap to create user-friendly and beautiful web interfaces.'
				},
				{
					id: 2,
					bio:
						'What Drives Me - I believe that every line of code I write should contribute to a meaningful user experience. My passion for web development goes beyond coding; it is about solving real-world problems and making a positive impact. I thrive on challenges and am always eager to embrace new technologies and trends in the ever-evolving web development landscape. Let us Collaborate If you are looking for a web developer who can bring your ideas to life and create a seamless online experience, I am here to help. Whether it is building a new web application, optimizing an existing one, or collaborating on a project, I am excited to be a part of your journey. Feel free to explore my portfolio to see some of my recent work, and do not hesitate to get in touch if you have any questions or if you will like to discuss potential projects. Let us innovate and create together!	Thank you for visiting my portfolio, and I look forward to the opportunity of working with you.',
				},
			],
		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img
				src="@/assets/images/profile.jpg"
				class="rounded-xl w-96"
				alt=""
			/>
		</div>

		<!-- About details -->
		<div class="w-full sm:w-3/4 text-left">
			<p
				v-for="bio in bios"
				:key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
			>
				{{ bio.bio }}
			</p>
		</div>
	</div>
</template>
