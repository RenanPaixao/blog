import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
import tailwindTypography from '@tailwindcss/typography'

export default <Partial<Config>>{
  darkMode: 'class',
  content: ['./components/**/*.{vue,js,ts}', './app.vue'],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#130539',
        'soft-dark': '#F1ECFD',
        primary: '#D5C7FA',
        'text-color': '#374151'
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [tailwindTypography]
}
