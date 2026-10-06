/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#101B33', soft: '#4A5671' },
        paper: { DEFAULT: '#F7F7F5', deep: '#ECECE8' },
        accent: { DEFAULT: '#D12C3C', dark: '#B01F2F' },
      },
    fontFamily: {
      display: ['"Poppins"', 'system-ui', 'sans-serif'],
      sans: ['"Poppins"', 'system-ui', 'sans-serif'],
      mono: ['"Poppins"', 'ui-monospace', 'monospace'],
    },
    },
  },
  plugins: [],
}
