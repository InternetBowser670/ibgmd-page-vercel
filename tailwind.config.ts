import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    daisyui: {
    themes: [
      {
        
          InternetBowser: {
            
            "primary": "#dc2626",
                      
            "secondary": "#3b82f6",
                      
            "accent": "#00ffff",
                      
            "neutral": "#111827",
                      
            "base-100": "#000000",
                      
            "info": "#0000ff",
                      
            "success": "#00ff00",
                      
            "warning": "#00ff00",
                      
            "error": "#ff0000",
          },
        
      },
    ], 
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
  	extend: {
  		keyframes: {
  			fadeIn: {
  				from: {
  					opacity: '0'
  				},
  				to: {
  					opacity: '1'
  				}
  			},
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
  			fade: 'fadeIn 1s ease-in-out',
  			rainbowText: 'rainbowText 7s linear infinite',
  			'rainbowText-fast': 'rainbowText 4s linear infinite',
  			rainbowBorder: 'rainbowBorder 7s linear infinite'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [
      require("tailwindcss-animate")
],
} satisfies Config;
