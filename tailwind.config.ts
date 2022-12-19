import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#130539',
        'soft-dark': '#F1ECFD',
        primary: '#D5C7FA',
        'text-color': '#374151'
      }
    }
  }
}
