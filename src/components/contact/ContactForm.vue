<script>
import Button from '../reusable/Button.vue';
import FormInput from '../reusable/FormInput.vue';
import FormTextarea from '../reusable/FormTextarea.vue';
import { ref } from 'vue';
import { createClient } from '@supabase/supabase-js';

// Initialize the Supabase client
const supabase = createClient('https://xgfhmcmycyxczyxhprvv.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhnZmhtY215Y3l4Y3p5eGhwcnZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg0ODQ2MTcsImV4cCI6MjAxNDA2MDYxN30.ABdy1ce0aDHSNrOLz7tpPvcgKWJorj9aLpTv71DDWKY');

export default {
  components: { Button, FormInput, FormTextarea },
  
  setup() {
    const name = ref('');
    const email = ref('');
    const subject = ref('');
    const message = ref('');

    const handleSubmit = async () => {
      const { data,error } = await supabase.from('entries').upsert([
        {
          name: name.value,
          email: email.value,
          subject: subject.value,
          message: message.value,
        },
      ]);

      if (data + error) {
        console.error('Error submitting the form:', error);
        // Handle the error, e.g., show an error message to the user.
      } else {
        // Form submission successful. You can display a success message or perform other actions.
        console.log('Form submitted successfully');
        // Clear form fields after successful submission if needed.
        name.value = '';
        email.value = '';
        subject.value = '';
        message.value = '';
      }
    };

    return {
      name,
      email,
      subject,
      message,
      handleSubmit,
    };
  },
};
</script>


<template>
	<div class="w-full md:w-1/2">
		<div
			class="leading-loose max-w-xl m-4 p-7 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
		>
			<p
				class="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8"
			>
				Contact Form
			</p>
			<form @submit.prevent="handleSubmit" class="font-general-regular space-y-7">
				<FormInput label="Full Name" inputIdentifier="name" v-model="name" />
				<FormInput
					label="Email"
					inputIdentifier="email"
					inputType="email"
					v-model="email"
				/>
				<FormInput label="Subject" inputIdentifier="subject" v-model="subject" />
				<FormTextarea label="Message" textareaIdentifier="message" v-model="message" />

				<div>
					<Button
						title="Send Message"
						class="px-4 py-2.5 text-white tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500"
						type="submit"
						aria-label="Send Message"
					/>
				</div>
			</form>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
