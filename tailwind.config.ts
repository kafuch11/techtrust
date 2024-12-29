import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	colors: {
  		btn_blue_s: '#053F4F',
  		btn_blue_m: '#05566D',
  		logo_blue: '#0B99FF',
  		logo_green: '#5CFB06',
  		hero_head: '#81A0E3',
  		hero_sub_head: '#46F9EA',
  		hero_p: '#7BD8E9',
  		featured_prod_head_s: '#FF8409',
  		featured_prod_head_e: '#FE9808',
  		featured_dot_active: '#D9D9D9EE',
  		featured_dot_unactive: '#D9D9D94A',
  		sale: '#E27C16',
  		sale_red: '#F52626',
  		sale_green: '#16E20B',
  		deal_card_s: '#302B2B',
  		deal_card_m: '#4D4747',
  		deal_card_e: '#141212',
  		star: '#FFEB0C',
  		black_grad_s: '#181818DD',
  		black_grad_m: '#333030',
  		black_grad_e: '#171616',
  		border_gray: '#C6B6B6',
  		transparent: '#00000000',
		redish_white:'#ffd3e8'
  	},
  	extend: {
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
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
