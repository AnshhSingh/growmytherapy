/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Update font classes to match your custom fonts
        'cormorant': ['var(--font-freight-display)', 'Georgia', 'serif'],
        'sans': ['var(--font-freight-sans)', 'system-ui', 'sans-serif'],
        'serif': ['var(--font-freight-display)', 'Georgia', 'serif'],
      },
    },
  },
};
