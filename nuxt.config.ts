// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css", "primeicons/primeicons.css"],
  ssr: false,
  app: {
    head: {
      title: "BookShop",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      meta: [
        {
          name: "description",
          content: "Book shop contains books and  book details.",
        },
        {
          name: "keywords",
          content: "books, search book, add book",
        },
        {
          name: "og:title",
          content: "BookShop",
        },
        {
          name: "og:description",
          content: "Book shop contains books and  book details.",
        },
        {
          name: "og:site_name",
          content: "BookShop",
        },
        {
          name: "twitter:title",
          content: "BookShop",
        },
        {
          name: "twitter:description",
          content: "Book shop contains books and  book details.",
        },
      ],
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  imports: {
    dirs: ["types/*.ts", "store/*.ts", "types/**/*.ts"],
  },
  modules: ["@pinia/nuxt", "@nuxt/ui"],
  colorMode: {
    preference: "light",
  },
  runtimeConfig: {
    secretKey: "",
    public: {
      apiBase: "",
    },
  },
});