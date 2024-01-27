import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'cer-platinum': '#E9E8E3ff',
        'cer-ashGray': '#B3CABDff',
        'cer-feldgrau': '#516A5Bff',
        'cer-champagne': '#FCE9D1ff',
        'cer-darkSlateGray': '#35493Dff',
        'con-white': '#F5F7FBff',
        'con-cadetGray': '#85A4B9ff',
        'con-charcoal': '#344657ff',
        'con-pumpkin': '#EA732Bff',
        'con-richBlack': '#02090Dff',
        'con-blue': '#244074',
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      'business'
    ],
  },
} satisfies Config;