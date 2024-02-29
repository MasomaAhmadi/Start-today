/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: "jit",
	content: ["./*.html"],
	theme: {
		extend: {
			keyframes: {
				// "water-way-l": {
				// 	"0%": { top: "0", left: "0" },
				// 	"25%": { top: "100%", left: "0" },
				// 	"50%": { top: "100%", left: "100%" },
				// 	"75%": { top: "0", left: "100%" },
				// 	"100%": { top: "0", left: "0" },
				// },				
			},
			animation: {
				// "water-drop-l1": "water-way-l 6s linear infinite",
			},
		},
	},
	plugins: [require("tailwindcss-animated")],
};
