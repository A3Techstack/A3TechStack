import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/css/app.css';
import BackToTop from 'vue-backtotop';

import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://xgfhmcmycyxczyxhprvv.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhnZmhtY215Y3l4Y3p5eGhwcnZ2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5ODQ4NDYxNywiZXhwIjoyMDE0MDYwNjE3fQ.xxo_pFwX_vLKfQkFu-Hi3Oq79HM0NfoY6qX8OuljiXM')

const feather = require('feather-icons');
feather.replace();

createApp(App)
	.use(router)
	.use(BackToTop)
	.mount('#app');

const appTheme = localStorage.getItem('theme');

// Check what is the active theme and change theme when user clicks on the theme button in header.
if (
	appTheme === 'dark' &&
	document.querySelector('body').classList.contains('app-theme')
) {
	document.querySelector('body').classList.add('bg-primary-dark');
} else {
	document.querySelector('body').classList.add('bg-secondary-light');
}
