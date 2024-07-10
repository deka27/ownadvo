/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
	  extend: {
	    colors: {
		 customPrimary: "rgb(97, 75, 195)",
		 customSecondary: "rgb(200, 255, 224)",
		 customDarkBg1: "rgb(9, 21, 64)",
		 customDarkBg2: "rgb(61, 81, 140)",
		 customDarkBg3: "rgb(9, 21, 64)",
		 customDarkBg3Hover: "rgb(55, 56, 62)",
		 customContentSubtitle: "rgb(178, 184, 205)",
		 customGrayBorder: "rgb(255,255,255,0.6)",
		 customGrayText: "rgb(255, 242, 216)",
		 customDarkBgTransparent: "rgb(61, 81, 140, 0.7)",
		 customDarkBgTransparentDarker: "rgb(0,0,0,0.5)",
		 customDarkBgTransparentLighter: "rgb(48, 49, 54, 0.7)"  
	    },
	    fontFamily: {
		 Inter: "Inter",
	    },
	    screens: {
		 xs: "530px",
		 sm: "640px",
		 md: "768px",
		 lg: "1024px",
		 xl: "1280px",
		 xll: "1400px",
		 "2xl": "1536px",
	    },
	  },
	},
   };
   