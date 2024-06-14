// https://github.com/nuxt-themes/alpine/blob/main/nuxt.schema.ts
export default defineAppConfig({
  alpine: {
    title: 'Renan Paixão blog',
    description: 'Blog to share any stuff that I think to be useful to someone.',
    image: {
      src: '/social-card-preview.png',
      alt: 'An image showcasing my project.',
      width: 400,
      height: 300
    },
    header: {
      position: 'right', // possible value are : | 'left' | 'center' | 'right'
      logo: {
        path: 'dark-logo.svg', // path of the logo
        pathDark: 'light-logo.svg', // path of the logo in dark mode, leave this empty if you want to use the same logo
        alt: 'renan paixão' // alt of the logo
      }
    },
    footer: {
      credits: {
        enabled: false,
      },
      navigation: true,
      alignment: 'center',
      message: 'Follow me on' // string that will be displayed in the footer (leave empty or delete to disable)
    },
    socials: {
      linkedin: {
        icon: 'uil:linkedin',
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/renanpaixao'
      },
      github: 'renanpaixao'
    },
    form: {
      successMessage: 'Message sent. Thank you!'
    }
  }
})
