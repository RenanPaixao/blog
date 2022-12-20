import type { Config } from 'tailwindcss'
import tailwindTypography from '@tailwindcss/typography'

export default <Partial<Config>>{
  darkMode: 'class',
  content: ['./index.html', './components/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#130539',
        'soft-dark': '#F1ECFD',
        primary: '#D5C7FA',
        'text-color': '#374151'
      },
      fontFamily: {
        sans: ['Inter']
      }
    }
  },
  plugins: [tailwindTypography]
}
