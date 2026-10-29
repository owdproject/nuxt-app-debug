import { defineDesktopConfig } from '@owdproject/nuxt'

export default defineDesktopConfig({
  theme: '@owdproject/theme-nuxt-nova',
  apps: ['@owdproject/app-nuxt-debug'],
  systemBar: {
    enabled: true,
    startButton: true,
  },
  about: {
    title: 'Debug (playground)',
    subtitle: 'app-debug · theme-nova',
    href: 'https://github.com/owdproject/app-debug',
    versionText: 'Nuxt Desktop',
    icons: [
      {
        title: 'Open Web Desktop',
        name: 'mdi:hexagon-multiple-outline',
        size: 24,
      },
      {
        title: 'Nuxt.js',
        name: 'simple-icons:nuxt',
        size: 25,
        style: 'margin-top: -1px',
      },
    ],
  },
})
