module.exports = {
	purge: ["./public/**/*.html", "./src/**/*.html", "./src/**/*.vue"],
	darkMode: "class", // or 'media' or 'class'
	theme: {
		extend: {},
		maxHeight: {
			"0": "0",
			full: "100%",
			"1/2": "50%",
			"3/5": "60%",
		},
		minHeight: {
			"0": "0",
			full: "100%",
			"112": "28rem",
		},
		minWidth: {
			"0": "0",
			full: "100%",
			"92": "23rem",
		},
		maxWidth: {
			"0": "0",
			full: "100%",
			"3xl": "48rem",
			"6xl": "72rem",
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
