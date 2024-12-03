import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      keyframes: {
        rainbowText: {
          '0%': {
            color: '#ff4545'
          },
          '10%': {
            color: '#00ff99'
          },
          '50%': {
            color: '#006aff'
          },
          '75%': {
            color: '#ff0095'
          },
          '100%': {
            color: '#ff4545'
          }
        
        },

        rainbowBorder: {
          '0%': {
            'background-color': '#ff4545'
          },
          '10%': {
            'background-color': '#00ff99'
          },
          '50%': {
            'background-color': '#006aff'
          },
          '75%': {
            'background-color': '#ff0095'
          },
          '100%': {
            'background-color': '#ff4545'
          }
        
        }
      },
      animation: {
        'rainbowText': 'rainbowText 7s linear infinite',
        'rainbowText-fast': 'rainbowText 4s linear infinite',
        'rainbowBorder': 'rainbowBorder 7s linear infinite',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
