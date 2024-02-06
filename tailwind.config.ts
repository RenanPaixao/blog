import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
import tailwindTypography from '@tailwindcss/typography'

export default <Partial<Config>>{
  darkMode: 'class',
  content: ['./components/**/*.{vue,js,ts}', './app.vue'],
  theme: {
    extend: {
      colors: {
        ...defaultTheme.colors,
        'primary-dark': '#130539',
        'soft-dark': '#F1ECFD',
        primary: '#f6f3fc',
        'text-color': '#3D3D4F'
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [
    tailwindTypography
  ]
}
