/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				purple: {
					900: '#312e81',
					500: '#a855f7'
				},
				pink: {
					500: '#ec4899',
					600: '#db2777'
				}
			}
		},
	},
	plugins: [],
} 