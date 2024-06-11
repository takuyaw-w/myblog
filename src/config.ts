import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: 'takuyaw-w/blog',
  subtitle: '',
  lang: 'ja',
  themeColor: {
    hue: 150,
    fixed: true,
  },
  banner: {
    enable: false,
    src: 'assets/images/demo-banner.png', // Relative to the /src directory. Relative to the /public directory if it starts with '/'
    position: 'center', // Equivalent to object-position, defaults center
  },
  favicon: [],
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
    {
      name: 'GitHub',
      url: 'https://github.com/takuyaw-w/myblog',
      external: true,
    },
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/avatar.jpg',
  name: 'たくや',
  bio: '2児の父',
  links: [
    {
      name: 'bluesky',
      icon: 'fa6-brands:bluesky',
      url: 'https://bsky.app/profile/takuyaw-w.dev',
    },
    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: 'https://github.com/takuyaw-w',
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: false,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}
