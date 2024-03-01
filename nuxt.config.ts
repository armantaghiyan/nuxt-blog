export default defineNuxtConfig({
    devtools: {enabled: true},

    // @ts-ignore
    modules: ['@pinia/nuxt'],

    appConfig: {
        baseURL: 'http://localhost:8000/api/',
    },
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    components: [
        {
            path: '~/components',
            pathPrefix: false,
        },
    ],
})
