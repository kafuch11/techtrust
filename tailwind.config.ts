import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors:{
      btn_blue_s:'#053F4F',
      btn_blue_m:'#05566D',
      logo_blue:'#0B99FF',
      logo_green:'#5CFB06',
      hero_head:'#81A0E3',
      hero_sub_head:'#46F9EA',
      hero_p:'#7BD8E9',
      featured_prod_head_s:'#FF8409',
      featured_prod_head_e:'#FE9808',
      featured_dot_active:'#D9D9D9EE',
      featured_dot_unactive:'#D9D9D94A',
      sale:'#E27C16',
      sale_red:'#F52626',
      sale_green:'#16E20B',
      deal_card_s:'#302B2B',
      deal_card_m:'#4D4747',
      deal_card_e:'#141212',
      star:'#FFEB0C',
      black_grad_s:'#181818DD',
      black_grad_m:'#333030',
      black_grad_e:'#171616',
      border_gray:'#C6B6B6',
      transparent:'#00000000'
    },
    extend: {
      colors: {
        background: "#000000",
        foreground: "#ffffff",
      },
    },
  },
  plugins: [],
} satisfies Config;
