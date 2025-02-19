/** @type {import('tailwindcss').Config} */
module.exports = {
	prefix: 'tw-',
	important: false,
	content: [
		"**/*.{html, jsx, js}",
		"**/*.js",
		"**/*.html",
	],
	theme: {
		extend: {
			colors: {
				primary: "#FBBC04",
				// primary: "#BFFE66",
				secondary: "#BDB8FF",
			}
		},
	},
	plugins: [],
}

