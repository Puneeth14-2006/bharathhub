/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          900: '#0E1B24',
          700: '#1E2E3A',
          500: '#4A5C68',
          300: '#8C9BA6',
          100: '#E7ECEF',
        },
        navy: {
          950: '#071A2C',
          900: '#0C2A45',
          800: '#0F3D63',
          700: '#144C7A',
          600: '#1B5E94',
          500: '#2472AE',
          200: '#B9D6EA',
          100: '#DCEAF5',
          50: '#F1F7FB',
        },
        saffron: {
          700: '#C1560F',
          600: '#D9661A',
          500: '#EC7A2A',
          400: '#F2934F',
          100: '#FDE6D3',
          50: '#FEF3E8',
        },
        leaf: {
          700: '#146C43',
          600: '#188550',
          500: '#1E9C5F',
          100: '#D9F2E3',
          50: '#EFFAF3',
        },
        sand: {
          50: '#FBF9F5',
          100: '#F5F1E9',
        },
        violet: {
          700: '#5B3AA6',
          600: '#6D46C2',
          500: '#7E56D9',
          100: '#EAE1FA',
          50: '#F5F0FD',
        },
      },
      fontFamily: {
        display: ['"Sora"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 2px 10px rgba(14, 27, 36, 0.06)',
        card: '0 4px 20px rgba(14, 27, 36, 0.08)',
        lift: '0 14px 34px rgba(12, 42, 69, 0.14)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
    },
  },
  plugins: [],
}
