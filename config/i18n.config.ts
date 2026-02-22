import { Options } from 'nuxt-i18n';

const isProd = process.env.NODE_ENV === 'production';

export const i18n: Options = {
  locales: [
    { code: 'en', iso: 'en-US', name: 'English', file: 'en.ts' },
  ],
  defaultLocale: 'en',
  vueI18n: {
    fallbackLocale: 'en',
  },
  strategy: 'no_prefix',
  lazy: isProd,
  langDir: 'locales/',
  seo: false,
  vuex: {
    moduleName: 'i18n',
    syncLocale: true,
  },
  detectBrowserLanguage: false,
};
