import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  important: true,
  theme: {
    extend: {
      keyframes: {
        rainbowText: {
          '0%': {
            color: '#6666ff'
          },
          '10%': {
            color: '#0099ff'
          },
          '50%': {
            color: '#00ff00'
          },
          '75%': {
            color: '#ff3399'
          },
          '100%': {
            color: '#6666ff'
          }
        
        }
      },
      animation: {
        'rainbowText': 'rainbowText 7s linear infinite',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
