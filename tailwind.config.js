/** @type {import('tailwindcss').Config} */
export default {
  content: [

    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}", 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "blacard":"#020617",
        "greencard":"#14532d",
        "whitecard":"#e2e8f0",
        "blacard2":"#1e293b",
        "greentext":"#a3e635",
        "emerald":"#059669",
        "gray":"#9ca3af",
        "blue":"#1d4ed8",
        "green":"#28a745",
        "teal600":"#0d9488",
        "green600":"#16a34a"
      },
    },
  },
  plugins: [],
}

